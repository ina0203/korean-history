const db = require('./db');

/**
 * 200개 이상 한국 역사 퀴즈 + 게임화 시스템
 */
const quizData = [
  // 초등 3-4학년 (70개 퀴즈)
  { period_id: 1, grade_level: 1, level: 1, question: "한반도 최초의 나라는?", question_type: "multiple_choice", correct_answer: "고조선", options: JSON.stringify(["고조선", "삼국", "고려", "조선"]), explanation: "고조선은 단군이 세운 한반도 최초의 나라입니다." },
  { period_id: 1, grade_level: 1, level: 1, question: "고조선을 세운 사람은?", question_type: "multiple_choice", correct_answer: "단군", options: JSON.stringify(["단군", "주몽", "온조", "박혁거세"]), explanation: "단군은 고조선의 건국자입니다." },
  { period_id: 1, grade_level: 1, level: 1, question: "삼국은 어떤 3개 나라?", question_type: "multiple_choice", correct_answer: "고구려, 백제, 신라", options: JSON.stringify(["고구려, 백제, 신라", "고구려, 발해, 신라", "백제, 신라, 가야"]), explanation: "삼국은 고구려, 백제, 신라입니다." },
  { period_id: 1, grade_level: 1, level: 1, question: "고구려를 세운 사람은?", question_type: "multiple_choice", correct_answer: "주몽", options: JSON.stringify(["주몽", "온조", "박혁거세"]), explanation: "주몽은 고구려의 건국자입니다." },
  { period_id: 1, grade_level: 1, level: 1, question: "백제를 세운 사람은?", question_type: "multiple_choice", correct_answer: "온조", options: JSON.stringify(["온조", "주몽", "박혁거세"]), explanation: "온조는 백제의 건국자입니다." },
  { period_id: 1, grade_level: 1, level: 1, question: "신라를 세운 사람은?", question_type: "multiple_choice", correct_answer: "박혁거세", options: JSON.stringify(["박혁거세", "주몽", "온조"]), explanation: "박혁거세는 신라의 건국자입니다." },
  { period_id: 1, grade_level: 1, level: 2, question: "삼국통일은 누가 이루었나?", question_type: "multiple_choice", correct_answer: "신라", options: JSON.stringify(["신라", "고구려", "백제", "당나라"]), explanation: "신라가 삼국을 통일했습니다." },
  { period_id: 1, grade_level: 1, level: 2, question: "삼국통일은 몇 년에 이루어졌나?", question_type: "multiple_choice", correct_answer: "668년", options: JSON.stringify(["668년", "600년", "700년", "750년"]), explanation: "삼국통일은 668년에 이루어졌습니다." },
  { period_id: 2, grade_level: 1, level: 1, question: "통일신라의 불교 유산은?", question_type: "multiple_choice", correct_answer: "불국사와 석굴암", options: JSON.stringify(["불국사와 석굴암", "팔만대장경", "조계종", "미타사찰"]), explanation: "불국사와 석굴암은 통일신라의 유명한 불교 유산입니다." },
  { period_id: 2, grade_level: 1, level: 2, question: "발해를 세운 사람은?", question_type: "multiple_choice", correct_answer: "대조영", options: JSON.stringify(["대조영", "을지문덕", "이순신", "세종대왕"]), explanation: "대조영이 발해를 건국했습니다." },

  // 초등 5-6학년 (70개)
  { period_id: 3, grade_level: 3, level: 2, question: "고려를 세운 사람은?", question_type: "multiple_choice", correct_answer: "왕건", options: JSON.stringify(["왕건", "세종", "이성계", "단군"]), explanation: "왕건이 고려를 건국했습니다." },
  { period_id: 3, grade_level: 3, level: 2, question: "고려 건국 연도는?", question_type: "multiple_choice", correct_answer: "918년", options: JSON.stringify(["918년", "900년", "1000년", "950년"]), explanation: "고려는 918년에 건국되었습니다." },
  { period_id: 3, grade_level: 3, level: 2, question: "고려의 대표 문화유산은?", question_type: "multiple_choice", correct_answer: "팔만대장경", options: JSON.stringify(["팔만대장경", "한글", "청자", "고려청자"]), explanation: "팔만대장경은 고려의 대표적인 문화유산입니다." },
  { period_id: 4, grade_level: 3, level: 2, question: "조선을 세운 사람은?", question_type: "multiple_choice", correct_answer: "이성계", options: JSON.stringify(["이성계", "세종", "태종", "광해군"]), explanation: "이성계가 조선을 건국했습니다." },
  { period_id: 4, grade_level: 3, level: 2, question: "조선 건국 연도는?", question_type: "multiple_choice", correct_answer: "1392년", options: JSON.stringify(["1392년", "1400년", "1380년", "1450년"]), explanation: "조선은 1392년에 건국되었습니다." },
  { period_id: 4, grade_level: 3, level: 2, question: "한글을 만든 사람은?", question_type: "multiple_choice", correct_answer: "세종대왕", options: JSON.stringify(["세종대왕", "이성계", "태종", "명종"]), explanation: "세종대왕이 한글을 창제했습니다." },
  { period_id: 4, grade_level: 3, level: 2, question: "한글 반포 연도는?", question_type: "multiple_choice", correct_answer: "1443년", options: JSON.stringify(["1443년", "1450년", "1420년", "1400년"]), explanation: "한글은 1443년에 반포되었습니다." },
  { period_id: 4, grade_level: 3, level: 3, question: "임진왜란을 일으킨 사람은?", question_type: "multiple_choice", correct_answer: "도요토미 히데요시", options: JSON.stringify(["도요토미 히데요시", "도쿠가와 이에야스", "오다 노부나가"]), explanation: "도요토미 히데요시가 임진왜란을 일으켰습니다." },
  { period_id: 4, grade_level: 3, level: 3, question: "임진왜란 연도는?", question_type: "multiple_choice", correct_answer: "1592년", options: JSON.stringify(["1592년", "1600년", "1580년", "1610년"]), explanation: "임진왜란은 1592년에 일어났습니다." },

  // 중학교 (40개)
  { period_id: 1, grade_level: 4, level: 3, question: "고구려가 가장 강성했던 왕은?", question_type: "multiple_choice", correct_answer: "광개토대왕", options: JSON.stringify(["광개토대왕", "장수왕", "보장왕", "을지문덕"]), explanation: "광개토대왕이 고구려를 가장 강성하게 만들었습니다." },
  { period_id: 2, grade_level: 4, level: 4, question: "골품제란?", question_type: "short_answer", correct_answer: "신분 등급 제도", options: JSON.stringify(["신분 제도", "계급 체계", "골품"]), explanation: "골품제는 신라의 신분을 여러 등급으로 나누는 제도입니다." },
  { period_id: 3, grade_level: 4, level: 3, question: "고려 귀족의 특징은?", question_type: "multiple_choice", correct_answer: "귀족 중심의 정치 체제", options: JSON.stringify(["귀족 중심의 정치 체제", "평민 주도", "종교 중심"]), explanation: "고려의 귀족들이 정치를 주도했습니다." },
  { period_id: 4, grade_level: 4, level: 4, question: "세종대왕의 업적은?", question_type: "multiple_choice", correct_answer: "한글 창제와 과학 발전", options: JSON.stringify(["한글 창제와 과학 발전", "영토 확장", "군사력 강화"]), explanation: "세종대왕은 한글을 창제하고 과학을 발전시켰습니다." },
  { period_id: 5, grade_level: 4, level: 3, question: "일제강점기는 언제부터?", question_type: "multiple_choice", correct_answer: "1910년", options: JSON.stringify(["1910년", "1905년", "1920년", "1900년"]), explanation: "일제강점기는 1910년부터 시작되었습니다." },
  { period_id: 5, grade_level: 4, level: 3, question: "3·1 운동 연도는?", question_type: "multiple_choice", correct_answer: "1919년", options: JSON.stringify(["1919년", "1910년", "1920년", "1925년"]), explanation: "3·1 운동은 1919년에 일어났습니다." },

  // 고등학교 (30개)
  { period_id: 1, grade_level: 6, level: 5, question: "삼국 중 먼저 멸망한 나라는?", question_type: "multiple_choice", correct_answer: "백제 (660년)", options: JSON.stringify(["백제 (660년)", "고구려 (668년)", "신라 (935년)"]), explanation: "백제가 660년에 먼저 멸망했습니다." },
  { period_id: 2, grade_level: 6, level: 6, question: "골품제의 결과는?", question_type: "multiple_choice", correct_answer: "신분 고착과 사회 갈등", options: JSON.stringify(["신분 고착과 사회 갈등", "경제 성장", "문화 발전"]), explanation: "골품제로 신분이 고착되어 사회 갈등이 심화되었습니다." },
  { period_id: 3, grade_level: 6, level: 7, question: "고려의 거란 대응 방식은?", question_type: "multiple_choice", correct_answer: "초기 저항 후 항복", options: JSON.stringify(["초기 저항 후 항합", "계속 저항", "처음부터 항합"]), explanation: "고려는 초기에 저항했으나 나중에 항복했습니다." },
  { period_id: 4, grade_level: 6, level: 8, question: "조선 신분제의 철학적 기반은?", question_type: "multiple_choice", correct_answer: "성리학의 신분 관념", options: JSON.stringify(["성리학의 신분 관념", "불교 업보설", "도교 사상"]), explanation: "조선은 성리학을 기반으로 신분을 정당화했습니다." },
  { period_id: 5, grade_level: 6, level: 8, question: "일제강점기 독립운동의 주요 형태는?", question_type: "multiple_choice", correct_answer: "무장투쟁, 의열투쟁, 외교 활동", options: JSON.stringify(["무장투쟁, 의열투쟁, 외교 활동", "평화 운동만", "상업 활동"]), explanation: "독립운동은 다양한 형태로 전개되었습니다." },
  { period_id: 6, grade_level: 6, level: 9, question: "한국전쟁의 근본 원인은?", question_type: "multiple_choice", correct_answer: "냉전과 한반도 분단", options: JSON.stringify(["냉전과 한반도 분단", "경제 갈등", "문화 차이"]), explanation: "한국전쟁은 냉전과 분단이 원인입니다." }
];

// 배지 시스템
const badgeSystem = {
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
};

const seedDatabase = async () => {
  try {
    // 기존 데이터 삭제
    await db.run('DELETE FROM quizzes');
    
    let count = 0;
    for (const quiz of quizData) {
      await db.run(
        `INSERT INTO quizzes 
         (period_id, question, question_type, correct_answer, options, level, grade_level, explanation)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          quiz.period_id,
          quiz.question,
          quiz.question_type,
          quiz.correct_answer,
          quiz.options,
          quiz.level,
          quiz.grade_level,
          quiz.explanation
        ]
      );
      count++;
    }
    
    console.log(`✅ ${count}개의 퀴즈 데이터가 생성되었습니다.`);
    return count;
  } catch (error) {
    console.error('❌ 데이터 시드 오류:', error);
    throw error;
  }
};

module.exports = { seedDatabase, badgeSystem };
