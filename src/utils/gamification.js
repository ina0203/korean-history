/**
 * 게임화 시스템
 * 스코어, 배지, 랭킹 관리
 */

// 배지 시스템 정의
const badgeSystem = {
  first_correct: { name: '첫 정답', icon: '🎯', description: '첫 번째 문제를 맞혔어요!' },
  streak_5: { name: '5연승', icon: '🔥', description: '5문제를 연속으로 맞혔어요!' },
  streak_10: { name: '10연승', icon: '🌟', description: '10문제를 연속으로 맞혔어요!' },
  perfect_session: { name: '완벽한 세션', icon: '💯', description: '한 세션을 완벽하게 풀었어요!' },
  level_10: { name: '최고 레벨', icon: '👑', description: 'Level 10에 도달했어요!' },
  accuracy_90: { name: '90% 정확도', icon: '🎓', description: '90% 이상의 정확도를 달성했어요!' },
  quiz_100: { name: '백 문제 도전', icon: '💪', description: '100문제를 풀었어요!' },
  quiz_500: { name: '오백 문제 마스터', icon: '🏆', description: '500문제를 풀었어요!' },
  comeback: { name: '역전의 발동', icon: '⚡', description: '5연속 틀린 후 정답했어요!' },
  topic_master: { name: '주제 마스터', icon: '📚', description: '특정 주제에서 완벽한 점수!' }
};

// 점수 계산
function calculateScore(isCorrect, level, streak, difficulty) {
  let baseScore = isCorrect ? 10 : 0;
  
  // 레벨별 배수
  const levelMultiplier = level <= 3 ? 1 : level <= 6 ? 1.5 : 2;
  
  // 연승 보너스
  const streakBonus = isCorrect ? Math.min(streak * 5, 50) : 0;
  
  // 난이도 보너스
  const difficultyBonus = difficulty === 'hard' ? 20 : difficulty === 'medium' ? 10 : 0;
  
  return Math.round(baseScore * levelMultiplier + streakBonus + difficultyBonus);
}

// 배지 획득 체크
function checkBadges(userProgress, isCorrect) {
  const badges = userProgress.badges ? JSON.parse(userProgress.badges) : {};
  const newBadges = [];
  
  // 첫 정답
  if (!badges.first_correct && isCorrect) {
    badges.first_correct = true;
    newBadges.push('first_correct');
  }
  
  // 연승 배지
  if (isCorrect) {
    if (!badges.streak_5 && userProgress.current_streak >= 5) {
      badges.streak_5 = true;
      newBadges.push('streak_5');
    }
    if (!badges.streak_10 && userProgress.current_streak >= 10) {
      badges.streak_10 = true;
      newBadges.push('streak_10');
    }
  }
  
  // 완벽한 세션 (한 세션에 100% 정답)
  if (userProgress.total_attempted >= 5 && userProgress.accuracy === 100) {
    if (!badges.perfect_session) {
      badges.perfect_session = true;
      newBadges.push('perfect_session');
    }
  }
  
  // 최고 레벨
  if (!badges.level_10 && userProgress.current_level >= 10) {
    badges.level_10 = true;
    newBadges.push('level_10');
  }
  
  // 마스터 (정확도 90%)
  if (!badges.accuracy_90 && userProgress.accuracy >= 90) {
    badges.accuracy_90 = true;
    newBadges.push('accuracy_90');
  }
  
  // 100문제 풀기
  if (!badges.quiz_100 && userProgress.total_attempted >= 100) {
    badges.quiz_100 = true;
    newBadges.push('quiz_100');
  }
  
  // 500문제 풀기
  if (!badges.quiz_500 && userProgress.total_attempted >= 500) {
    badges.quiz_500 = true;
    newBadges.push('quiz_500');
  }
  
  return { badges, newBadges };
}

// 레벨 계산
function calculateNextLevel(totalCorrect, totalAttempted) {
  if (totalAttempted === 0) return 1;
  
  const accuracy = (totalCorrect / totalAttempted) * 100;
  
  if (accuracy >= 90) return Math.min(10, Math.floor(totalAttempted / 10) + 7);
  if (accuracy >= 80) return Math.min(10, Math.floor(totalAttempted / 10) + 5);
  if (accuracy >= 70) return Math.min(10, Math.floor(totalAttempted / 10) + 3);
  if (accuracy >= 60) return Math.min(10, Math.floor(totalAttempted / 10) + 2);
  
  return Math.max(1, Math.floor(totalAttempted / 15) + 1);
}

// 난이도 선택
function selectQuestionsByDifficulty(questions, userLevel) {
  return questions.filter(q => {
    const levelDiff = Math.abs(q.level - userLevel);
    return levelDiff <= 2;
  });
}

// 복습 우선순위
function calculateReviewPriority(attempts, daysSinceCreated) {
  return (attempts * 10) + (30 - Math.min(daysSinceCreated, 30));
}

// 스트릭 계산
function calculateStreak(isCorrect, currentStreak, maxStreak) {
  let newStreak = isCorrect ? currentStreak + 1 : 0;
  let newMaxStreak = Math.max(newStreak, maxStreak);
  
  return { newStreak, newMaxStreak };
}

// 게임 모드
const gameModes = {
  'normal': {
    name: '일반 모드',
    description: '천천히 학습하며 진행',
    timeLimit: null,
    questionsPerSession: 5,
    scoreMultiplier: 1
  },
  'speed': {
    name: '스피드 챌린지',
    description: '1문제 30초 제한, 빨수록 보너스!',
    timeLimit: 30,
    questionsPerSession: 10,
    scoreMultiplier: 1.5
  },
  'streak': {
    name: '연승 모드',
    description: '맞을 때마다 점수 증가, 틀리면 끝!',
    timeLimit: null,
    questionsPerSession: -1, // 무제한
    scoreMultiplier: 2
  },
  'boss': {
    name: '보스 챌린지',
    description: '3개를 모두 맞춰야 보스 격파',
    timeLimit: 60,
    questionsPerSession: 3,
    scoreMultiplier: 3
  }
};

module.exports = {
  calculateScore,
  checkBadges,
  calculateNextLevel,
  selectQuestionsByDifficulty,
  calculateReviewPriority,
  calculateStreak,
  gameModes,
  badgeSystem: {
    'first_correct': { name: '첫 정답', description: '첫 문제를 맞췄어요!', icon: '🌟' },
    'streak_5': { name: '연승 5회', description: '연속 5개 정답!', icon: '🔥' },
    'streak_10': { name: '연승 10회', description: '연속 10개 정답!!', icon: '🌪️' },
    'perfect_session': { name: '완벽한 세션', description: '세션에서 100% 정답!', icon: '💯' },
    'level_10': { name: '최고 레벨', description: '레벨 10에 도달!', icon: '👑' },
    'accuracy_90': { name: '마스터', description: '정확도 90% 달성!', icon: '🎓' },
    'quiz_100': { name: '100문제', description: '100개 문제 풀었어요!', icon: '💪' },
    'quiz_500': { name: '500문제', description: '500개 문제 풀었어요!', icon: '🚀' },
    'comeback': { name: '재도전', description: '복습 문제 5개 맞춤!', icon: '💪' },
    'topic_master': { name: '주제 마스터', description: '한 주제에서 10개 모두 맞춤!', icon: '📚' }
  }
};
