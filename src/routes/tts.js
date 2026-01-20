const express = require('express');
const router = express.Router();
const db = require('../db');
const { calculateScore, checkBadges, calculateStreak } = require('../utils/gamification');

/**
 * 음성으로 질문 읽기 (TTS)
 * GET /api/tts/question/:quizId
 */
router.get('/question/:quizId', async (req, res) => {
  try {
    const { quizId } = req.params;
    
    const quiz = await db.query(
      'SELECT * FROM quizzes WHERE id = ?',
      [quizId]
    );
    
    if (!quiz.length) {
      return res.status(404).json({ error: '퀴즈를 찾을 수 없습니다.' });
    }
    
    // TTS 문장 생성
    const questionText = quiz[0].question;
    
    // 클라이언트에서 Web Speech API를 사용하도록 안내
    res.json({
      text: questionText,
      format: 'text-to-speech',
      language: 'ko-KR',
      rate: 1.0,
      pitch: 1.0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 정답 음성 읽기
 * GET /api/tts/answer/:quizId
 */
router.get('/answer/:quizId', async (req, res) => {
  try {
    const { quizId } = req.params;
    
    const quiz = await db.query(
      'SELECT * FROM quizzes WHERE id = ?',
      [quizId]
    );
    
    if (!quiz.length) {
      return res.status(404).json({ error: '퀴즈를 찾을 수 없습니다.' });
    }
    
    const text = `정답은 ${quiz[0].correct_answer}입니다. ${quiz[0].explanation}`;
    
    res.json({
      text: text,
      format: 'text-to-speech',
      language: 'ko-KR',
      rate: 1.0,
      pitch: 1.0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 설명 음성 읽기
 * GET /api/tts/explanation/:quizId
 */
router.get('/explanation/:quizId', async (req, res) => {
  try {
    const { quizId } = req.params;
    
    const quiz = await db.query(
      'SELECT * FROM quizzes WHERE id = ?',
      [quizId]
    );
    
    if (!quiz.length) {
      return res.status(404).json({ error: '퀴즈를 찾을 수 없습니다.' });
    }
    
    res.json({
      text: quiz[0].explanation,
      format: 'text-to-speech',
      language: 'ko-KR',
      rate: 0.9,
      pitch: 1.0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
