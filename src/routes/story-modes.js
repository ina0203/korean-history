const express = require('express');
const router = express.Router();
const db = require('../db');
const { newGameModes } = require('./new-game-modes');
const { koreanHistoryStories } = require('../data/history-stories');

/**
 * 새로운 게임 모드 목록
 */
router.get('/modes', (req, res) => {
  res.json(newGameModes);
});

/**
 * 스토리 모드 - 순서대로 역사 배우기
 */
router.get('/story', (req, res) => {
  try {
    // 스토리와 함께 데이터 반환
    res.json({
      gameMode: newGameModes.story,
      stories: koreanHistoryStories
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 영웅 수집 게임 - 영웅 관련 문제 모음
 */
router.get('/heroes', async (req, res) => {
  try {
    // 유명한 인물 관련 문제들
    const heroQuestions = [
      { name: "단군", era: "고대", description: "고조선의 건국자" },
      { name: "광개토대왕", era: "고대", description: "고구려를 강대국으로 만들었어요" },
      { name: "이순신", era: "조선", description: "임진왜란의 해전 영웅" },
      { name: "세종대왕", era: "조선", description: "한글을 만들었어요" },
      { name: "왕건", era: "고려", description: "고려의 건국자" },
      { name: "유관순", era: "근현대", description: "3·1 운동의 영웅" },
      { name: "김구", era: "근현대", description: "임시정부 주석" },
      { name: "을지문덕", era: "고대", description: "살수 대첩의 영웅" }
    ];

    res.json({
      gameMode: newGameModes.heroes,
      heroes: heroQuestions
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 타임라인 게임 - 사건을 시간 순서대로 배열
 */
router.get('/timeline', async (req, res) => {
  try {
    const events = [
      { event: "고조선 건국", year: "BC 2333년" },
      { event: "삼국통일", year: "668년" },
      { event: "고려 건국", year: "918년" },
      { event: "조선 건국", year: "1392년" },
      { event: "한글 창제", year: "1443년" },
      { event: "임진왜란", year: "1592년" },
      { event: "3·1 운동", year: "1919년" },
      { event: "광복", year: "1945년" },
      { event: "대한민국 건국", year: "1948년" },
      { event: "6·25전쟁 발발", year: "1950년" }
    ];

    // 무작위로 섞기
    const shuffled = [...events].sort(() => Math.random() - 0.5);

    res.json({
      gameMode: newGameModes.timeline,
      events: shuffled,
      correct: events // 정답
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 더블 업 게임 - 연속 정답 시 점수 배수 증가
 */
router.post('/doubleup/submit', async (req, res) => {
  try {
    const { userId, isCorrect, currentMultiplier } = req.body;

    let newMultiplier = isCorrect ? currentMultiplier * 2 : 1;
    let score = isCorrect ? 100 * newMultiplier : 0;

    res.json({
      isCorrect,
      score,
      multiplier: newMultiplier,
      message: isCorrect ? `점수 배수: x${newMultiplier}` : '초기화됨!'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 봇 배틀 - AI와 경쟁
 */
router.post('/botbattle/start', (req, res) => {
  try {
    res.json({
      gameMode: newGameModes.botbattle,
      bot: {
        name: "역사박사 봇",
        level: "3",
        avatar: "🤖"
      },
      battleId: `battle_${Date.now()}`
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 왕조 빌더 - 나만의 왕조 만들기
 */
router.get('/dynasty/builder', (req, res) => {
  try {
    const choices = {
      period: ["고대", "중세", "조선", "근현대"],
      name: ["새로운 왕조", "위대한 제국", "황금 왕국", "신비한 나라"],
      policies: [
        { name: "문화 발전", bonus: 20, description: "예술과 과학 발전" },
        { name: "경제 성장", bonus: 25, description: "무역과 상업 발전" },
        { name: "군사력", bonus: 15, description: "방어력 강화" },
        { name: "백성 행복", bonus: 30, description: "인기도 증가" }
      ]
    };

    res.json({
      gameMode: newGameModes.dynasty,
      choices
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 미션 챌린지 - 특정 미션 완료
 */
router.get('/mission/list', (req, res) => {
  try {
    const missions = [
      {
        id: "mission_1",
        title: "⚔️ 이순신 장군을 도와 일본군 격퇴하기",
        description: "임진왜란 관련 5개 문제를 모두 맞춰야 해요!",
        reward: 500,
        difficulty: "보통"
      },
      {
        id: "mission_2",
        title: "🎓 세종대왕의 과학 발명 마스터",
        description: "세종 시대의 발명품 관련 문제 5개 완료",
        reward: 450,
        difficulty: "쉬움"
      },
      {
        id: "mission_3",
        title: "👑 모든 왕 맞추기",
        description: "한국 역사의 모든 시대별 건국자를 맞춰요",
        reward: 700,
        difficulty: "어려움"
      },
      {
        id: "mission_4",
        title: "🌍 현대사 완전정복",
        description: "근현대 한국 역사 10개 문제 완료",
        reward: 600,
        difficulty: "어려움"
      }
    ];

    res.json({
      gameMode: newGameModes.mission,
      missions
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * 카테고리 체인 - 특정 카테고리 연속 정답
 */
router.get('/category/list', (req, res) => {
  try {
    const categories = [
      { id: 1, name: "🏯 고대 시대", era: "고대", color: "#FF6B6B" },
      { id: 2, name: "⚔️ 삼국 시대", era: "삼국", color: "#4ECDC4" },
      { id: 3, name: "👑 고려", era: "고려", color: "#FFD93D" },
      { id: 4, name: "🎓 조선", era: "조선", color: "#AA96DA" },
      { id: 5, name: "🚩 일제강점기", era: "일제강점기", color: "#2A2A2A" },
      { id: 6, name: "🌍 현대", era: "현대", color: "#FF6B35" }
    ];

    res.json({
      gameMode: newGameModes.category,
      categories
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
