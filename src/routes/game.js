const express = require('express');
const router = express.Router();
const db = require('../db');
const { calculateScore, gameModes, checkBadges, calculateStreak } = require('../utils/gamification');

/**
 * 게임 모드 목록
 * GET /api/game/modes
 */
router.get('/modes', (req, res) => {
  res.json(gameModes);
});

/**
 * 게임 모드별 퀴즈 시작
 * GET /api/game/start/:userId/:mode/:level
 */
router.get('/start/:userId/:mode/:level', async (req, res) => {
  try {
    const { userId, mode, level } = req.params;
    
    if (!gameModes[mode]) {
      return res.status(400).json({ error: '잘못된 게임 모드입니다.' });
    }
    
    const gameMode = gameModes[mode];
    const questionsCount = gameMode.questionsPerSession;
    
    let query = 'SELECT * FROM quizzes WHERE level = ?';
    let params = [level];
    
    if (questionsCount > 0) {
      query += ' ORDER BY RANDOM() LIMIT ?';
      params.push(questionsCount);
    } else {
      query += ' ORDER BY RANDOM() LIMIT 10'; // 무제한 모드에서는 초기 10개
      params.pop(); // level 파라미터만 유지
      params = [level];
    }
    
    const quizzes = await db.query(query, params);
    
    res.json({
      mode: mode,
      gameMode: gameMode,
      quizzes: quizzes,
      sessionId: `session_${userId}_${mode}_${Date.now()}`,
      startTime: new Date()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 게임 모드 답변 제출
 * POST /api/game/submit
 */
router.post('/submit', async (req, res) => {
  try {
    const { userId, quizId, userAnswer, mode, isCorrect } = req.body;
    
    if (!gameModes[mode]) {
      return res.status(400).json({ error: '잘못된 게임 모드입니다.' });
    }
    
    // 사용자 진행도 조회
    let progress = await db.query(
      'SELECT * FROM user_progress WHERE user_id = ?',
      [userId]
    );
    
    if (!progress.length) {
      await db.run(
        `INSERT INTO user_progress 
         (user_id, current_level, total_score) 
         VALUES (?, ?, ?)`,
        [userId, 1, 0]
      );
      progress = await db.query(
        'SELECT * FROM user_progress WHERE user_id = ?',
        [userId]
      );
    }
    
    const currentProgress = progress[0];
    
    // 점수 계산
    const quiz = await db.query(
      'SELECT * FROM quizzes WHERE id = ?',
      [quizId]
    );
    const score = calculateScore(isCorrect, currentProgress.current_level, currentProgress.current_streak, 'medium');
    const scoreMultiplier = gameModes[mode].scoreMultiplier;
    const finalScore = Math.round(score * scoreMultiplier);
    
    // 연승 계산
    const { newStreak, newMaxStreak } = calculateStreak(
      isCorrect,
      currentProgress.current_streak,
      currentProgress.max_streak
    );
    
    // 배지 체크
    const updatedProgress = {
      ...currentProgress,
      current_streak: newStreak,
      max_streak: newMaxStreak,
      total_score: (currentProgress.total_score || 0) + (isCorrect ? finalScore : 0),
      total_attempted: (currentProgress.total_attempted || 0) + 1,
      total_correct: (currentProgress.total_correct || 0) + (isCorrect ? 1 : 0)
    };
    
    updatedProgress.accuracy = Math.round((updatedProgress.total_correct / updatedProgress.total_attempted) * 100);
    
    const { badges, newBadges } = checkBadges(updatedProgress, isCorrect);
    
    // DB 업데이트
    await db.run(
      `UPDATE user_progress 
       SET total_score = ?,
           current_streak = ?,
           max_streak = ?,
           total_attempted = total_attempted + 1,
           total_correct = total_correct + ?,
           badges = ?,
           updated_at = CURRENT_TIMESTAMP
       WHERE user_id = ?`,
      [
        updatedProgress.total_score,
        newStreak,
        newMaxStreak,
        isCorrect ? 1 : 0,
        JSON.stringify(badges),
        userId
      ]
    );
    
    res.json({
      isCorrect,
      score: finalScore,
      totalScore: updatedProgress.total_score,
      streak: newStreak,
      maxStreak: newMaxStreak,
      newBadges: newBadges,
      correctAnswer: quiz[0]?.correct_answer,
      explanation: quiz[0]?.explanation
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 게임 통계
 * GET /api/game/stats/:userId
 */
router.get('/stats/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const stats = await db.query(
      'SELECT * FROM user_progress WHERE user_id = ?',
      [userId]
    );
    
    if (!stats.length) {
      return res.json({
        userId,
        totalScore: 0,
        maxStreak: 0,
        currentStreak: 0,
        badges: {},
        gamesPlayed: 0
      });
    }
    
    const stat = stats[0];
    
    res.json({
      userId,
      totalScore: stat.total_score || 0,
      maxStreak: stat.max_streak || 0,
      currentStreak: stat.current_streak || 0,
      badges: JSON.parse(stat.badges || '{}'),
      gamesPlayed: stat.total_attempted || 0,
      accuracy: stat.accuracy || 0,
      level: stat.current_level || 1
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 랭킹 조회
 * GET /api/game/ranking/:topN
 */
router.get('/ranking/:topN', async (req, res) => {
  try {
    const { topN } = req.params;
    const limit = parseInt(topN) || 10;
    
    const ranking = await db.query(
      `SELECT user_id, total_score, current_level, accuracy, max_streak, total_attempted
       FROM user_progress
       ORDER BY total_score DESC
       LIMIT ?`,
      [limit]
    );
    
    res.json({
      ranking: ranking.map((user, index) => ({
        rank: index + 1,
        userId: user.user_id,
        score: user.total_score,
        level: user.current_level,
        accuracy: user.accuracy,
        maxStreak: user.max_streak,
        totalGames: user.total_attempted
      }))
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 사용자 랭킹 위치
 * GET /api/game/rank/:userId
 */
router.get('/rank/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const userScore = await db.query(
      'SELECT total_score FROM user_progress WHERE user_id = ?',
      [userId]
    );
    
    if (!userScore.length) {
      return res.json({ rank: 0, totalUsers: 0 });
    }
    
    const totalUsers = await db.query(
      'SELECT COUNT(*) as count FROM user_progress'
    );
    
    const rank = await db.query(
      `SELECT COUNT(*) as count FROM user_progress 
       WHERE total_score > ?`,
      [userScore[0].total_score]
    );
    
    res.json({
      rank: rank[0].count + 1,
      totalUsers: totalUsers[0].count,
      score: userScore[0].total_score
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
