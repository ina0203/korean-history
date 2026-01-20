// ===== 게임 상태 관리 =====
const gameState = {
    playerName: '',
    gradeLevel: 1,
    userId: '',
    totalPoints: 0,
    currentEra: 0,
    currentStep: 0,
    museumItems: [],
    consecutiveCorrect: 0,
    totalCorrect: 0,
    totalAttempted: 0,
    aiDialogue: '',
    
    eras: [
        { icon: '🦴', name: '선사 시대', period: '기원전 30,000년경', color: '#8B6F47' },
        { icon: '👑', name: '고조선', period: '기원전 2333년~108년', color: '#D4A574' },
        { icon: '⚔️', name: '삼국 시대', period: '기원전 37년~668년', color: '#B84A4A' },
        { icon: '🏛️', name: '통일신라', period: '668년~935년', color: '#F4D03F' },
        { icon: '🎨', name: '고려', period: '918년~1392년', color: '#7B68EE' },
        { icon: '🏯', name: '조선', period: '1392년~1910년', color: '#DC143C' },
        { icon: '🌍', name: '근현대', period: '1910년~현재', color: '#4169E1' }
    ]
};

// ===== 페이지 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', startGame);
    }
});

// ===== 게임 시작 =====
function startGame(e) {
    e.preventDefault();
    
    const name = document.getElementById('playerName').value.trim();
    const grade = document.getElementById('gradeLevel').value;
    
    if (!name || !grade) {
        alert('정보를 입력해주세요!');
        return;
    }
    
    gameState.playerName = name;
    gameState.gradeLevel = parseInt(grade);
    gameState.userId = 'player_' + Date.now();
    
    showScreen('dashboard');
}

// ===== 화면 전환 =====
function showScreen(screenName) {
    document.querySelectorAll('[data-screen]').forEach(el => {
        el.classList.remove('active');
    });
    
    const screen = document.querySelector(`[data-screen="${screenName}"]`);
    if (screen) {
        screen.classList.add('active');
        
        if (screenName === 'dashboard') {
            initDashboard();
        } else if (screenName === 'lesson') {
            initLesson();
        }
    }
}

// ===== [1] 메인 대시보드 =====
function initDashboard() {
    document.getElementById('dashPlayerName').textContent = gameState.playerName;
    document.getElementById('dashPlayerLevel').textContent = gameState.gradeLevel + '학년';
    document.getElementById('dashPoints').textContent = gameState.totalPoints;
    
    const timeline = document.getElementById('timelineMap');
    timeline.innerHTML = gameState.eras.map((era, idx) => {
        const isUnlocked = idx <= gameState.currentEra;
        const isActive = idx === gameState.currentEra;
        const progress = (isActive ? gameState.currentStep : (isUnlocked ? 5 : 0));
        
        return `
            <div class="era-node ${isActive ? 'active' : ''} ${isUnlocked ? 'unlocked' : 'locked'}" 
                 onclick="selectEra(${idx})">
                <div class="era-cloud ${isUnlocked ? 'clear' : 'covered'}">
                    ${isUnlocked ? era.icon : '☁️'}
                </div>
                <div class="era-info">
                    <h4>${era.name}</h4>
                    <p>${era.period}</p>
                </div>
                <div class="step-bar">
                    ${[0,1,2,3,4].map(i => `
                        <span class="step-dot ${i < progress ? 'done' : ''}"></span>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function selectEra(eraIdx) {
    if (eraIdx > gameState.currentEra + 1) {
        alert('앞의 시대를 먼저 학습해주세요!');
        return;
    }
    
    gameState.currentEra = eraIdx;
    gameState.currentStep = 0;
    showScreen('lesson');
}

// ===== [2] 5단계 학습 시스템 =====
const lessonData = {
    0: {
        name: '선사 시대',
        steps: [
            {
                type: 'story',
                title: '🦴 선사 시대 이야기',
                content: `<div style="padding: 20px; background: #f9f9f9; border-radius: 10px;">
                    <h3>우리 역사의 새벽</h3>
                    <p>약 30,000년 전, 한반도에 사람들이 살기 시작했어요.</p>
                    <p>이 사람들은 돌 도구를 만들어 사냥을 했고, 강가에 모여 살았어요.</p>
                    <div style="background: #fffacd; padding: 15px; border-radius: 8px; margin-top: 15px;">
                        📌 <strong>선사 시대는 문자가 없던 시대예요!</strong>
                    </div>
                </div>`
            },
            {
                type: 'artifact',
                title: '🏺 유물로 만나는 선사 시대',
                content: `<div style="padding: 20px;">
                    <h3>선사 시대 사람들이 남긴 증거</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                        <div style="background: #f0f0f0; padding: 15px; border-radius: 10px; cursor: pointer;" onclick="collectArtifact('빗살무늬토기')">
                            <div style="font-size: 2.5em; text-align: center;">🏺</div>
                            <h4>빗살무늬 토기</h4>
                            <p style="font-size: 0.9em; color: #666;">신석기 시대 사람들이 만든 그릇</p>
                            <button class="btn btn-primary" style="width: 100%; margin-top: 10px;">수집하기</button>
                        </div>
                        <div style="background: #f0f0f0; padding: 15px; border-radius: 10px; cursor: pointer;" onclick="collectArtifact('돌화살촉')">
                            <div style="font-size: 2.5em; text-align: center;">🗡️</div>
                            <h4>돌 화살촉</h4>
                            <p style="font-size: 0.9em; color: #666;">사냥할 때 사용했던 도구</p>
                            <button class="btn btn-primary" style="width: 100%; margin-top: 10px;">수집하기</button>
                        </div>
                    </div>
                </div>`
            },
            {
                type: 'causal',
                title: '🤔 왜 그럴까?',
                content: `<div style="padding: 20px;">
                    <h3>선사 시대 사람들의 생활</h3>
                    <div style="margin-top: 20px;">
                        <div style="background: #e8f4f8; padding: 15px; border-radius: 10px; margin-bottom: 15px;">
                            <div style="font-weight: 600; margin-bottom: 8px;">❓ 왜 강가에 살았을까?</div>
                            <div style="color: #333;">✨ 물이 필요하고, 물고기를 잡을 수 있었기 때문</div>
                        </div>
                        <div style="background: #e8f4f8; padding: 15px; border-radius: 10px;">
                            <div style="font-weight: 600; margin-bottom: 8px;">❓ 왜 돌로 도구를 만들었을까?</div>
                            <div style="color: #333;">✨ 금속 도구를 모르던 시대, 돌이 가장 단단한 재료였기 때문</div>
                        </div>
                    </div>
                </div>`
            },
            {
                type: 'advanced',
                title: '📚 신석기 vs 구석기',
                content: `<div style="padding: 20px;">
                    <h3>선사 시대의 변화</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                        <tr style="background: #667eea; color: white;">
                            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">구석기</th>
                            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">신석기</th>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #ddd;">뾰족한 돌 도구</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">간단한 돌 도구</td>
                        </tr>
                        <tr style="background: #f5f5f5;">
                            <td style="padding: 12px; border: 1px solid #ddd;">사냥 중심 생활</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">농사 시작</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #ddd;">동굴에 거주</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">움집에서 생활</td>
                        </tr>
                    </table>
                </div>`
            },
            {
                type: 'exam',
                title: '🎯 수능 스타일 문제',
                content: `<div style="padding: 20px; background: #fff9e6; border-radius: 10px;">
                    <h3>선사 시대 마스터 문제</h3>
                </div>`
            }
        ]
    },
    1: {
        name: '고조선',
        steps: [
            {
                type: 'story',
                title: '👑 고조선 이야기',
                content: `<div style="padding: 20px; background: #f9f9f9; border-radius: 10px;">
                    <h3>우리나라 첫 번째 나라!</h3>
                    <p>곰과 호랑이의 이야기를 아세요?</p>
                    <p style="margin-top: 10px;">🐻 곰이 쑥과 마늘을 먹고 변신해서 여자가 되었어요.</p>
                    <p style="margin-top: 10px;">👨 그 여자와 하늘에서 내려온 단군이 만나 아이를 낳았어요.</p>
                    <p style="margin-top: 10px;">그것이 바로 <strong>고조선의 건국자 단군왕검</strong>이에요!</p>
                    <div style="background: #fffacd; padding: 15px; border-radius: 8px; margin-top: 15px;">
                        📌 <strong>고조선은 기원전 2333년에 세워졌어요!</strong>
                    </div>
                </div>`
            },
            {
                type: 'artifact',
                title: '🏺 고조선의 유물',
                content: `<div style="padding: 20px;">
                    <h3>고조선 시대의 보물들</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                        <div style="background: #f0f0f0; padding: 15px; border-radius: 10px; cursor: pointer;" onclick="collectArtifact('비파형동검')">
                            <div style="font-size: 2.5em; text-align: center;">🗡️</div>
                            <h4>비파형 동검</h4>
                            <p style="font-size: 0.9em; color: #666;">고조선 사람들의 무기</p>
                            <button class="btn btn-primary" style="width: 100%; margin-top: 10px;">수집하기</button>
                        </div>
                        <div style="background: #f0f0f0; padding: 15px; border-radius: 10px; cursor: pointer;" onclick="collectArtifact('청동거울')">
                            <div style="font-size: 2.5em; text-align: center;">🪞</div>
                            <h4>청동 거울</h4>
                            <p style="font-size: 0.9em; color: #666;">귀한 사람들이 사용</p>
                            <button class="btn btn-primary" style="width: 100%; margin-top: 10px;">수집하기</button>
                        </div>
                    </div>
                </div>`
            },
            {
                type: 'causal',
                title: '🤔 고조선 8개 법령',
                content: `<div style="padding: 20px;">
                    <h3>고조선 사람들의 규칙</h3>
                    <p style="margin-bottom: 15px;">단군왕검이 만든 8개의 중요한 법령:</p>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <div style="background: #e8f4f8; padding: 12px; border-radius: 8px;">1️⃣ 사람을 죽인 사람은 죽음으로 벌한다</div>
                        <div style="background: #e8f4f8; padding: 12px; border-radius: 8px;">2️⃣ 사람을 상처낸 사람은 곡식으로 배상한다</div>
                        <div style="background: #e8f4f8; padding: 12px; border-radius: 8px;">3️⃣ 사람을 훔친 사람은 노예가 된다</div>
                    </div>
                    <div style="background: #fffacd; padding: 15px; border-radius: 8px; margin-top: 15px;">
                        ➡️ 이 법령들은 고조선이 <strong>조직적인 나라</strong>라는 증거예요!
                    </div>
                </div>`
            },
            {
                type: 'advanced',
                title: '📚 고조선의 멸망',
                content: `<div style="padding: 20px;">
                    <h3>고조선이 없어진 이유</h3>
                    <div style="display: flex; justify-content: space-around; align-items: center; margin-top: 20px; flex-wrap: wrap;">
                        <div style="text-align: center; padding: 15px;">
                            <div style="font-weight: 600;">기원전 2333년</div>
                            <div style="color: #666; font-size: 0.9em;">고조선 건국</div>
                        </div>
                        <div style="font-size: 1.5em;">→</div>
                        <div style="text-align: center; padding: 15px;">
                            <div style="font-weight: 600;">기원전 700년경</div>
                            <div style="color: #666; font-size: 0.9em;">철기 문화 유입</div>
                        </div>
                        <div style="font-size: 1.5em;">→</div>
                        <div style="text-align: center; padding: 15px;">
                            <div style="font-weight: 600;">기원전 108년</div>
                            <div style="color: #666; font-size: 0.9em;">고조선 멸망</div>
                        </div>
                    </div>
                </div>`
            },
            {
                type: 'exam',
                title: '🎯 고조선 최종 테스트',
                content: `<div style="padding: 20px; background: #fff9e6; border-radius: 10px;">
                    <h3>고조선 마스터 문제</h3>
                </div>`
            }
        ]
    }
};

const quizzes = {
    0: [ // 선사 시대
        { q: '선사 시대는 언제쯤일까요?', opts: ['약 30,000년 전', '약 2,000년 전', '약 100년 전'], a: '약 30,000년 전' },
        { q: '빗살무늬 토기의 용도는?', opts: ['음식을 담기 위해', '장식용으로', '무기로'], a: '음식을 담기 위해' },
        { q: '선사 시대 사람들이 강가에 산 주된 이유는?', opts: ['전투를 피하기 위해', '물과 먹이를 얻기 위해', '숨을 곳이 필요했기 때문'], a: '물과 먹이를 얻기 위해' },
        { q: '신석기 시대의 가장 큰 변화는?', opts: ['금속 도구 발명', '농사 시작', '도시 건설'], a: '농사 시작' },
        { q: '다음 중 신석기 시대의 특징으로 옳은 것은?', opts: ['청동 도구를 사용했다', '움집에 살며 농사를 시작했다', '한글을 사용했다'], a: '움집에 살며 농사를 시작했다' }
    ],
    1: [ // 고조선
        { q: '고조선을 세운 사람은 누구일까요?', opts: ['곰', '단군왕검', '호랑이'], a: '단군왕검' },
        { q: '비파형 동검의 주요 용도는?', opts: ['음식 먹을 때', '전투할 때 쓰는 무기', '의식 때 쓰는 도구'], a: '전투할 때 쓰는 무기' },
        { q: '고조선의 8개 법령이 말해주는 것은?', opts: ['매우 야만적인 사회', '체계적으로 다스려진 나라', '법이 없는 시대'], a: '체계적으로 다스려진 나라' },
        { q: '고조선이 멸망한 주요 원인은?', opts: ['자연재해', '내부 분열과 중국 한나라의 공격', '흉노의 침입'], a: '내부 분열과 중국 한나라의 공격' },
        { q: '다음 중 고조선에 대한 설명으로 옳은 것은?', opts: ['곰과 호랑이가 세웠다', '단군왕검이 기원전 2333년에 세웠으며 8개의 법령으로 다스렸다', '한글을 처음 만들었다'], a: '단군왕검이 기원전 2333년에 세웠으며 8개의 법령으로 다스렸다' }
    ]
};

function initLesson() {
    // completeHistoryData에서 콘텐츠 로드
    const eraData = completeHistoryData[gameState.currentEra];
    if (!eraData) {
        alert('아직 개발 중인 시대입니다!');
        showScreen('dashboard');
        return;
    }
    
    const lesson = eraData.steps[gameState.currentStep];
    const stepNames = ['📖 스토리', '🏺 유물', '🤔 인과', '📚 심화', '🎯 실전'];
    
    document.getElementById('lessonEra').textContent = gameState.eras[gameState.currentEra].name;
    document.getElementById('lessonStep').textContent = stepNames[gameState.currentStep];
    document.getElementById('lessonTitle').textContent = lesson.title;
    
    // 학년별 난이도 조정
    let content = lesson.content;
    if (gameState.gradeLevel === 1 || gameState.gradeLevel === 2) {
        // 낮은 학년: 복잡한 내용 단순화
        content = content.replace(/<h4/g, '<h4 style="font-size: 1.1em;"');
    }
    
    document.getElementById('lessonContent').innerHTML = content;
    
    const progress = ((gameState.currentStep + 1) / 5 * 100);
    document.getElementById('lessonProgress').style.width = progress + '%';
    
    const nextBtn = document.getElementById('nextStepBtn');
    if (gameState.currentStep < 4) {
        nextBtn.textContent = '다음 단계 →';
        nextBtn.onclick = () => {
            gameState.currentStep++;
            initLesson();
        };
    } else {
        nextBtn.textContent = '완료! ✓';
        nextBtn.onclick = () => {
            completeEra();
        };
    }
    
    setTimeout(() => showQuiz(gameState.currentEra, gameState.currentStep), 500);
}

function showQuiz(eraIdx, stepIdx) {
    const allQuizzes = quizzes[eraIdx];
    if (!allQuizzes || !allQuizzes[stepIdx]) return;
    
    const quiz = allQuizzes[stepIdx];
    const quizContainer = document.getElementById('quizContainer');
    
    quizContainer.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 10px; border: 2px solid #667eea; margin-top: 20px;">
            <h4 style="margin-bottom: 15px; font-size: 1.1em;">❓ ${quiz.q}</h4>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                ${quiz.opts.map((opt, idx) => `
                    <button class="btn btn-secondary" style="text-align: left; padding: 12px;" onclick="submitAnswer('${opt}', '${quiz.a}')">
                        ${String.fromCharCode(65 + idx)}. ${opt}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function submitAnswer(selected, correct) {
    const isCorrect = selected === correct;
    const eraName = gameState.eras[gameState.currentEra].name;
    const historicalFigure = completeHistoryData[gameState.currentEra]?.figure;
    
    if (isCorrect) {
        gameState.totalPoints += 100;
        gameState.consecutiveCorrect++;
        gameState.totalCorrect++;
        
        // 연속 정답 보너스
        if (gameState.consecutiveCorrect % 3 === 0) {
            gameState.totalPoints += 50;
            alert(`✅ 정답입니다!\n+100 포인트\n🔥 연속 ${gameState.consecutiveCorrect}개 정답! +50 보너스!`);
        } else {
            alert(`✅ 정답입니다!\n+100 포인트`);
        }
    } else {
        gameState.consecutiveCorrect = 0;
        const aiMessage = historicalFigure && historicalFigures[historicalFigure] 
            ? getAIResponse(historicalFigure, false, gameState.currentStep)
            : `❌ 틀렸어요!\n정답: ${correct}\n\n다시 읽어보고 도전해보세요!`;
        alert(aiMessage);
    }
    
    gameState.totalAttempted++;
}

function getAIResponse(figureName, isCorrect, stepIndex) {
    const figure = historicalFigures[figureName];
    if (!figure) return 'AI 캐릭터가 없습니다.';
    
    const dialogues = figure.dialogues[isCorrect ? 'correct' : 'incorrect'];
    return `\n[${figure.icon} ${figure.name}]\n\n"${dialogues[Math.floor(Math.random() * dialogues.length)]}"`;
}

function collectArtifact(artifact) {
    if (!gameState.museumItems.includes(artifact)) {
        gameState.museumItems.push(artifact);
        gameState.totalPoints += 50;
        alert(`🎉 ${artifact}을(를) 수집했어요!\n+50 포인트!`);
    } else {
        alert('이미 수집한 유물이에요!');
    }
}

function completeEra() {
    const era = gameState.eras[gameState.currentEra].name;
    
    // 시대 완료 시 보상
    gameState.totalPoints += 500;
    
    // 학습 분석
    const accuracy = gameState.totalCorrect / gameState.totalAttempted * 100;
    
    // 다음 시대 해금 여부 판단
    let nextMessage = '';
    if (accuracy >= 85) {
        nextMessage = '🌟 우수한 성적! 다음 시대로 진행하세요!';
        gameState.totalPoints += 200; // 추가 보너스
    } else if (accuracy >= 70) {
        nextMessage = '👍 좋은 성적! 계속 진행할 수 있습니다.';
        gameState.totalPoints += 100;
    } else {
        nextMessage = '💪 다시 한 번 복습한 후 진행하시기 바랍니다.';
    }
    
    gameState.currentEra++;
    gameState.currentStep = 0;
    gameState.consecutiveCorrect = 0;
    
    alert(`🎊 축하합니다!\n${era} 학습을 완료했어요!\n\n📊 정확도: ${accuracy.toFixed(1)}%\n${nextMessage}\n+500 포인트 획득!`);
    showScreen('dashboard');
}

// 난이도 적응형 시스템 통합
function adaptLearningDifficulty() {
    const accuracy = gameState.totalCorrect / gameState.totalAttempted * 100;
    const adjustment = learningSystem.adjustDifficulty(accuracy, gameState.currentStep);
    
    if (adjustment > gameState.currentStep) {
        console.log('난이도 상향: 더 어려운 문제 제시');
    } else if (adjustment < gameState.currentStep) {
        console.log('난이도 하향: 더 쉬운 문제 제시');
    }
}

function goToDashboard() {
    showScreen('dashboard');
}

function logout() {
    gameState.playerName = '';
    gameState.totalPoints = 0;
    gameState.currentEra = 0;
    gameState.currentStep = 0;
    gameState.museumItems = [];
    showScreen('login');
    document.getElementById('playerName').value = '';
    document.getElementById('gradeLevel').value = '';
}
