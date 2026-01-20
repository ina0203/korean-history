// ===== 학습 효과 증대 시스템 =====
// 1. 반복 학습의 과학적 기반 (망각 곡선)
// 2. 연속 정답 스트릭 시스템
// 3. 난이도 점진적 상향
// 4. 개인화된 복습 알고리즘

class AdvancedLearningSystem {
    constructor() {
        this.learningData = {};
        this.repeatingCycle = {
            1: '학습 직후 (1회차)',
            2: '1일 후 (2회차)',
            3: '3일 후 (3회차)',
            4: '7일 후 (4회차)',
            5: '14일 후 (5회차)'
        };
    }

    // 망각 곡선을 고려한 복습 스케줄
    getReviewSchedule(eraIndex, stepIndex) {
        const key = `${eraIndex}-${stepIndex}`;
        if (!this.learningData[key]) {
            this.learningData[key] = {
                attempts: 0,
                correct: 0,
                accuracy: 0,
                lastReview: new Date(),
                nextReview: new Date()
            };
        }
        
        const data = this.learningData[key];
        const daysSinceReview = (new Date() - data.lastReview) / (1000 * 60 * 60 * 24);
        
        // 정확도에 따라 다음 복습 시간 결정
        if (data.accuracy >= 90) {
            data.nextReview = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000); // 14일
        } else if (data.accuracy >= 70) {
            data.nextReview = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7일
        } else if (data.accuracy >= 50) {
            data.nextReview = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3일
        } else {
            data.nextReview = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1일
        }
        
        return {
            isReviewNeeded: daysSinceReview >= 1,
            nextReviewDate: data.nextReview,
            accuracy: data.accuracy
        };
    }

    // 연속 정답에 따른 점수 배증 시스템
    calculateStreakBonus(consecutiveCorrect) {
        const bonusMultiplier = {
            3: 1.25,  // 3개 연속 정답: 25% 보너스
            5: 1.5,   // 5개 연속 정답: 50% 보너스
            10: 2.0   // 10개 연속 정답: 100% 보너스
        };
        
        for (const [threshold, multiplier] of Object.entries(bonusMultiplier)) {
            if (consecutiveCorrect === parseInt(threshold)) {
                return {
                    bonus: Math.floor(100 * (multiplier - 1)),
                    message: `🔥 ${threshold}개 연속 정답! +${Math.floor(100 * (multiplier - 1))} 보너스!`
                };
            }
        }
        return { bonus: 0, message: '' };
    }

    // 난이도 적응형 조정
    adjustDifficulty(accuracy, currentDifficulty) {
        if (accuracy >= 90 && currentDifficulty < 5) {
            return currentDifficulty + 1; // 난이도 상향
        } else if (accuracy < 50 && currentDifficulty > 1) {
            return currentDifficulty - 1; // 난이도 하향
        }
        return currentDifficulty;
    }

    // 학년별 맞춤형 학습 경로
    getPersonalizedPath(gradeLevel, currentAccuracy) {
        const paths = {
            1: { // 초등 3학년
                focus: ['기본 개념', '주요 인물', '간단한 연대'],
                speed: 'slow',
                contentLength: 'short'
            },
            2: { // 초등 4학년
                focus: ['개념 확장', '역사적 배경', '인과관계'],
                speed: 'normal',
                contentLength: 'medium'
            },
            3: { // 초등 5학년
                focus: ['역사 분석', '비교학습', '문명 발전'],
                speed: 'normal',
                contentLength: 'medium'
            },
            4: { // 초등 6학년
                focus: ['심화 개념', '사회 변화', '역사적 영향'],
                speed: 'fast',
                contentLength: 'long'
            },
            5: { // 중학교
                focus: ['역사 해석', '사료 분석', '인물 평가'],
                speed: 'fast',
                contentLength: 'long'
            },
            6: { // 고등학교
                focus: ['역사 논술', '수능 기출 분석', '심화 연구'],
                speed: 'very-fast',
                contentLength: 'very-long'
            }
        };
        
        return paths[gradeLevel] || paths[1];
    }

    // 학습 진도 분석 및 리포트
    generateProgressReport(playerStats) {
        const report = {
            totalScore: playerStats.totalPoints,
            accuracy: playerStats.totalCorrect / Math.max(playerStats.totalAttempted, 1) * 100,
            currentLevel: Math.floor(playerStats.currentEra / 7 * 10),
            strengths: [],
            weaknesses: [],
            recommendation: ''
        };

        // 강점 파악
        if (report.accuracy >= 90) {
            report.strengths.push('매우 높은 정확도');
        }
        if (playerStats.consecutiveCorrect >= 10) {
            report.strengths.push('뛰어난 집중력');
        }

        // 약점 파악
        if (report.accuracy < 60) {
            report.weaknesses.push('기본 개념 복습 필요');
        }

        // 학습 권고사항
        if (report.accuracy >= 90) {
            report.recommendation = '다음 난이도로 진행할 준비가 되었습니다! 새로운 시대를 탐험해 보세요!';
        } else if (report.accuracy >= 70) {
            report.recommendation = '개념 이해가 잘 되고 있습니다. 계속 진행해도 좋지만, 틀린 문제를 한 번 더 복습해 보세요.';
        } else {
            report.recommendation = '기본 개념을 다시 한 번 정리한 후 진행하는 것을 권합니다.';
        }

        return report;
    }

    // 부모님 대시보드용 상세 리포트
    getParentReport(playerStats) {
        const accuracy = playerStats.totalCorrect / Math.max(playerStats.totalAttempted, 1) * 100;
        
        return {
            studentName: playerStats.playerName,
            currentGrade: playerStats.gradeLevel,
            totalPoints: playerStats.totalPoints,
            accuracy: accuracy.toFixed(1) + '%',
            completedEras: playerStats.currentEra,
            totalEras: 7,
            progressPercentage: (playerStats.currentEra / 7 * 100).toFixed(1) + '%',
            studyStrength: this.identifyStrength(accuracy),
            suggestedNextStep: this.getSuggestedNextStep(accuracy, playerStats.currentEra),
            weeklyTarget: 3, // 주당 3개 시대 완수 권고
            estimatedCompletion: this.estimateCompletionDate(playerStats.currentEra)
        };
    }

    identifyStrength(accuracy) {
        if (accuracy >= 90) return '우수 - 개념 이해가 탁월합니다';
        if (accuracy >= 80) return '좋음 - 대부분의 개념을 이해했습니다';
        if (accuracy >= 70) return '보통 - 추가 복습이 도움될 것 같습니다';
        return '개선 필요 - 기본 개념부터 다시 시작하는 것을 권합니다';
    }

    getSuggestedNextStep(accuracy, currentEra) {
        if (accuracy >= 85 && currentEra < 6) {
            return `다음 시대(${['선사', '고조선', '삼국', '통일신라', '고려', '조선', '근현대'][currentEra + 1]})로 진행하세요!`;
        }
        return `현재 시대를 한 번 더 복습한 후 진행하세요.`;
    }

    estimateCompletionDate(currentEra) {
        const remainingEras = 7 - currentEra;
        const daysPerEra = 5; // 시대별 5단계 × 1일
        const estimatedDays = remainingEras * daysPerEra;
        const completionDate = new Date(Date.now() + estimatedDays * 24 * 60 * 60 * 1000);
        return completionDate.toLocaleDateString('ko-KR');
    }
}

// 전역 학습 시스템 인스턴스
const learningSystem = new AdvancedLearningSystem();

// ===== 학습 효과 최적화 함수들 =====

// 1. 스토리텔링을 통한 기억력 향상
function enhanceMemoryWithStories(content, era, step) {
    const mnemonic = {
        0: '🦴 선사 = 돌 도구, 강가 생활 → "돌로 사냥하는 새벽의 인류"',
        1: '👑 고조선 = 단군, 8법령, 비파형동검 → "법으로 다스린 첫 나라"',
        2: '⚔️ 삼국 = 고구려·백제·신라 경쟁 → "영토를 놓고 벌인 치열한 경쟁"',
        3: '🏛️ 통일신라 = 신라통일, 불국사, 석굴암 → "문화로 피어난 통일 시대"',
        4: '🎨 고려 = 왕건, 팔만대장경, 고려청자 → "천년을 이어간 문화 국가"',
        5: '🏯 조선 = 세종, 한글 창제 → "과학과 문화의 시대"',
        6: '🌍 근현대 = 3·1 운동, 독립 → "자유를 향한 투쟁"'
    };
    
    return mnemonic[era] || '';
}

// 2. 시각화를 통한 이해력 향상
function createVisualization(era) {
    const visuals = {
        0: '🦴 → 🏺 → 👨‍🌾 (돌 도구 → 토기 → 농사)',
        1: '⚔️ → 📜 → ⚖️ (무기 → 지역 → 법도)',
        2: '🏹 ⛵ 🏇 (고구려 고구려 백제 신라)',
        3: '🏛️ → 📖 → ✨ (통일 → 문화 → 번영)',
        4: '👑 → 📿 → 🏺 (왕건 → 종교 → 청자)',
        5: '🔤 → 🔭 → ⚖️ (한글 → 과학 → 질서)',
        6: '✊ → 🇰🇷 → 🌟 (독립운동 → 광복 → 현대)'
    };
    
    return visuals[era] || '';
}

// 3. 간격 반복(Spaced Repetition) 알고리즘
const spacedRepetitionSchedule = [
    { day: 0, name: '1회차: 학습 직후' },
    { day: 1, name: '2회차: 1일 후' },
    { day: 3, name: '3회차: 3일 후' },
    { day: 7, name: '4회차: 1주 후' },
    { day: 14, name: '5회차: 2주 후' }
];

// 4. 학년별 커리큘럼 진도 속도
const curriculumPace = {
    1: { unitsPerWeek: 1, daysPerUnit: 7 },    // 초등 3학년: 주1개 시대
    2: { unitsPerWeek: 1.5, daysPerUnit: 5 },  // 초등 4학년: 주1.5개
    3: { unitsPerWeek: 2, daysPerUnit: 4 },    // 초등 5학년: 주2개
    4: { unitsPerWeek: 2.5, daysPerUnit: 3 },  // 초등 6학년: 주2.5개
    5: { unitsPerWeek: 3, daysPerUnit: 2 },    // 중학: 주3개
    6: { unitsPerWeek: 3.5, daysPerUnit: 2 }   // 고등: 주3.5개
};
