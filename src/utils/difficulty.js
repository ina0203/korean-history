/**
 * 사용자의 정확도에 따라 다음 레벨을 계산합니다.
 * 70% 이상 정답하면 다음 레벨로 상향
 */
function calculateNextLevel(totalCorrect, totalAttempted) {
  if (totalAttempted === 0) return 1;
  
  const accuracy = (totalCorrect / totalAttempted) * 100;
  
  // 정확도에 따른 레벨 계산
  if (accuracy >= 90) return Math.min(10, Math.floor(totalAttempted / 10) + 7);
  if (accuracy >= 80) return Math.min(10, Math.floor(totalAttempted / 10) + 5);
  if (accuracy >= 70) return Math.min(10, Math.floor(totalAttempted / 10) + 3);
  if (accuracy >= 60) return Math.min(10, Math.floor(totalAttempted / 10) + 2);
  
  return Math.max(1, Math.floor(totalAttempted / 15) + 1);
}

/**
 * 난이도 점수를 기반으로 문제를 선택합니다.
 */
function selectQuestionsByDifficulty(questions, userLevel) {
  return questions.filter(q => {
    const levelDiff = Math.abs(q.level - userLevel);
    return levelDiff <= 2; // 현재 레벨 ±2 범위의 문제만 출제
  });
}

/**
 * 복습 우선순위를 계산합니다.
 */
function calculateReviewPriority(attempts, daysSinceCreated) {
  // 시도 횟수가 많을수록, 최근일수록 우선순위 높음
  return (attempts * 10) + (30 - Math.min(daysSinceCreated, 30));
}

module.exports = {
  calculateNextLevel,
  selectQuestionsByDifficulty,
  calculateReviewPriority
};
