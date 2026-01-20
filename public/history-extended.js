// ===== 추가 시대 콘텐츠 (삼국 ~ 근현대) =====
// completeHistoryData에 추가될 항목들

const additionalHistoryData = {
    2: { // 삼국 시대
        name: '삼국 시대',
        period: '기원전 37년~668년',
        figure: '광개토대왕',
        color: '#B84A4A',
        icon: '⚔️',
        description: '한반도에 고구려, 백제, 신라 세 나라가 영토를 놓고 경쟁하던 시대',
        mainTopics: [
            '고구려: 북방 강국, 광개토대왕의 영토 확장',
            '백제: 해상 무역국, 일본과의 교류',
            '신라: 변방의 작은 나라에서 통일의 주인공으로'
        ],
        keyFigures: ['광개토대왕', '을지문덕', '계백장군', '김유신'],
        artifacts: ['삼국지', '광개토비', '백제금동대향로', '신라금관']
    },
    
    3: { // 통일신라
        name: '통일신라',
        period: '668년~935년',
        figure: '신문왕',
        color: '#F4D03F',
        icon: '🏛️',
        description: '신라가 삼국을 통일하고 한반도를 하나로 만든 시대',
        mainTopics: [
            '삼국통일: 문무왕의 통일 완성',
            '불국사와 석굴암: 문화의 최고 성과',
            '신문왕의 개혁: 귀족 중심에서 왕권 강화로',
            '장보고 해상왕: 해상 무역으로 부국강병'
        ],
        keyFigures: ['문무왕', '신문왕', '장보고', '혜초'],
        artifacts: ['석굴암', '불국사', '팔만대장경', '신라금관금제귀걸이']
    },
    
    4: { // 고려
        name: '고려',
        period: '918년~1392년',
        figure: '왕건',
        color: '#7B68EE',
        icon: '⚕️',
        description: '후삼국을 통일하고 천년을 이어간 나라',
        mainTopics: [
            '왕건의 건국: 후삼국 통일의 꿈',
            '팔만대장경: 거란의 침입에 맞선 문화 저항',
            '고려청자: 세계 최고의 도자기 문화',
            '몽골의 침입: 고려가 겪은 최대의 위기'
        ],
        keyFigures: ['왕건', '서희', '강감찬', '팔만대장경 제작자'],
        artifacts: ['팔만대장경', '고려청자', '귀천도']
    },
    
    5: { // 조선
        name: '조선',
        period: '1392년~1910년',
        figure: '세종대왕',
        color: '#DC143C',
        icon: '🏯',
        description: '한글을 창제하고 과학 문명을 꽃피운 시대',
        mainTopics: [
            '한글 창제: 세종의 위대한 업적 (1443년)',
            '임진왜란: 이순신 장군의 해전 승리',
            '조선의 문화: 한글, 금속활자, 과학 기구',
            '신분제와 신문고: 왕과 백성이 소통하는 나라'
        ],
        keyFigures: ['세종대왕', '이순신', '장영실', '정약용'],
        artifacts: ['훈민정음', '강항지자', '혼천시계', '측우기']
    },
    
    6: { // 근현대 (1910~현재)
        name: '근현대',
        period: '1910년~현재',
        figure: '유관순',
        color: '#4169E1',
        icon: '✊',
        description: '나라를 잃었지만 독립을 찾아낸 시대',
        mainTopics: [
            '일제강점기: 나라를 잃은 아픔 (1910~1945)',
            '3·1 운동: 독립의 불씨를 살리다 (1919)',
            '임시정부: 해외에서 독립을 준비한 지도자들',
            '광복과 현대: 자유로운 대한민국으로'
        ],
        keyFigures: ['안중근', '유관순', '윤봉길', '김구'],
        artifacts: ['3·1 독립선언서', '태극기', '서대문형무소']
    }
};

// 더 정교한 5단계 콘텐츠 템플릿
const enhancedStepTemplates = {
    // 삼국시대의 상세 콘텐츠
    '삼국': {
        story: `<div style="line-height: 1.8;">
            <h3>🌏 한반도의 세 나라가 경쟁하다</h3>
            <p>기원전 37년부터 668년까지 약 700년 동안, 한반도에는 <strong>고구려</strong>, <strong>백제</strong>, <strong>신라</strong> 세 나라가 함께 존재했습니다.</p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin: 20px 0;">
                <div style="background: #ffebee; padding: 15px; border-radius: 10px; border-left: 4px solid #b84a4a;">
                    <h4 style="color: #b84a4a; margin-bottom: 10px;">🏹 고구려</h4>
                    <p><strong>위치:</strong> 북부</p>
                    <p><strong>특징:</strong> 가장 강한 군사력</p>
                    <p><strong>업적:</strong> 광개토대왕의 대제국</p>
                </div>
                <div style="background: #fff3e0; padding: 15px; border-radius: 10px; border-left: 4px solid #d4a574;">
                    <h4 style="color: #d4a574; margin-bottom: 10px;">⛵ 백제</h4>
                    <p><strong>위치:</strong> 중서부</p>
                    <p><strong>특징:</strong> 해상 무역으로 부자</p>
                    <p><strong>업적:</strong> 일본 문화 전파</p>
                </div>
                <div style="background: #e8f5e9; padding: 15px; border-radius: 10px; border-left: 4px solid #4caf50;">
                    <h4 style="color: #4caf50; margin-bottom: 10px;">⚔️ 신라</h4>
                    <p><strong>위치:</strong> 남동부</p>
                    <p><strong>특징:</strong> 점차 성장</p>
                    <p><strong>업적:</strong> 결국 삼국 통일</p>
                </div>
            </div>

            <h4 style="margin-top: 20px;">📊 삼국의 경쟁 구도</h4>
            <p>세 나라는 한반도의 영토를 놓고 끊임없이 경쟁했습니다:</p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li><strong>고구려 vs 신라:</strong> 북쪽 영토를 놓고 치열한 전쟁</li>
                <li><strong>백제 vs 신라:</strong> 남쪽 문화 영역의 패권</li>
                <li><strong>당나라의 개입:</strong> 중국의 당나라가 한반도 사정에 영향</li>
            </ul>

            <div style="background: #fffacd; padding: 15px; border-radius: 8px; margin-top: 20px;">
                💡 <strong>삼국시대의 의미</strong>: 이 시대는 경쟁 속에서 한반도 문화가 발전했던 황금기입니다!
            </div>
        </div>`,
        
        artifact: `<div>
            <h3>🏺 삼국의 유물들이 말해주는 것</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px;">
                <div style="background: #f0f0f0; padding: 15px; border-radius: 10px;">
                    <div style="font-size: 2.5em; text-align: center;">⚱️</div>
                    <h4>고구려 벽화 무덤</h4>
                    <p style="font-size: 0.9em;">고구려 왕족과 귀족의 분묘에 그려진 벽화. 당시의 생활과 신앙을 알 수 있음</p>
                </div>
                <div style="background: #f0f0f0; padding: 15px; border-radius: 10px;">
                    <div style="font-size: 2.5em; text-align: center;">🏺</div>
                    <h4>백제금동대향로</h4>
                    <p style="font-size: 0.9em;">백제의 뛰어난 금속 공예 기술을 보여주는 향로. 국보 제 287호</p>
                </div>
                <div style="background: #f0f0f0; padding: 15px; border-radius: 10px;">
                    <div style="font-size: 2.5em; text-align: center;">👑</div>
                    <h4>신라 금관</h4>
                    <p style="font-size: 0.9em;">신라 왕족의 금관. 뛰어난 금세공 기술과 미적 감각을 보여줌</p>
                </div>
                <div style="background: #f0f0f0; padding: 15px; border-radius: 10px;">
                    <div style="font-size: 2.5em; text-align: center;">📜</div>
                    <h4>삼국지</h4>
                    <p style="font-size: 0.9em;">중국 역사서. 고대 한반도 삼국을 기록한 중요한 사료</p>
                </div>
            </div>
        </div>`
    },
    
    // 고려의 상세 콘텐츠
    '고려': {
        story: `<div style="line-height: 1.8;">
            <h3>🎨 천년을 이어간 나라 - 고려</h3>
            <p><strong>후삼국을 통일한 왕건</strong>이 918년에 건국한 고려는 약 500년 동안 한반도를 다스렸습니다.</p>
            
            <h4 style="margin-top: 20px;">👑 왕건의 건국</h4>
            <div style="background: #e8f4f8; padding: 15px; border-radius: 10px; margin: 15px 0;">
                <p><strong>918년:</strong> 왕건은 고구려의 옛 영광을 되찾는다는 의미에서 나라 이름을 "고려"라고 붙였습니다.</p>
                <p style="margin-top: 10px;">왕건의 건국은 단순히 한 나라를 세운 것이 아니라, <strong>삼국시대의 고구려 전통을 이으려는 민족적 열망</strong>을 담고 있었습니다.</p>
            </div>

            <h4 style="margin-top: 20px;">📚 고려의 문화</h4>
            <ul style="margin-left: 20px;">
                <li><strong>팔만대장경:</strong> 거란의 침입으로부터 나라를 지키기 위해 불경을 대량 인쇄 (13세기)</li>
                <li><strong>고려청자:</strong> 은은한 녹색이 특징인 도자기. "청자의 나라"라 불림</li>
                <li><strong>문학과 철학:</strong> 팔만대장경, 직지심체요절 등 인쇄 기술 발전</li>
            </ul>

            <div style="background: #fffacd; padding: 15px; border-radius: 8px; margin-top: 20px;">
                💡 <strong>고려의 위대함</strong>: 약 500년을 존속하면서 동양의 고도한 문화를 창조했던 나라입니다!
            </div>
        </div>`,
        
        artifact: `<div>
            <h3>🏺 고려의 자랑스러운 유산</h3>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 10px;">
                <div style="margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid #7b68ee; border-radius: 5px;">
                    <div style="font-size: 2em; margin-bottom: 10px;">📖</div>
                    <h4>팔만대장경</h4>
                    <p>거란의 침입에 맞서기 위해 약 80,000개의 목판에 불교 경전을 새긴 것. 현재 해인사에 보관.</p>
                    <p style="color: #667eea; font-size: 0.9em; margin-top: 8px;">💡 의미: 문화의 힘으로 나라를 지키려는 의지</p>
                </div>

                <div style="margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid #7b68ee; border-radius: 5px;">
                    <div style="font-size: 2em; margin-bottom: 10px;">🏺</div>
                    <h4>고려청자</h4>
                    <p>은은한 녹색이 특징인 도자기. 세계에서 가장 아름다운 청자로 평가받음.</p>
                    <p style="color: #667eea; font-size: 0.9em; margin-top: 8px;">💡 의미: 고려의 미적 감각과 기술력</p>
                </div>

                <div style="padding: 15px; background: white; border-left: 4px solid #7b68ee; border-radius: 5px;">
                    <div style="font-size: 2em; margin-bottom: 10px;">📜</div>
                    <h4>팔만대장경 목판</h4>
                    <p>한글 이전의 인쇄 기술을 보여주는 귀중한 유산. 목판에 글자를 새겨서 종이에 인쇄.</p>
                    <p style="color: #667eea; font-size: 0.9em; margin-top: 8px;">💡 의미: 고려의 선진 인쇄 기술</p>
                </div>
            </div>
        </div>`
    }
};

// 난이도별 학년 매핑
const gradeMapping = {
    1: { level: 'easy', title: '초등 3학년', wordsPerMin: 80, complexity: 0.6 },
    2: { level: 'easy-mid', title: '초등 4학년', wordsPerMin: 100, complexity: 0.7 },
    3: { level: 'normal', title: '초등 5학년', wordsPerMin: 120, complexity: 0.85 },
    4: { level: 'normal-hard', title: '초등 6학년', wordsPerMin: 140, complexity: 0.95 },
    5: { level: 'hard', title: '중학교', wordsPerMin: 160, complexity: 1.2 },
    6: { level: 'expert', title: '고등학교', wordsPerMin: 180, complexity: 1.5 }
};
