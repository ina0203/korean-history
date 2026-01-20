const express = require('express');
const router = express.Router();
const db = require('../db');
const { calculateNextLevel } = require('../utils/difficulty');

// 레벨에 맞는 퀴즈 조회
router.get('/by-level/:userId/:level', async (req, res) => {
  try {
    const { userId, level } = req.params;
    
    const quizzes = await db.query(
      'SELECT * FROM quizzes WHERE level = ? ORDER BY RANDOM() LIMIT 5',
      [level]
    );
    
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 퀴즈 답변 제출
router.post('/submit', async (req, res) => {
  try {
    const { userId, quizId, userAnswer } = req.body;
    
    // 정답 확인
    const quiz = await db.query(
      'SELECT * FROM quizzes WHERE id = ?',
      [quizId]
    );
    
    if (!quiz.length) {
      return res.status(404).json({ error: '퀴즈를 찾을 수 없습니다.' });
    }
    
    const isCorrect = quiz[0].correct_answer.toLowerCase() === 
                     userAnswer.toLowerCase();
    
    // 사용자 진행도 업데이트
    const progress = await db.query(
      'SELECT * FROM user_progress WHERE user_id = ?',
      [userId]
    );
    
    if (!progress.length) {
      await db.run(
        `INSERT INTO user_progress 
         (user_id, total_correct, total_attempted) 
         VALUES (?, ?, ?)`,
        [userId, isCorrect ? 1 : 0, 1]
      );
    } else {
      await db.run(
        `UPDATE user_progress 
         SET total_correct = total_correct + ?, 
             total_attempted = total_attempted + 1,
             updated_at = CURRENT_TIMESTAMP
         WHERE user_id = ?`,
        [isCorrect ? 1 : 0, userId]
      );
    }
    
    // 틀린 경우 복습 목록에 추가
    if (!isCorrect) {
      await db.run(
        `INSERT INTO review_queue 
         (user_id, quiz_id, period_id, attempts) 
         VALUES (?, ?, ?, ?)`,
        [userId, quizId, quiz[0].period_id, 1]
      );
    }
    
    // 다음 레벨 계산
    const updatedProgress = await db.query(
      'SELECT * FROM user_progress WHERE user_id = ?',
      [userId]
    );
    
    const nextLevel = calculateNextLevel(
      updatedProgress[0].total_correct,
      updatedProgress[0].total_attempted
    );
    
    res.json({
      isCorrect,
      correctAnswer: quiz[0].correct_answer,
      explanation: `${quiz[0].title}: ${quiz[0].correct_answer}`,
      nextLevel
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 복습 목록 조회
router.get('/review/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const reviewItems = await db.query(
      `SELECT rq.*, q.question, q.correct_answer, q.question_type
       FROM review_queue rq
       JOIN quizzes q ON rq.quiz_id = q.id
       WHERE rq.user_id = ?
       ORDER BY rq.attempts DESC
       LIMIT 10`,
      [userId]
    );
    
    res.json(reviewItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
