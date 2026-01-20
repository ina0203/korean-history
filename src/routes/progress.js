const express = require('express');
const router = express.Router();
const db = require('../db');

// 사용자 진행도 조회
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const progress = await db.query(
      'SELECT * FROM user_progress WHERE user_id = ?',
      [userId]
    );
    
    if (!progress.length) {
      return res.json({
        user_id: userId,
        current_level: 1,
        total_correct: 0,
        total_attempted: 0,
        accuracy: 0
      });
    }
    
    const p = progress[0];
    const accuracy = p.total_attempted > 0 
      ? Math.round((p.total_correct / p.total_attempted) * 100)
      : 0;
    
    res.json({ ...p, accuracy });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 사용자 진행도 업데이트
router.put('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { current_level, last_studied_period } = req.body;
    
    const result = await db.run(
      `UPDATE user_progress 
       SET current_level = COALESCE(?, current_level),
           last_studied_period = COALESCE(?, last_studied_period),
           updated_at = CURRENT_TIMESTAMP
       WHERE user_id = ?`,
      [current_level || null, last_studied_period || null, userId]
    );
    
    res.json({ message: '진행도가 업데이트되었습니다.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 통계 조회
router.get('/stats/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const progress = await db.query(
      'SELECT * FROM user_progress WHERE user_id = ?',
      [userId]
    );
    
    const reviewCount = await db.query(
      'SELECT COUNT(*) as count FROM review_queue WHERE user_id = ?',
      [userId]
    );
    
    res.json({
      ...progress[0],
      review_count: reviewCount[0].count,
      accuracy: progress[0] ? Math.round((progress[0].total_correct / progress[0].total_attempted) * 100) : 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
