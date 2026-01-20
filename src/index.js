const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
const historyRoutes = require('./routes/history');
const quizRoutes = require('./routes/quiz');
const progressRoutes = require('./routes/progress');
const seedRoutes = require('./routes/seed');
const gameRoutes = require('./routes/game');
const ttsRoutes = require('./routes/tts');
const storyModesRoutes = require('./routes/story-modes');

app.use('/api/history', historyRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/seed', seedRoutes);
app.use('/api/game', gameRoutes);
app.use('/api/tts', ttsRoutes);
app.use('/api/story', storyModesRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Initialize database
db.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`제인이 한국 역사 학습 서버가 포트 ${PORT}에서 실행 중입니다.`);
  });
}).catch(err => {
  console.error('데이터베이스 초기화 오류:', err);
  process.exit(1);
});

module.exports = app;
