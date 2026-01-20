/**
 * 새로운 게임 모드 - 아이들이 정말 재미있어할 게임들
 */

const newGameModes = {
  // 1️⃣ 스토리 모드 - 역사를 연대기 순서대로 배우기
  story: {
    id: "story",
    name: "📖 스토리 모드",
    description: "한국 역사를 처음부터 끝까지 스토리로 배우기",
    icon: "📖",
    color: "#FF6B6B",
    timeLimit: null,
    scoreMultiplier: 1,
    difficulty: "easy",
    questionsPerSession: 5,
    type: "sequential" // 순서대로 진행
  },

  // 2️⃣ 영웅 수집 게임 - 각 시대의 영웅을 수집
  heroes: {
    id: "heroes",
    name: "🏆 영웅 수집",
    description: "역사 속 위대한 영웅들을 수집하세요!",
    icon: "🏆",
    color: "#FFD93D",
    timeLimit: null,
    scoreMultiplier: 1.5,
    difficulty: "medium",
    questionsPerSession: 10,
    type: "collection" // 수집 시스템
  },

  // 3️⃣ 타임 라인 게임 - 사건들을 시간 순서대로 배열
  timeline: {
    id: "timeline",
    name: "⏰ 타임라인 챌린지",
    description: "역사 사건들을 시간 순서대로 맞춰요!",
    icon: "⏰",
    color: "#4ECDC4",
    timeLimit: 45,
    scoreMultiplier: 2,
    difficulty: "hard",
    questionsPerSession: 8,
    type: "timeline" // 타임라인 배열
  },

  // 4️⃣ 캐릭터 더블업 - 연속 맞추면 점수 배수 증가
  doubleup: {
    id: "doubleup",
    name: "💥 더블 업",
    description: "연속 정답마다 점수가 2배씩 증가!",
    icon: "💥",
    color: "#F44336",
    timeLimit: 30,
    scoreMultiplier: 1,
    difficulty: "medium",
    questionsPerSession: -1, // 무한
    type: "doubleup" // 연속 정답 시 배수 증가
  },

  // 5️⃣ 봇 배틀 - AI와 경쟁
  botbattle: {
    id: "botbattle",
    name: "🤖 봇 배틀",
    description: "AI 봇과 경쟁해서 이기세요!",
    icon: "🤖",
    color: "#9C27B0",
    timeLimit: 35,
    scoreMultiplier: 2.5,
    difficulty: "hard",
    questionsPerSession: 5,
    type: "competition" // AI와 대전
  },

  // 6️⃣ 왕조 빌더 - 자신의 왕조 만들기
  dynasty: {
    id: "dynasty",
    name: "👑 왕조 빌더",
    description: "당신의 왕조를 만들어보세요!",
    icon: "👑",
    color: "#FFB74D",
    timeLimit: null,
    scoreMultiplier: 1.5,
    difficulty: "easy",
    questionsPerSession: 7,
    type: "builder" // 선택형 시뮬레이션
  },

  // 7️⃣ 미션 챌린지 - 특정 미션 완료하기
  mission: {
    id: "mission",
    name: "⚡ 미션 챌린지",
    description: "'이순신을 도와 전쟁 이기기' 같은 미션!",
    icon: "⚡",
    color: "#00BCD4",
    timeLimit: 60,
    scoreMultiplier: 3,
    difficulty: "hard",
    questionsPerSession: 10,
    type: "mission" // 목표 기반
  },

  // 8️⃣ 카테고리 체인 - 특정 카테고리에서 연속 정답
  category: {
    id: "category",
    name: "🔗 카테고리 체인",
    description: "같은 시대 문제를 5개 이상 맞추면 보너스!",
    icon: "🔗",
    color: "#76FF03",
    timeLimit: 40,
    scoreMultiplier: 2,
    difficulty: "medium",
    questionsPerSession: 8,
    type: "category" // 카테고리 기반
  }
};

module.exports = { newGameModes };
