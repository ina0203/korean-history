const express = require('express');
const router = express.Router();
const db = require('../db');

// 모든 역사 시대 조회
router.get('/periods', async (req, res) => {
  try {
    const periods = await db.query(
      'SELECT * FROM history_periods ORDER BY start_year ASC'
    );
    res.json(periods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 특정 시대의 상세 정보 조회
router.get('/periods/:id', async (req, res) => {
  try {
    const period = await db.query(
      'SELECT * FROM history_periods WHERE id = ?',
      [req.params.id]
    );
    
    const events = await db.query(
      'SELECT * FROM history_events WHERE period_id = ? ORDER BY year ASC',
      [req.params.id]
    );
    
    res.json({ ...period[0], events });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 사건 조회
router.get('/events/:periodId', async (req, res) => {
  try {
    const events = await db.query(
      'SELECT * FROM history_events WHERE period_id = ? ORDER BY year ASC',
      [req.params.periodId]
    );
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 역사 시대 추가 (관리자용)
router.post('/periods', async (req, res) => {
  try {
    const { name, era, start_year, end_year, description } = req.body;
    const result = await db.run(
      `INSERT INTO history_periods 
       (name, era, start_year, end_year, description) 
       VALUES (?, ?, ?, ?, ?)`,
      [name, era, start_year, end_year, description]
    );
    res.json({ id: result.id, message: '역사 시대가 추가되었습니다.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
