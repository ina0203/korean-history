const express = require('express');
const router = express.Router();
const { seedDatabase } = require('../seed-data');

/**
 * 샘플 데이터 초기화 (관리자용)
 * POST /api/seed 로 호출
 */
router.post('/', async (req, res) => {
  try {
    const count = await seedDatabase();
    res.json({ 
      message: `${count}개의 퀴즈 데이터가 초기화되었습니다.`,
      count 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
