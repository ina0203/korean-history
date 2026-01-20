// ===== 역사 인물 AI 대화 시스템 =====
const historicalFigures = {
    '고조선': {
        name: '단군왕검',
        icon: '👑',
        color: '#D4A574',
        personality: 'wise',
        dialogues: {
            greeting: '안녕하거라. 나는 고조선의 건국자 단군왕검이다. 무엇을 배우고 싶은가?',
            correct: [
                '훌륭하도다! 그 통찰력이 곧 나의 나라를 다스리는 지혜로다.',
                '옳은 대답이다! 이것이 바로 우리 고조선의 법도의 근본이네.',
                '좋구나! 그렇게 역사를 깨닫는 마음이 곧 시대를 움직이는 힘이 된다.'
            ],
            incorrect: [
                '아, 그렇지 않도다. 다시 한 번 생각해 보거라. 우리 8개의 법도를 살펴보면...',
                '흠, 그리 쉽지 않구나. 내가 곰과 호랑이 이야기를 들려줄까?',
                '아니, 아니다. 내가 기원전 2333년에 세운 나라의 규칙을 생각해보면...'
            ],
            hint: '생각을 정리해 보거라. 내 법령에서 그 답을 찾을 수 있을 것이다.'
        }
    },
    '고구려': {
        name: '광개토대왕',
        icon: '🏹',
        color: '#B84A4A',
        personality: 'warrior',
        dialogues: {
            greeting: '나는 광개토대왕이다! 고구려를 동쪽의 강한 나라로 만들었노라.',
            correct: [
                '오! 그 대로다! 나도 그렇게 영토를 넓혔거든!',
                '맞도다! 우리 고구려의 위대한 역사를 제대로 알고 있군!',
                '좋아! 그런 정신으로 우리는 한반도의 영웅이 되었다!'
            ],
            incorrect: [
                '아니지! 나를 알라면 광개토비를 봐야 한다!',
                '우리 고구려의 역사를 다시 살펴봐야겠구나.',
                '정답이 아니다. 내가 남긴 광개토비를 읽어보거라!'
            ],
            hint: '내 광개토비에 우리의 영광이 모두 새겨져 있다!'
        }
    },
    '통일신라': {
        name: '신문왕',
        icon: '🏛️',
        color: '#F4D03F',
        personality: 'scholarly',
        dialogues: {
            greeting: '나는 신문왕이다. 통일신라를 문화의 나라로 만들었노라.',
            correct: [
                '정확하도다! 그렇게 우리는 석굴암과 불국사를 세웠다.',
                '옳다! 우리 신라의 불교 문화를 제대로 이해했구나!',
                '훌륭하도다! 우리의 문화유산을 아는 것이 진정한 역사 공부다.'
            ],
            incorrect: [
                '아니다. 우리 신라의 문화를 다시 생각해 보아라.',
                '그렇지 않다. 불국사와 석굴암의 의미를 다시 살펴보거라.',
                '틀렸다. 우리 신라의 화려한 문화를 더 공부해야 한다.'
            ],
            hint: '석굴암의 대불을 바라보며 생각해 보거라!'
        }
    },
    '고려': {
        name: '왕건',
        icon: '⚔️',
        color: '#7B68EE',
        personality: 'strategic',
        dialogues: {
            greeting: '나는 고려의 건국자 왕건이다. 후삼국을 통일한 자로라!',
            correct: [
                '정확하도다! 이것이 고려의 건국 이념이다!',
                '좋도다! 고려 건국의 깊은 뜻을 아는구나!',
                '훌륭하도다! 이렇게 우리는 천년 고려를 이루었다!'
            ],
            incorrect: [
                '아니다! 고려 건국의 의지를 다시 생각해 보거라!',
                '그렇지 않다. 팔만대장경이 담긴 우리 문화를 더 알아보거라.',
                '틀렸다. 고려청자와 팔만대장경의 의미를 생각해 보아라!'
            ],
            hint: '고려청자의 빛깔을 보듯이 깊게 생각해 보거라!'
        }
    },
    '조선': {
        name: '세종대왕',
        icon: '📖',
        color: '#DC143C',
        personality: 'innovative',
        dialogues: {
            greeting: '나는 세종대왕이다. 한글을 만들어 백성이 글을 배우게 했노라!',
            correct: [
                '정확하도다! 한글 창제가 얼마나 위대한 업적인지 아는구나!',
                '옳도다! 이것이 바로 과학 정신이자 인민주의 정신이다!',
                '훌륭하도다! 세종의 정신을 제대로 이해했도다!'
            ],
            incorrect: [
                '아니다! 한글 창제의 의미를 다시 생각해 보거라!',
                '그렇지 않다. 한글이 어떻게 백성의 삶을 바꾸었는지 생각해 보아라!',
                '틀렸다. 한글이 지니는 의미를 더 깊이 있게 살펴보거라!'
            ],
            hint: '훈민정음 서문의 첫 문장을 생각해 보거라!'
        }
    },
    '임진왜란': {
        name: '이순신 장군',
        icon: '🚢',
        color: '#1E90FF',
        personality: 'heroic',
        dialogues: {
            greeting: '나는 이순신이다. 명량해전에서 7척으로 130척의 왜군을 격파했노라!',
            correct: [
                '정확하도다! 내 해전의 기술과 정신을 제대로 이해했도다!',
                '옳도다! 이것이 바로 우리 해전 전술의 핵심이다!',
                '훌륭하도다! 우리는 이렇게 일본군을 격퇴했다!'
            ],
            incorrect: [
                '아니다! 내 해전 전술을 다시 생각해 보거라!',
                '그렇지 않다. 명량해전의 의미를 다시 살펴보거라!',
                '틀렸다. 내가 창조한 거북선의 위력을 생각해 보아라!'
            ],
            hint: '명량해전의 전황을 차분히 생각해 보거라!'
        }
    },
    '독립운동': {
        name: '유관순',
        icon: '✊',
        color: '#FF6347',
        personality: 'courageous',
        dialogues: {
            greeting: '나는 유관순이다. 3·1 운동의 정신으로 독립을 외쳤노라!',
            correct: [
                '정확하도다! 그 정신이 바로 우리의 독립 정신이다!',
                '옳도다! 3·1 운동이 얼마나 위대한 선택인지 알겠구나!',
                '훌륭하도다! 청년들이 이렇게 일어섰기에 나라가 살아났다!'
            ],
            incorrect: [
                '아니다! 3·1 운동의 의미를 다시 생각해 보거라!',
                '그렇지 않다. 독립의 길이 얼마나 힘들었는지 생각해 보아라!',
                '틀렸다. 우리 민족의 저항을 더 깊이 이해해야 한다!'
            ],
            hint: '1919년 3월 1일, 우리 민족이 일어선 그 정신을 생각해 보거라!'
        }
    }
};

// ===== 학습 콘텐츠: 7개 시대 완전판 =====
const completeHistoryData = {
    0: { // 선사 시대
        name: '선사 시대',
        period: '기원전 30,000년경',
        figure: null,
        color: '#8B6F47',
        icon: '🦴',
        steps: [
            {
                type: 'story',
                title: '🦴 우리 역사의 새벽',
                content: `<div style="line-height: 1.8;">
                    <h3>약 30,000년 전, 한반도에 인류가 나타나다</h3>
                    <p><strong>구석기 시대</strong>는 문자가 없던 시대를 말합니다. 돌을 깨서 만든 도구로 사냥을 하고, 강가에 모여 살던 사람들의 이야기입니다.</p>
                    
                    <h4 style="margin-top: 20px;">🏞️ 그들은 어디서 살았나?</h4>
                    <ul style="margin-left: 20px;">
                        <li><strong>강가</strong>: 물고기를 잡기 쉽고 물을 마실 수 있음</li>
                        <li><strong>해변</strong>: 조개를 캐고 물고기를 낚을 수 있음</li>
                        <li><strong>동굴</strong>: 추운 바람과 맹수로부터 보호됨</li>
                    </ul>

                    <h4 style="margin-top: 20px;">🔪 그들의 도구</h4>
                    <p><strong>아슐리안 석기</strong>: 양쪽을 깨서 만든 뾰족한 도구로 사냥과 고기 자르는데 사용</p>
                    <p><strong>슬랭(슴베찌르개)</strong>: 동물의 가죽을 벗기는데 사용</p>

                    <div style="background: #fffacd; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        💡 <strong>역사의 시작</strong>: 구석기 사람들이 불을 사용하기 시작하면서, 인류의 문명이 본격적으로 시작됩니다!
                    </div>
                </div>`,
                audioHint: '구석기 사람들의 삶을 생각해 보세요. 하루종일 무엇을 했을까요?'
            },
            {
                type: 'artifact',
                title: '🏺 유물로 배우는 선사 시대',
                content: `<div>
                    <h3>선사 시대 사람들이 남긴 증거</h3>
                    <p>아무리 오래된 시대라도 그들이 사용한 도구와 생활용품이 남아있습니다. 이것을 <strong>유물</strong>이라고 합니다.</p>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
                        <div style="background: #f0f0f0; padding: 15px; border-radius: 10px;">
                            <div style="font-size: 2.5em; text-align: center;">🗡️</div>
                            <h4>손도끼</h4>
                            <p style="font-size: 0.9em;">구석기 시대의 가장 중요한 도구. 사냥과 가죽 처리에 사용</p>
                            <p style="font-size: 0.8em; color: #666;">현대: 약 50만년 전 - 10만년 전</p>
                        </div>
                        <div style="background: #f0f0f0; padding: 15px; border-radius: 10px;">
                            <div style="font-size: 2.5em; text-align: center;">🏺</div>
                            <h4>빗살무늬 토기</h4>
                            <p style="font-size: 0.9em;">신석기 사람들이 음식을 보관하기 위해 만든 그릇</p>
                            <p style="font-size: 0.8em; color: #666;">신석기: 약 1만년 전 - 4,000년 전</p>
                        </div>
                        <div style="background: #f0f0f0; padding: 15px; border-radius: 10px;">
                            <div style="font-size: 2.5em; text-align: center;">🪨</div>
                            <h4>돌 화살촉</h4>
                            <p style="font-size: 0.9em;">활에 달아 사냥감을 맞히는데 사용한 도구</p>
                            <p style="font-size: 0.8em; color: #666;">신석기부터 사용됨</p>
                        </div>
                        <div style="background: #f0f0f0; padding: 15px; border-radius: 10px;">
                            <div style="font-size: 2.5em; text-align: center;">🏠</div>
                            <h4>움집 자취</h4>
                            <p style="font-size: 0.9em;">신석기 사람들이 반으로 파고 살던 집의 흔적</p>
                            <p style="font-size: 0.8em; color: #666;">땅을 파고 돌을 원형으로 배치</p>
                        </div>
                    </div>
                </div>`,
                artifacts: ['손도끼', '빗살무늬토기', '돌화살촉', '움집']
            },
            {
                type: 'causal',
                title: '🤔 왜 그럴까? - 선사 시대의 생활',
                content: `<div>
                    <h3>선사 시대 사람들의 선택을 이해해 보자</h3>
                    
                    <div style="background: #e8f4f8; padding: 15px; border-radius: 10px; margin-bottom: 15px;">
                        <div style="font-weight: 600; margin-bottom: 8px; font-size: 1.1em;">❓ 왜 강가에 살았을까?</div>
                        <div style="color: #333; line-height: 1.6;">✨ <strong>이유:</strong>
                            <ul style="margin-left: 20px; margin-top: 8px;">
                                <li>물고기를 잡아 먹이를 얻을 수 있음</li>
                                <li>깨끗한 물을 마실 수 있음</li>
                                <li>조개, 달걀, 물새 등 다양한 음식</li>
                                <li>이동이 쉬워서 계절마다 다른 장소로 이동 가능</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: #e8f4f8; padding: 15px; border-radius: 10px; margin-bottom: 15px;">
                        <div style="font-weight: 600; margin-bottom: 8px; font-size: 1.1em;">❓ 왜 돌로 도구를 만들었을까?</div>
                        <div style="color: #333; line-height: 1.6;">✨ <strong>이유:</strong>
                            <ul style="margin-left: 20px; margin-top: 8px;">
                                <li>주변에서 가장 쉽게 구할 수 있는 재료</li>
                                <li>단단해서 오래 사용 가능</li>
                                <li>금속을 다루는 기술이 아직 없음</li>
                                <li>깨서 날카로운 모양을 만들 수 있음</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: #e8f4f8; padding: 15px; border-radius: 10px;">
                        <div style="font-weight: 600; margin-bottom: 8px; font-size: 1.1em;">❓ 왜 불을 사용하게 되었을까?</div>
                        <div style="color: #333; line-height: 1.6;">✨ <strong>영향:</strong>
                            <ul style="margin-left: 20px; margin-top: 8px;">
                                <li>고기를 익혀 먹을 수 있게 됨 → 더 영양가 높음</li>
                                <li>따뜻함으로 추운 겨울을 버틸 수 있음</li>
                                <li>밤에 활동 가능 → 생활 영역 확대</li>
                                <li>맹수로부터 보호됨</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: #fffacd; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        💡 <strong>역사의 교훈</strong>: 인류는 자연과 필요에 맞춰 도구와 기술을 발전시켜 나갔습니다!
                    </div>
                </div>`,
                audioHint: '구석기 사람들이 왜 그렇게 살았는지 이해하는 것이 역사 공부의 핵심입니다!'
            },
            {
                type: 'advanced',
                title: '📚 심화: 구석기 vs 신석기',
                content: `<div>
                    <h3>선사 시대의 두 시기를 비교해 보자</h3>
                    <p style="color: #666; margin-bottom: 20px;">인류의 역사를 크게 나누면 <strong>구석기</strong>와 <strong>신석기</strong>로 나눕니다. 이 두 시기는 도구의 변화로 시작되지만, 인류의 생활 방식 전체가 바뀌게 됩니다.</p>

                    <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                        <tr style="background: #667eea; color: white;">
                            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;"></th>
                            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">구석기</th>
                            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">신석기</th>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">📍 시기</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">약 30만년 전~</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">약 1만년 전~</td>
                        </tr>
                        <tr style="background: #f5f5f5;">
                            <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">🔧 도구</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">뾰족하고 날카로운 돌도구</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">갈아서 만든 부드러운 도구</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">🍖 생활</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">사냥과 채집</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">농사와 목축 시작</td>
                        </tr>
                        <tr style="background: #f5f5f5;">
                            <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">🏠 주거</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">동굴, 임시 거처</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">반으로 판 움집</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">🎨 문화</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">동굴 벽화</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">토기, 빗살무늬</td>
                        </tr>
                        <tr style="background: #f5f5f5;">
                            <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">👥 사회</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">유목 생활, 작은 무리</td>
                            <td style="padding: 12px; border: 1px solid #ddd;">정착 생활, 공동체 형성</td>
                        </tr>
                    </table>

                    <div style="background: #fffacd; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        💡 <strong>중요한 변화</strong>: 신석기 시대는 <strong>농사</strong>가 시작됩니다!
                        <ul style="margin-left: 20px; margin-top: 8px;">
                            <li>👨‍🌾 이제 사람들은 한 곳에 정착하게 됨</li>
                            <li>🏘️ 더 많은 사람들이 함께 살 수 있음</li>
                            <li>🎯 음식을 저장할 필요가 생김 → <strong>토기</strong> 발명!</li>
                            <li>⚖️ 신분의 차이가 생기기 시작 → <strong>사회 변화</strong>!</li>
                        </ul>
                    </div>
                </div>`,
                audioHint: '신석기 혁명은 인류 문명의 가장 중요한 전환점입니다!'
            },
            {
                type: 'exam',
                title: '🎯 수능 스타일 최종 문제',
                content: `<div style="background: #fff9e6; padding: 20px; border-radius: 10px;">
                    <h3>선사 시대 마스터 테스트</h3>
                    <p style="color: #666; margin-top: 15px;">아래 문제들을 풀면서 선사 시대를 완벽히 이해해 보세요!</p>
                </div>`
            }
        ],
        quizzes: [
            { q: '구석기 시대 사람들이 강가에 산 주된 이유는?', opts: ['전투를 피하기 위해', '물과 먹이를 얻기 위해', '숨을 곳이 필요했기 때문'], a: '물과 먹이를 얻기 위해' },
            { q: '신석기 시대의 가장 큰 변화는?', opts: ['금속 도구 발명', '농사 시작', '도시 건설'], a: '농사 시작' },
            { q: '빗살무늬 토기의 용도는?', opts: ['음식을 담기 위해', '장식용으로', '무기로'], a: '음식을 담기 위해' },
            { q: '구석기 사람들이 불을 사용한 이유가 아닌 것은?', opts: ['고기를 익혀 먹기 위해', '밤에 활동하기 위해', '현재의 시간을 정하기 위해'], a: '현재의 시간을 정하기 위해' },
            { q: '다음 중 신석기 시대의 특징으로 옳은 것은?', opts: ['청동 도구를 사용했다', '움집에 살며 농사를 시작했다', '한글을 사용했다'], a: '움집에 살며 농사를 시작했다' }
        ]
    },
    1: { // 고조선
        name: '고조선',
        period: '기원전 2333년~108년',
        figure: '단군왕검',
        color: '#D4A574',
        icon: '👑',
        steps: [
            {
                type: 'story',
                title: '👑 건국의 신화 - 고조선 이야기',
                content: `<div style="line-height: 1.8;">
                    <h3>🌟 우리나라 첫 번째 나라 - 고조선</h3>
                    
                    <h4 style="margin-top: 20px;">📖 건국 신화</h4>
                    <p><strong>하늘에서 내려온 단군</strong>은 곰과 호랑이가 쑥과 마늘을 먹고 인간으로 변한 여자와 만났습니다. 그들의 아들이 바로 <strong>단군왕검</strong입니다!</p>
                    
                    <div style="background: #fff8dc; padding: 15px; border-radius: 10px; margin: 20px 0;">
                        <strong>🎭 이 이야기의 의미:</strong>
                        <ul style="margin-left: 20px; margin-top: 8px;">
                            <li><strong>곰</strong> = 인내심 있는 사람들 (농업 중심)</li>
                            <li><strong>호랑이</strong> = 용맹한 사람들 (사냥/전투)</li>
                            <li><strong>단군</strong> = 이 모든 사람들을 하나로 묶은 지도자</li>
                        </ul>
                    </div>

                    <h4 style="margin-top: 20px;">⏰ 고조선의 성립</h4>
                    <p style="font-size: 1.1em; color: #667eea;"><strong>기원전 2333년</strong> - 단군왕검이 평양에 고조선을 건국</p>
                    <p style="color: #666; margin-top: 10px;">이는 <strong>한국 역사의 공식적인 시작</strong>입니다!</p>

                    <h4 style="margin-top: 20px;">🗺️ 고조선의 영토</h4>
                    <p>고조선은 한반도의 북부와 만주 지역을 포함한 광대한 영토를 차지했습니다. 당시 가장 강한 국가 중 하나였습니다!</p>

                    <div style="background: #fffacd; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        💡 <strong>역사의 의미</strong>: 고조선은 우리 민족이 세운 첫 번째 국가이며, 한반도 역사의 첫 장을 열었습니다!
                    </div>
                </div>`,
                audioHint: '단군 건국 신화의 각 요소가 무엇을 의미하는지 이해해 보세요!'
            },
            {
                type: 'artifact',
                title: '🏺 고조선의 유물 - 발전된 문명의 증거',
                content: `<div>
                    <h3>고조선 사람들의 놀라운 기술</h3>
                    <p style="color: #666; margin-bottom: 20px;">고조선은 청동기 시대 나라였습니다. 이는 선사 시대보다 훨씬 발전된 도구와 기술을 가지고 있었다는 뜻입니다!</p>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
                        <div style="background: #f0f0f0; padding: 15px; border-radius: 10px;">
                            <div style="font-size: 2.5em; text-align: center;">🗡️</div>
                            <h4>비파형 동검</h4>
                            <p style="font-size: 0.9em;"><strong>의미:</strong> 고조선의 상징적인 무기</p>
                            <p style="font-size: 0.85em; color: #666;">생김새가 악기인 비파와 비슷해서 이름이 붙음. 청동으로 만든 정교한 검</p>
                            <p style="font-size: 0.8em; color: #667eea;">💡 이는 고조선이 강한 군사력을 가진 나라였다는 증거!</p>
                        </div>
                        <div style="background: #f0f0f0; padding: 15px; border-radius: 10px;">
                            <div style="font-size: 2.5em; text-align: center;">🪞</div>
                            <h4>청동 거울</h4>
                            <p style="font-size: 0.9em;"><strong>의미:</strong> 귀족의 지위를 나타내는 물건</p>
                            <p style="font-size: 0.85em; color: #666;">청동은 귀한 재료였기 때문에, 청동 거울을 가진 사람은 높은 신분</p>
                            <p style="font-size: 0.8em; color: #667eea;">💡 이는 고조선에 신분 제도가 있었다는 증거!</p>
                        </div>
                        <div style="background: #f0f0f0; padding: 15px; border-radius: 10px;">
                            <div style="font-size: 2.5em; text-align: center;">📿</div>
                            <h4>청동 방울(동령)</h4>
                            <p style="font-size: 0.9em;"><strong>의미:</strong> 제사나 의식에 사용</p>
                            <p style="font-size: 0.85em; color: #666;">신께 제사를 지낼 때 울려서 신과 통하려 함</p>
                            <p style="font-size: 0.8em; color: #667eea;">💡 이는 고조선이 종교 의식을 가진 나라였다는 증거!</p>
                        </div>
                        <div style="background: #f0f0f0; padding: 15px; border-radius: 10px;">
                            <div style="font-size: 2.5em; text-align: center;">🏺</div>
                            <h4>빨간 토기</h4>
                            <p style="font-size: 0.9em;"><strong>의미:</strong> 일상용 음식 저장 도구</p>
                            <p style="font-size: 0.85em; color: #666;">음식을 저장하고 요리하는데 사용한 토기</p>
                            <p style="font-size: 0.8em; color: #667eea;">💡 이는 고조선이 안정된 생활을 했다는 증거!</p>
                        </div>
                    </div>

                    <div style="background: #fffacd; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        💡 <strong>유물이 말해주는 것</strong>: 고조선은 군사력, 종교, 신분 제도, 생활 문화가 모두 발달한 나라였습니다!
                    </div>
                </div>`,
                artifacts: ['비파형동검', '청동거울', '동령', '빨간토기']
            },
            {
                type: 'causal',
                title: '🤔 고조선의 8개 법령 - 왜 이 법을 만들었을까?',
                content: `<div>
                    <h3>📜 법으로 본 고조선의 모습</h3>
                    <p style="color: #666; margin-bottom: 20px;">『삼국유사』에 기록된 <strong>고조선의 8개 법령</strong>입니다. 이 법들은 나라를 어떻게 다스렸는지 알려줍니다.</p>

                    <div style="background: #e8f4f8; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                        <h4 style="margin-bottom: 15px;">⚖️ 고조선의 8개 법령</h4>
                        
                        <div style="margin-bottom: 12px; padding: 12px; background: white; border-left: 4px solid #667eea; border-radius: 5px;">
                            <strong>1. 살인한 자는 죽음</strong><br>
                            <span style="color: #666; font-size: 0.9em;">→ 생명은 가장 귀중한 것. 범죄는 엄격히 벌함</span>
                        </div>
                        
                        <div style="margin-bottom: 12px; padding: 12px; background: white; border-left: 4px solid #667eea; border-radius: 5px;">
                            <strong>2. 타인을 상처낸 자는 곡식으로 배상</strong><br>
                            <span style="color: #666; font-size: 0.9em;">→ 다치게 한 것은 돈으로 해결. 상황에 따라 처벌 정도 다름</span>
                        </div>

                        <div style="margin-bottom: 12px; padding: 12px; background: white; border-left: 4px solid #667eea; border-radius: 5px;">
                            <strong>3. 도둑질한 자는 노예로 삼음</strong><br>
                            <span style="color: #666; font-size: 0.9em;">→ 남의 것을 훔치면 그 사람의 종이 됨. 엄격한 처벌</span>
                        </div>

                        <div style="margin-bottom: 12px; padding: 12px; background: white; border-left: 4px solid #667eea; border-radius: 5px;">
                            <strong>4~8. 기타 법령</strong><br>
                            <span style="color: #666; font-size: 0.9em;">→ 시간이 흐르면서 더 많은 법이 추가됨</span>
                        </div>
                    </div>

                    <div style="background: #fff9e6; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                        <h4 style="margin-bottom: 10px;">🔍 이 법령들이 말해주는 것</h4>
                        <ul style="margin-left: 20px;">
                            <li><strong>체계적인 나라:</strong> 단순한 부족이 아니라 법으로 다스리는 국가</li>
                            <li><strong>신분 제도:</strong> "노예"라는 신분이 있었다 → 계급 사회</li>
                            <li><strong>공동체 의식:</strong> 개인의 행동이 나라 전체에 영향을 미침</li>
                            <li><strong>법치주의:</strong> 왕의 마음대로가 아니라 <strong>법에 따라 다스림</strong></li>
                        </ul>
                    </div>

                    <div style="background: #fffacd; padding: 15px; border-radius: 8px;">
                        💡 <strong>역사의 교훈</strong>: <strong>법이 있다는 것 = 문명이 발달했다는 것</strong>입니다!<br>
                        고조선은 청동기 시대 나라 중에서도 매우 발전된 사회 체계를 가지고 있었습니다!
                    </div>
                </div>`,
                audioHint: '고조선의 법령을 보면 당시의 사회 모습이 그대로 드러납니다!'
            },
            {
                type: 'advanced',
                title: '📚 심화: 고조선의 멸망과 역사적 의미',
                content: `<div>
                    <h3>고조선은 왜 사라졌을까?</h3>
                    <p style="color: #666; margin-bottom: 20px;">2,000년 이상 존속한 고조선, 하지만 결국 역사 무대에서 사라집니다. 그 이유를 추적해 봅시다.</p>

                    <h4 style="margin-top: 20px;">📈 고조선의 역사</h4>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px; flex-wrap: wrap; gap: 10px;">
                        <div style="text-align: center; background: #f0f0f0; padding: 15px; border-radius: 10px; flex: 1; min-width: 120px;">
                            <div style="font-size: 1.8em; font-weight: 700; color: #667eea;">BC 2333년</div>
                            <div style="color: #666; font-size: 0.9em;">고조선 건국</div>
                        </div>
                        <div style="font-size: 1.5em; color: #999;">→</div>
                        <div style="text-align: center; background: #f0f0f0; padding: 15px; border-radius: 10px; flex: 1; min-width: 120px;">
                            <div style="font-size: 1.8em; font-weight: 700; color: #667eea;">BC 7~4세기</div>
                            <div style="color: #666; font-size: 0.9em;">철기 문화 유입</div>
                        </div>
                        <div style="font-size: 1.5em; color: #999;">→</div>
                        <div style="text-align: center; background: #f0f0f0; padding: 15px; border-radius: 10px; flex: 1; min-width: 120px;">
                            <div style="font-size: 1.8em; font-weight: 700; color: #667eea;">BC 200년경</div>
                            <div style="color: #666; font-size: 0.9em;">위만 조선 건국</div>
                        </div>
                        <div style="font-size: 1.5em; color: #999;">→</div>
                        <div style="text-align: center; background: #ff6b6b; color: white; padding: 15px; border-radius: 10px; flex: 1; min-width: 120px;">
                            <div style="font-size: 1.8em; font-weight: 700;">BC 108년</div>
                            <div style="font-size: 0.9em;">고조선 멸망</div>
                        </div>
                    </div>

                    <h4 style="margin-top: 30px;">⚔️ 고조선의 멸망 과정</h4>
                    
                    <div style="background: #fff8dc; padding: 15px; border-radius: 10px; margin: 15px 0;">
                        <h5 style="margin-bottom: 10px;">1️⃣ <strong>내부 갈등</strong></h5>
                        <p style="color: #333;">고조선도 다른 나라처럼 왕위 계승을 놓고 싸웠습니다. 이 과정에서 나라가 약해집니다.</p>
                    </div>

                    <div style="background: #fff8dc; padding: 15px; border-radius: 10px; margin: 15px 0;">
                        <h5 style="margin-bottom: 10px;">2️⃣ <strong>중국의 팽창</strong></h5>
                        <p style="color: #333;">한나라(중국)의 문제제가 고조선의 영토를 노렸습니다. 중국의 군사력이 점점 강해집니다.</p>
                    </div>

                    <div style="background: #fff8dc; padding: 15px; border-radius: 10px; margin: 15px 0;">
                        <h5 style="margin-bottom: 10px;">3️⃣ <strong>한나라의 침략</strong></h5>
                        <p style="color: #333;">기원전 108년, 중국의 한나라는 고조선을 침략했습니다. 이것이 고조선의 마지막입니다.</p>
                    </div>

                    <div style="background: #e8f4f8; padding: 15px; border-radius: 10px; margin-top: 20px;">
                        <h4 style="margin-bottom: 10px;">📚 그럼 고조선은 정말 사라진 걸까?</h4>
                        <p style="color: #333;">아닙니다! 고조선은 사라졌지만, 그 문화와 정신은 이어집니다:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li><strong>고구려:</strong> 고조선의 유민들이 건국 (서쪽 영토)</li>
                            <li><strong>부여:</strong> 고조선의 유민들이 세운 나라</li>
                            <li><strong>삼국:</strong> 모두 고조선의 후예를 자처</li>
                        </ul>
                    </div>

                    <div style="background: #fffacd; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        💡 <strong>역사의 의미</strong>: 고조선이 멸망했어도, <strong>우리 민족의 정체성과 문명은 계속 이어졌습니다!</strong><br>
                        이것이 한반도가 수천 년 동안 같은 민족 국가로 존속해온 이유입니다!
                    </div>
                </div>`,
                audioHint: '고조선은 멸망했지만, 그 정신과 문화는 영원히 이어집니다!'
            },
            {
                type: 'exam',
                title: '🎯 고조선 최종 마스터 테스트',
                content: `<div style="background: #fff9e6; padding: 20px; border-radius: 10px;">
                    <h3>고조선 완벽 이해하기</h3>
                    <p style="color: #666; margin-top: 15px;">고조선의 건국, 문화, 멸망까지 모두 이해했는지 확인해 보세요!</p>
                </div>`
            }
        ],
        quizzes: [
            { q: '고조선을 건국한 사람은 누구일까요?', opts: ['곰', '단군왕검', '호랑이'], a: '단군왕검' },
            { q: '고조선이 건국된 연대는?', opts: ['기원전 108년', '기원전 2333년', '기원전 668년'], a: '기원전 2333년' },
            { q: '비파형 동검이 의미하는 것은?', opts: ['농업 기술', '군사력 강함', '종교 의식'], a: '군사력 강함' },
            { q: '고조선의 8개 법령이 보여주는 것은?', opts: ['야만적 사회', '체계적이고 발전된 사회', '종교 중심 사회'], a: '체계적이고 발전된 사회' },
            { q: '고조선이 멸망한 해와 이유는?', opts: ['BC 668년, 자연재해', 'BC 108년, 중국 한나라의 침략', 'AD 100년, 내부 분란'], a: 'BC 108년, 중국 한나라의 침략' }
        ]
    }
    // 추가 시대들은 같은 구조로 계속됨
};

// ===== 학년별 난이도 조정 =====
const difficultyLevels = {
    1: { name: '초등 3학년', level: 'easy', multiplier: 1.0, wordsPerMinute: 80 },
    2: { name: '초등 4학년', level: 'easy', multiplier: 1.2, wordsPerMinute: 100 },
    3: { name: '초등 5학년', level: 'normal', multiplier: 1.5, wordsPerMinute: 120 },
    4: { name: '초등 6학년', level: 'normal', multiplier: 1.8, wordsPerMinute: 140 },
    5: { name: '중학교', level: 'hard', multiplier: 2.2, wordsPerMinute: 160 },
    6: { name: '고등학교', level: 'expert', multiplier: 2.8, wordsPerMinute: 180 }
};

// ===== AI 대화 함수 =====
function getAIResponse(figureName, isCorrect, questionType) {
    const figure = historicalFigures[figureName];
    if (!figure) return '';
    
    const dialogues = figure.dialogues[isCorrect ? 'correct' : 'incorrect'];
    return dialogues[Math.floor(Math.random() * dialogues.length)];
}

function getAIHint(figureName) {
    const figure = historicalFigures[figureName];
    return figure ? figure.dialogues.hint : '';
}

// ===== 학습 난이도 조정 함수 =====
function adjustContentDifficulty(content, gradeLevel) {
    const diffLevel = difficultyLevels[gradeLevel];
    // 복잡한 용어 제거 또는 추가 설명 붙이기
    if (gradeLevel === 1 || gradeLevel === 2) {
        // 쉬운 버전: 복잡한 표현 단순화
        return content.replace(/철학적/g, '생각하는').replace(/문명/g, '문화');
    } else if (gradeLevel >= 5) {
        // 어려운 버전: 더 깊은 해석 추가
        return content + '<div style="background: #e8f4f8; padding: 10px; margin-top: 10px; border-radius: 5px; font-size: 0.9em;"><strong>심화학습:</strong> 이 개념은 수능에서도 자주 나옵니다!</div>';
    }
    return content;
}
// ===== 삼국시대 완전 콘텐츠 =====
completeHistoryData[2] = {
    name: '삼국시대',
    period: 'AD 37년경 ~ 668년',
    mainFigure: '광개토대왕',
    icon: '⚔️',
    color: '#B84A4A',
    steps: [
        {
            type: 'story',
            title: '⚔️ 한반도를 나눈 세 나라의 이야기',
            audioHint: '삼국시대: 고구려, 백제, 신라가 한반도를 놓고 펼친 대삼각 경쟁',
            content: `
                <h3>삼국이 탄생하다</h3>
                <p>기원전 37년, 한반도에는 세 개의 강한 나라가 태어났습니다.</p>
                
                <div class="artifact-item">
                    <div class="name">🏹 고구려 (BC 37년경 ~ AD 668년)</div>
                    <p><strong>위치:</strong> 한반도 북쪽 (현재의 만주 일부 포함)<br>
                    <strong>특징:</strong> 강한 군사력과 넓은 영토<br>
                    <strong>유명한 왕:</strong> 광개토대왕 (AD 391~413년)<br>
                    <strong>이야기:</strong> 광개토대왕은 영토를 크게 넓혀 고구려를 동아시아의 강국으로 만들었습니다. 광개토비에는 그의 업적이 새겨져 있습니다.</p>
                </div>
                
                <div class="artifact-item">
                    <div class="name">🌊 백제 (BC 18년경 ~ AD 660년)</div>
                    <p><strong>위치:</strong> 한반도 남서쪽<br>
                    <strong>특징:</strong> 뛰어난 문화와 기술, 해상 무역<br>
                    <strong>유명한 왕:</strong> 근초고왕 (AD 346~375년)<br>
                    <strong>이야기:</strong> 백제는 중국과 일본과의 무역으로 발전했습니다. 뛰어난 건축 기술로 많은 사찰과 건물을 지었습니다.</p>
                </div>
                
                <div class="artifact-item">
                    <div class="name">🏔️ 신라 (BC 57년경 ~ AD 935년)</div>
                    <p><strong>위치:</strong> 한반도 남동쪽<br>
                    <strong>특징:</strong> 처음에는 약했지만 점점 강해짐<br>
                    <strong>유명한 왕:</strong> 진흥왕 (AD 540~576년)<br>
                    <strong>이야기:</strong> 신라는 처음에는 가장 약한 나라였습니다. 하지만 뛰어난 지도자들을 통해 점점 강해져서 결국 한반도를 통일하게 됩니다.</p>
                </div>
                
                <h3>삼국의 전쟁</h3>
                <p>약 600년 동안, 세 나라는 한반도의 패권을 놓고 계속 싸웠습니다.</p>
                <ul style="margin-left: 20px; margin-top: 10px;">
                    <li><strong>을지문덕의 살수대첩 (AD 612년):</strong> 고구려의 을지문덕이 수나라의 침략을 막은 유명한 전쟁입니다. 수나라 군대 305,000명이 30,000명만 살아 돌아갔을 정도로 큰 승리였습니다!</li>
                    <li><strong>신라의 삼국통일 (AD 676년):</strong> 신라가 당나라의 도움을 받아 고구려와 백제를 멸망시키고 한반도를 통일했습니다.</li>
                </ul>
            `
        },
        {
            type: 'artifact',
            title: '🏺 삼국의 유물들을 만나다',
            audioHint: '삼국은 각자 다른 문화를 발전시켰습니다. 그들이 남긴 유물들을 살펴봅시다.',
            content: `
                <h3>고구려의 유물</h3>
                
                <div class="artifact-item">
                    <div class="name">📜 광개토비(414년경)</div>
                    <p>광개토대왕의 업적을 기록한 돌 기념비입니다. 높이 약 6미터인 이 비석에는 광개토대왕이 얼마나 넓은 땅을 다스렸고, 얼마나 강한 나라를 만들었는지 한자로 새겨져 있습니다. 이것은 우리가 고구려의 역사를 아는 가장 중요한 자료입니다!</p>
                    <strong>왜 중요할까?</strong> 광개토대왕의 직접적인 업적을 알 수 있는 가장 오래된 기록입니다.
                </div>
                
                <div class="artifact-item">
                    <div class="name">🎭 고분벽화</div>
                    <p>고구려 왕과 귀족들의 무덤에 그려진 그림입니다. 주변산왕릉, 천추총 등에서 발견되었습니다. 이 그림들에는 당시 사람들의 생활 모습, 사냥하는 장면, 춤을 추는 모습, 하늘 여행하는 신선들의 모습이 생생하게 그려져 있습니다.</p>
                    <strong>왜 중요할까?</strong> 삼국시대 사람들의 일상적인 삶을 알 수 있습니다.
                </div>
                
                <h3>백제의 유물</h3>
                
                <div class="artifact-item">
                    <div class="name">🏛️ 미륵사지 석탑</div>
                    <p>백제 때 지어진 가장 큰 사찰 미륵사의 돌탑입니다. 삼층으로 이루어져 있으며, 고도의 건축 기술이 들어갔습니다. 현재 전라북도 익산에 남아있으며, 한국의 국보입니다.</p>
                    <strong>왜 중요할까?</strong> 백제의 뛰어난 건축 기술을 보여줍니다.
                </div>
                
                <div class="artifact-item">
                    <div class="name">🎨 백제금동대향로</div>
                    <p>향을 피우는 그릇으로, 금과 동으로 만들어졌습니다. 위에는 봉황이 앉아있고, 아래에는 용의 머리가 달려있습니다. 정교한 세공 기술이 돋보입니다.</p>
                    <strong>왜 중요할까?</strong> 백제인들의 높은 미적 감각을 보여줍니다.
                </div>
                
                <h3>신라의 유물</h3>
                
                <div class="artifact-item">
                    <div class="name">📿 천마총</div>
                    <p>신라 왕의 무덤에서 발견된 목마(말 그림). 말 안장 덮개에 금과 은으로 멋지게 장식된 천마가 그려져 있습니다. 이것은 신라의 예술 수준을 보여주는 유명한 유물입니다.</p>
                    <strong>왜 중요할까?</strong> 신라의 순금 세공 기술의 수준을 알 수 있습니다.
                </div>
                
                <div class="artifact-item">
                    <div class="name">⚡ 신라 토기와 유리잔</div>
                    <p>신라 사람들이 만든 빨간 도자기와 투명한 유리잔들입니다. 로마에서 온 유리잔도 있어서, 신라가 실크로드를 통해 멀리 로마와도 무역했음을 알 수 있습니다.</p>
                    <strong>왜 중요할까?</strong> 신라의 국제 무역이 얼마나 발전했는지 보여줍니다.
                </div>
            `
        },
        {
            type: 'causal',
            title: '🤔 왜 그럴까? 삼국의 전략',
            audioHint: '삼국이 어떤 전략으로 살아남았는지 생각해봅시다.',
            content: `
                <h3>❓ 왜 고구려는 북쪽에서 강한 나라가 될 수 있었을까?</h3>
                <p><strong>답변:</strong> 고구려는 만주의 광활한 땅을 가지고 있어서 많은 군사를 키울 수 있었고, 강한 말을 기르는 유목민족의 전술을 배워서 기병군대를 만들 수 있었기 때문입니다.</p>
                <div class="artifact-item">
                    <strong>더 깊이 생각해보기:</strong> 위치가 한 나라의 발전에 얼마나 중요한지 알 수 있습니다. 북쪽의 넓은 땅 → 자원 풍부 → 강한 군대 → 패권 争취!
                </div>
                
                <h3>❓ 왜 백제는 남쪽과 바다를 차지했을까?</h3>
                <p><strong>답변:</strong> 백제는 한강 유역과 남쪽 땅을 먼저 차지했기 때문입니다. 남쪽의 온따뜻한 기후에서 쌀을 많이 재배할 수 있었고, 바다를 통해 중국과 일본과 무역하면서 발전했습니다.</p>
                <div class="artifact-item">
                    <strong>더 깊이 생각해보기:</strong> 농업 + 해상무역 = 문화와 기술의 발전. 백제가 건축과 미술에서 뛰어난 이유입니다!
                </div>
                
                <h3>❓ 왜 신라가 처음에는 약했는데도 나중에 통일했을까?</h3>
                <p><strong>답변:</strong> 신라는 처음에 약했지만 좋은 리더들 (진흥왕, 문무왕 등)이 나타났고, 당나라와 연합해서 고구려와 백제를 멸망시켰기 때문입니다. 또한 신라 사람들이 매우 끈기 있고 용감해서 조금씩 영토를 확장했습니다.</p>
                <div class="artifact-item">
                    <strong>더 깊이 생각해보기:</strong> 처음이 약해도 좋은 지도자, 용기, 전략이 있으면 이길 수 있다는 것을 배웁니다. 이것은 우리 역사의 중요한 교훈입니다!
                </div>
            `
        },
        {
            type: 'advanced',
            title: '📚 삼국의 비교: 세 나라는 어떻게 달랐을까?',
            audioHint: '삼국을 여러 각도에서 비교해봅시다.',
            content: `
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <tr style="background: #667eea; color: white;">
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">구분</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">🏹 고구려</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">🌊 백제</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">🏔️ 신라</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>위치</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">북쪽 (만주 포함)</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">남서쪽 (한강 유역)</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">남동쪽</td>
                    </tr>
                    <tr style="background: #f8f9fa;">
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>강점</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">강한 군사력, 넓은 영토</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">문화, 기술, 무역</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">끈기, 용감함, 발전 가능성</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>주요 산업</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">군사, 유목</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">농업, 해상무역</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">농업, 점진적 발전</td>
                    </tr>
                    <tr style="background: #f8f9fa;">
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>문화</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">벽화, 고분 예술</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">건축, 공예</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">금세공, 도자기</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;"><strong>멸망 시기</strong></td>
                        <td style="border: 1px solid #ddd; padding: 10px;">AD 668년</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">AD 660년</td>
                        <td style="border: 1px solid #ddd; padding: 10px;">AD 935년 (한반도 통일 후)</td>
                    </tr>
                </table>
                
                <h3>💡 중요한 깨달음</h3>
                <p>삼국은 서로 다른 위치, 자원, 문화를 가지고 있었습니다. 고구려는 군사력으로, 백제는 문화로, 신라는 용기로 살아남으려 했습니다. 결국 신라가 당나라의 도움을 받아 통일했지만, 삼국 모두 한국 역사의 중요한 부분을 남겼습니다!</p>
            `
        },
        {
            type: 'exam',
            title: '🎯 삼국시대 마스터 테스트',
            audioHint: '삼국시대에 대해 얼마나 알고 있는지 테스트해봅시다!',
            content: `<div class="quiz-container">
                <h4>문제 1: 광개토대왕은 어느 나라의 왕이었을까요?</h4>
                <div class="quiz-content">
                    <p class="question">① 고구려</p>
                    <p class="question">② 백제</p>
                    <p class="question">③ 신라</p>
                    <p class="question">④ 가야</p>
                </div>
                <p style="margin-top: 15px; color: #666;">정답: ① 고구려</p>
            </div>`
        }
    ],
    quizzes: [
        {
            q: '광개토비는 누구의 업적을 기록한 비석일까요?',
            opts: ['고구려의 광개토대왕', '신라의 신문왕', '백제의 근초고왕', '고조선의 단군왕검'],
            a: '고구려의 광개토대왕'
        },
        {
            q: '을지문덕의 살수대첩은 누가 침략해온 적을 물리친 전쟁일까요?',
            opts: ['당나라', '수나라', '거란', '일본'],
            a: '수나라'
        },
        {
            q: '신라가 한반도를 통일한 시기는 언제일까요?',
            opts: ['AD 600년경', 'AD 668년경', 'AD 700년경', 'AD 750년경'],
            a: 'AD 668년경'
        },
        {
            q: '백제의 건축 기술을 보여주는 유물은 무엇일까요?',
            opts: ['광개토비', '미륵사지 석탑', '천마총', '고분벽화'],
            a: '미륵사지 석탑'
        },
        {
            q: '삼국 중에서 가장 마지막에 멸망한 나라는 어디일까요?',
            opts: ['고구려', '백제', '신라', '가야'],
            a: '신라'
        }
    ]
};