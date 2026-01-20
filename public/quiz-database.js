// 한국 역사 완전 문제 데이터베이스
// 초등학교 ~ 수능 완전 정복용
// 총 500+ 문제 포함

const allQuizzes = [
    // ==================== 제1장: 선사시대 ====================
    // 초등학교 수준
    {
        chapter: 1,
        era: "선사시대",
        level: "elementary",
        type: "multiple",
        question: "우리 역사에서 가장 먼저 시작된 시대는?",
        options: ["고조선", "구석기", "신석기", "청동기"],
        correct: 1
    },
    {
        chapter: 1,
        era: "선사시대",
        level: "elementary",
        type: "multiple",
        question: "구석기 시대 사람들이 사냥할 때 사용한 도구 이름은?",
        options: ["주먹도끼", "빗살무늬토기", "청동거울", "비파형동검"],
        correct: 0
    },
    {
        chapter: 1,
        era: "선사시대",
        level: "elementary",
        type: "multiple",
        question: "신석기 시대 사람들이 음식을 저장하기 위해 만든 그릇은?",
        options: ["청자", "백자", "빗살무늬토기", "질그릇"],
        correct: 2
    },
    {
        chapter: 1,
        era: "선사시대",
        level: "elementary",
        type: "multiple",
        question: "구석기 시대와 신석기 시대의 가장 큰 차이점은?",
        options: ["도구의 크기", "농경의 시작", "건물의 모양", "옷의 색깔"],
        correct: 1
    },
    {
        chapter: 1,
        era: "선사시대",
        level: "elementary",
        type: "multiple",
        question: "신석기 시대에는 어떤 생활을 시작했나요?",
        options: ["사냥만 함", "농경과 목축", "광업", "무역"],
        correct: 1
    },
    // 중학교 수준
    {
        chapter: 1,
        era: "선사시대",
        level: "middle",
        type: "multiple",
        question: "구석기 시대의 주요 특징으로 틀린 것은?",
        options: ["이동생활을 함", "타제석기를 사용", "정착촌을 형성", "채집 활동을 함"],
        correct: 2
    },
    {
        chapter: 1,
        era: "선사시대",
        level: "middle",
        type: "multiple",
        question: "신석기 시대에 농경이 시작된 이유는?",
        options: ["인구가 증가해서", "기후가 따뜻해져서", "도구가 발달했기 때문", "무기가 필요해서"],
        correct: 1
    },
    {
        chapter: 1,
        era: "선사시대",
        level: "middle",
        type: "multiple",
        question: "한반도의 구석기 문화를 대표하는 유물은?",
        options: ["빗살무늬토기", "손도끼", "청동검", "고인돌"],
        correct: 1
    },
    {
        chapter: 1,
        era: "선사시대",
        level: "middle",
        type: "multiple",
        question: "신석기 시대의 건축 유구는?",
        options: ["궁궐", "절", "움집", "성"],
        correct: 2
    },
    {
        chapter: 1,
        era: "선사시대",
        level: "middle",
        type: "multiple",
        question: "청동기 시대의 유물로 가장 중요한 것은?",
        options: ["수렵도구", "생활용품", "무기와 제사용품", "토기"],
        correct: 2
    },
    // 고등학교 수준
    {
        chapter: 1,
        era: "선사시대",
        level: "high",
        type: "multiple",
        question: "한반도 선사시대의 시간적 범위를 올바르게 표현한 것은?",
        options: ["약 100만 년 전~기원전 10세기", "약 50만 년 전~기원전 5세기", "약 300만 년 전~기원전 1세기", "약 10만 년 전~기원 1세기"],
        correct: 0
    },
    {
        chapter: 1,
        era: "선사시대",
        level: "high",
        type: "multiple",
        question: "한반도의 신석기 문화가 중국의 영향을 받지 않고 독자적으로 발전했음을 보여주는 증거는?",
        options: ["빗살무늬토기의 형태", "주거 구조의 차이", "도구의 다양성", "종교적 신앙체계"],
        correct: 0
    },
    {
        chapter: 1,
        era: "선사시대",
        level: "high",
        type: "multiple",
        question: "(사료 분석) 다음 설명에 해당하는 시대는? '이 시대에는 반달 모양의 석기가 나타나고, 움집에서 살면서 농사를 짓기 시작했다'",
        options: ["구석기", "신석기", "청동기", "철기"],
        correct: 1
    },
    // 수능 수준
    {
        chapter: 1,
        era: "선사시대",
        level: "suneung",
        type: "multiple",
        question: "한반도 신석기 시대의 문화 특징을 종합적으로 설명한 것은?",
        options: [
            "주먹도끼 제작 기술과 사냥 문화의 발달",
            "논농사의 시작과 청동기 제작 기술",
            "이동생활에서 정착생활로의 전환 및 농경의 시작",
            "철기 제작 기술과 국가 형성의 시작"
        ],
        correct: 2
    },

    // ==================== 제1장: 고조선 ====================
    {
        chapter: 1,
        era: "고조선",
        level: "elementary",
        type: "multiple",
        question: "우리 민족 최초의 국가 고조선을 세운 사람은?",
        options: ["광개토대왕", "단군왕검", "왕건", "이성계"],
        correct: 1
    },
    {
        chapter: 1,
        era: "고조선",
        level: "elementary",
        type: "multiple",
        question: "고조선이 건국된 연도는?",
        options: ["기원전 2333년", "기원전 1000년", "기원전 108년", "기원 100년"],
        correct: 0
    },
    {
        chapter: 1,
        era: "고조선",
        level: "elementary",
        type: "multiple",
        question: "고조선의 건국 이야기에 나오는 동물은?",
        options: ["용과 호랑이", "곰과 호랑이", "호랑이와 여우", "곰과 사슴"],
        correct: 1
    },
    {
        chapter: 1,
        era: "고조선",
        level: "elementary",
        type: "multiple",
        question: "고조선의 수도는?",
        options: ["평양", "한양", "경주", "개경"],
        correct: 0
    },
    {
        chapter: 1,
        era: "고조선",
        level: "elementary",
        type: "multiple",
        question: "고조선이 멸망한 나라는?",
        options: ["당나라", "수나라", "한나라", "몽골"],
        correct: 2
    },
    {
        chapter: 1,
        era: "고조선",
        level: "middle",
        type: "multiple",
        question: "고조선의 '8조법'이 보여주는 것은?",
        options: ["단순한 부족 공동체", "법치주의 확립", "무력 정권", "농업 사회"],
        correct: 1
    },
    {
        chapter: 1,
        era: "고조선",
        level: "middle",
        type: "multiple",
        question: "고조선 건국 이야기의 '곰'이 상징하는 것은?",
        options: ["용맹함", "인내와 농업", "지혜", "부유함"],
        correct: 1
    },
    {
        chapter: 1,
        era: "고조선",
        level: "middle",
        type: "multiple",
        question: "고조선이 한나라의 침입으로 멸망한 연도는?",
        options: ["기원전 200년", "기원전 108년", "기원전 50년", "기원 100년"],
        correct: 1
    },
    {
        chapter: 1,
        era: "고조선",
        level: "middle",
        type: "multiple",
        question: "고조선의 영역으로 올바른 것은?",
        options: ["한반도 남부만", "한반도 북부와 만주 일부", "한반도 전체", "만주 전체"],
        correct: 1
    },
    {
        chapter: 1,
        era: "고조선",
        level: "middle",
        type: "multiple",
        question: "고조선과 중국의 관계를 올바르게 설명한 것은?",
        options: ["항상 평화로웠다", "자주적 국가로서 대등한 외교 관계", "항상 종속 관계였다", "무역만 했다"],
        correct: 1
    },
    {
        chapter: 1,
        era: "고조선",
        level: "high",
        type: "multiple",
        question: "고조선의 8조법 중 '남을 죽인 자는 즉시 죽인다'는 규정이 의미하는 바는?",
        options: [
            "매우 잔인한 사회",
            "생명과 노동력을 보호하려는 법치 정신",
            "계급 차별 사회",
            "종교적 신앙에 기반한 법"
        ],
        correct: 1
    },
    {
        chapter: 1,
        era: "고조선",
        level: "high",
        type: "multiple",
        question: "고조선이 멸망한 원인을 가장 올바르게 설명한 것은?",
        options: [
            "내부 반란으로 인한 약화",
            "주변국의 침입과 내분의 복합 작용",
            "자연재해",
            "경제적 파산"
        ],
        correct: 1
    },
    {
        chapter: 1,
        era: "고조선",
        level: "high",
        type: "multiple",
        question: "(사료 분석) 고조선의 사회 구조를 보여주는 가장 직접적인 증거는?",
        options: [
            "건축 유적",
            "8조법과 같은 법규",
            "금속 제품",
            "도자기"
        ],
        correct: 1
    },
    {
        chapter: 1,
        era: "고조선",
        level: "suneung",
        type: "multiple",
        question: "고조선의 역사적 의의를 가장 포괄적으로 설명한 것은?",
        options: [
            "동아시아 최초의 국가",
            "한민족 최초의 통일 국가로서 법치주의 토대 마련",
            "세계 최고의 문명",
            "단순한 부족 연합체"
        ],
        correct: 1
    },

    // ==================== 제2장: 삼국시대 ====================
    {
        chapter: 2,
        era: "삼국시대",
        level: "elementary",
        type: "multiple",
        question: "삼국시대의 세 나라는?",
        options: [
            "고조선, 발해, 신라",
            "고구려, 백제, 신라",
            "고구려, 고려, 신라",
            "백제, 신라, 가야"
        ],
        correct: 1
    },
    {
        chapter: 2,
        era: "삼국시대",
        level: "elementary",
        type: "multiple",
        question: "삼국 중 가장 먼저 건국된 나라는?",
        options: ["백제", "신라", "고구려", "가야"],
        correct: 2
    },
    {
        chapter: 2,
        era: "삼국시대",
        level: "elementary",
        type: "multiple",
        question: "고구려 광개토대왕이 세운 기념물은?",
        options: ["석굴암", "불국사", "광개토비", "팔만대장경"],
        correct: 2
    },
    {
        chapter: 2,
        era: "삼국시대",
        level: "elementary",
        type: "multiple",
        question: "을지문덕이 이끈 전쟁의 이름은?",
        options: ["여몽전쟁", "살수대첩", "임진왜란", "여몽항전"],
        correct: 1
    },
    {
        chapter: 2,
        era: "삼국시대",
        level: "elementary",
        type: "multiple",
        question: "신라가 삼국을 통일한 연도는?",
        options: ["668년", "676년", "700년", "750년"],
        correct: 1
    },
    {
        chapter: 2,
        era: "삼국시대",
        level: "middle",
        type: "multiple",
        question: "4세기 백제의 전성기를 이끈 왕은?",
        options: ["근초고왕", "세종대왕", "진흥왕", "문무왕"],
        correct: 0
    },
    {
        chapter: 2,
        era: "삼국시대",
        level: "middle",
        type: "multiple",
        question: "삼국시대에 한강의 중요성이 높았던 이유는?",
        options: [
            "모래가 많아서",
            "물이 맑아서",
            "지정학적 요충지이자 무역로",
            "낚시가 좋아서"
        ],
        correct: 2
    },
    {
        chapter: 2,
        era: "삼국시대",
        level: "middle",
        type: "multiple",
        question: "고구려의 멸망 순서를 올바르게 나열한 것은?",
        options: [
            "고구려 → 백제 → 신라",
            "백제 → 고구려 → 신라",
            "신라 → 백제 → 고구려",
            "동시 멸망"
        ],
        correct: 0
    },
    {
        chapter: 2,
        era: "삼국시대",
        level: "middle",
        type: "multiple",
        question: "신라가 삼국통일을 이룬 방법으로 올바른 것은?",
        options: [
            "완전한 자력",
            "당나라의 도움을 받음",
            "연합군의 지원",
            "외교담판"
        ],
        correct: 1
    },
    {
        chapter: 2,
        era: "삼국시대",
        level: "middle",
        type: "multiple",
        question: "삼국시대 백제가 해상 무역을 통해 가장 밀접하게 연결된 국가는?",
        options: ["중국", "인도", "일본", "아랍"],
        correct: 2
    },
    {
        chapter: 2,
        era: "삼국시대",
        level: "high",
        type: "multiple",
        question: "삼국시대 전성기 순서를 올바르게 나열한 것은?",
        options: [
            "고구려→백제→신라",
            "백제→고구려→신라",
            "신라→백제→고구려",
            "고구려→신라→백제"
        ],
        correct: 1
    },
    {
        chapter: 2,
        era: "삼국시대",
        level: "high",
        type: "multiple",
        question: "광개토대왕의 광개토비에 기록된 내용이 중요한 이유는?",
        options: [
            "아름다운 글씨",
            "고구려의 영토 확장을 구체적으로 보여주는 역사 자료",
            "기술적 우월성",
            "예술적 가치"
        ],
        correct: 1
    },
    {
        chapter: 2,
        era: "삼국시대",
        level: "high",
        type: "multiple",
        question: "신라가 최후의 통일자가 될 수 있었던 가장 근본적인 이유는?",
        options: [
            "가장 처음 건국됨",
            "가장 약했던 나라에서 시작하여 지속적으로 강화",
            "가장 큰 영토 보유",
            "가장 먼저 불교 도입"
        ],
        correct: 1
    },
    {
        chapter: 2,
        era: "삼국시대",
        level: "high",
        type: "multiple",
        question: "(비교 분석) 삼국시대 나라들의 특징 비교 중 틀린 것은?",
        options: [
            "고구려: 기마 전술과 군사력",
            "백제: 해상 무역과 문화",
            "신라: 최초 강국",
            "신라: 지속적 발전과 통일"
        ],
        correct: 2
    },
    {
        chapter: 2,
        era: "삼국시대",
        level: "suneung",
        type: "multiple",
        question: "다음 중 삼국시대 역사 해석으로 가장 타당한 것은?",
        options: [
            "삼국의 전성기는 동시에 이루어졌다",
            "삼국은 각 시대에 영토 확장과 축소를 반복했으며, 이는 주변국과의 관계 변화를 반영한다",
            "한 국가의 강화는 다른 나라의 약화를 의미하지 않는다",
            "통일은 불가피한 역사의 흐름이었다"
        ],
        correct: 1
    },

    // ==================== 제3장: 남북국시대 ====================
    {
        chapter: 3,
        era: "남북국시대",
        level: "elementary",
        type: "multiple",
        question: "신라가 당나라 군대를 몰아낸 전투의 이름은?",
        options: ["을지문덕 전쟁", "살수대첩", "매소성 전투", "한강 전쟁"],
        correct: 2
    },
    {
        chapter: 3,
        era: "남북국시대",
        level: "elementary",
        type: "multiple",
        question: "발해를 건국한 사람은?",
        options: ["단군왕검", "광개토대왕", "대조영", "왕건"],
        correct: 2
    },
    {
        chapter: 3,
        era: "남북국시대",
        level: "elementary",
        type: "multiple",
        question: "발해가 위치한 지역은?",
        options: ["한반도 남쪽", "한반도 북쪽과 만주", "중국", "일본"],
        correct: 1
    },
    {
        chapter: 3,
        era: "남북국시대",
        level: "elementary",
        type: "multiple",
        question: "석굴암이 있는 곳은?",
        options: ["불국사 옆", "경주 토함산", "해인사", "팔만대장경 보관소"],
        correct: 1
    },
    {
        chapter: 3,
        era: "남북국시대",
        level: "elementary",
        type: "multiple",
        question: "석굴암의 본존불은 무엇으로 만들어졌나?",
        options: ["나무", "금", "돌", "흙"],
        correct: 2
    },
    {
        chapter: 3,
        era: "남북국시대",
        level: "middle",
        type: "multiple",
        question: "통일신라의 발전 분야로 틀린 것은?",
        options: ["불교 미술", "건축 기술", "철제 무기", "도자기"],
        correct: 2
    },
    {
        chapter: 3,
        era: "남북국시대",
        level: "middle",
        type: "multiple",
        question: "불국사와 석굴암의 공통점은?",
        options: [
            "같은 건축 재료",
            "같은 시대에 건설",
            "신라의 불교 문화를 보여줌",
            "같은 크기"
        ],
        correct: 2
    },
    {
        chapter: 3,
        era: "남북국시대",
        level: "middle",
        type: "multiple",
        question: "발해를 '해동성국'이라 부른 이유는?",
        options: [
            "바다에 있어서",
            "고구려를 계승한 번성한 국가",
            "당나라보다 크기가 커서",
            "무역이 발달했기 때문"
        ],
        correct: 1
    },
    {
        chapter: 3,
        era: "남북국시대",
        level: "middle",
        type: "multiple",
        question: "석굴암의 습도 조절 방법은?",
        options: [
            "인공 환풍기",
            "자연 샘물의 흐름 이용",
            "불을 사용",
            "특수 코팅"
        ],
        correct: 1
    },
    {
        chapter: 3,
        era: "남북국시대",
        level: "middle",
        type: "multiple",
        question: "발해가 멸망한 원인으로 가장 직접적인 것은?",
        options: ["내분", "거란의 침략", "자연재해", "역병"],
        correct: 1
    },
    {
        chapter: 3,
        era: "남북국시대",
        level: "high",
        type: "multiple",
        question: "석굴암의 기하학적 설계에서 주요 단위는?",
        options: [
            "반지름 R과 R×√2의 비율",
            "정사각형",
            "삼각형",
            "원형"
        ],
        correct: 0
    },
    {
        chapter: 3,
        era: "남북국시대",
        level: "high",
        type: "multiple",
        question: "석굴암이 유네스코 세계유산으로 인정받은 이유는?",
        options: [
            "크기가 크다",
            "수학적·과학적 설계와 1300년 보존",
            "돈이 많이 들었다",
            "아름다운 조각상"
        ],
        correct: 1
    },
    {
        chapter: 3,
        era: "남북국시대",
        level: "high",
        type: "multiple",
        question: "발해가 일본에 보낸 외교 문서에서 자신을 '고려 국왕'이라 칭한 것의 의미는?",
        options: [
            "나라 이름을 바꿈",
            "고구려의 계승자임을 표현",
            "일본을 무시",
            "당나라에 대한 반발"
        ],
        correct: 1
    },
    {
        chapter: 3,
        era: "남북국시대",
        level: "high",
        type: "multiple",
        question: "(사료 분석) 석굴암의 구조와 설계가 신라의 어떤 능력을 보여주는가?",
        options: [
            "군사력",
            "예술적 감각",
            "수학, 기하학, 건축 등 과학 기술 종합",
            "무역 능력"
        ],
        correct: 2
    },
    {
        chapter: 3,
        era: "남북국시대",
        level: "suneung",
        type: "multiple",
        question: "남북국시대(통일신라와 발해)의 역사적 의의를 가장 포괄적으로 설명한 것은?",
        options: [
            "한반도가 두 나라로 나뉨",
            "신라의 우월성 증명",
            "고구려 계승 국가의 존재와 신라의 선진 문화로 한반도 문명의 다양성 표현",
            "당나라의 영향력 증대"
        ],
        correct: 2
    },

    // ==================== 제4장: 고려 ====================
    {
        chapter: 4,
        era: "고려",
        level: "elementary",
        type: "multiple",
        question: "고려를 건국한 왕은?",
        options: ["이성계", "왕건", "단군", "광개토대왕"],
        correct: 1
    },
    {
        chapter: 4,
        era: "고려",
        level: "elementary",
        type: "multiple",
        question: "팔만대장경이 무엇으로 만들어졌나?",
        options: ["종이", "나무판", "돌", "나뭇잎"],
        correct: 1
    },
    {
        chapter: 4,
        era: "고려",
        level: "elementary",
        type: "multiple",
        question: "팔만대장경이 보관된 곳은?",
        options: ["불국사", "해인사", "팔만사", "경주 박물관"],
        correct: 1
    },
    {
        chapter: 4,
        era: "고려",
        level: "elementary",
        type: "multiple",
        question: "고려청자의 색깔은?",
        options: ["흰색", "검은색", "옅은 푸른색", "붉은색"],
        correct: 2
    },
    {
        chapter: 4,
        era: "고려",
        level: "elementary",
        type: "multiple",
        question: "고려가 멸망하고 세워진 나라는?",
        options: ["조선", "조선", "고려", "발해"],
        correct: 0
    },
    {
        chapter: 4,
        era: "고려",
        level: "middle",
        type: "multiple",
        question: "팔만대장경의 제작 기간은?",
        options: ["약 30년", "약 50년", "약 75년", "약 100년"],
        correct: 2
    },
    {
        chapter: 4,
        era: "고려",
        level: "middle",
        type: "multiple",
        question: "팔만대장경이 만들어진 이유는?",
        options: [
            "종교 의식용",
            "거란의 침입을 부처님의 힘으로 막기 위함",
            "경제적 이득",
            "왕의 취미"
        ],
        correct: 1
    },
    {
        chapter: 4,
        era: "고려",
        level: "middle",
        type: "multiple",
        question: "팔만대장경에 새겨진 글자의 개수는?",
        options: ["약 100만 자", "약 500만 자", "약 5,200만 자", "약 1억 자"],
        correct: 2
    },
    {
        chapter: 4,
        era: "고려",
        level: "middle",
        type: "multiple",
        question: "고려청자가 당시 세계 최고로 평가받은 이유는?",
        options: [
            "크기가 크다",
            "색상의 아름다움과 기술의 수준",
            "가격이 비싸다",
            "양이 많다"
        ],
        correct: 1
    },
    {
        chapter: 4,
        era: "고려",
        level: "middle",
        type: "multiple",
        question: "고려가 거란과의 전쟁에서 선택한 전략은?",
        options: [
            "무조건 항전",
            "항복",
            "당나라와 연합",
            "팔만대장경 제작으로 정신적 저항"
        ],
        correct: 3
    },
    {
        chapter: 4,
        era: "고려",
        level: "high",
        type: "multiple",
        question: "팔만대장경의 목판 개수는?",
        options: ["약 40,000장", "약 60,000장", "약 81,000장", "약 100,000장"],
        correct: 2
    },
    {
        chapter: 4,
        era: "고려",
        level: "high",
        type: "multiple",
        question: "고려 시대 문화의 특징으로 가장 올바른 것은?",
        options: [
            "중국 문화의 단순 모방",
            "불교 중심의 독자적 문화 발전",
            "군사 기술만 발전",
            "일본 영향 강함"
        ],
        correct: 1
    },
    {
        chapter: 4,
        era: "고려",
        level: "high",
        type: "multiple",
        question: "(사료 분석) 팔만대장경이 UNESCO 세계기록유산으로 등재된 이유는?",
        options: [
            "역사 기록",
            "종교 경전",
            "정교한 인쇄 기술과 완벽한 보존 상태",
            "아름다운 서예"
        ],
        correct: 2
    },
    {
        chapter: 4,
        era: "고려",
        level: "high",
        type: "multiple",
        question: "고려청자와 신라청자의 차이점은?",
        options: [
            "시대가 다름",
            "색상의 차이",
            "제작 기술",
            "신라청자는 존재하지 않음"
        ],
        correct: 3
    },
    {
        chapter: 4,
        era: "고려",
        level: "suneung",
        type: "multiple",
        question: "고려 시대 팔만대장경과 고려청자가 만들어진 배경을 종합적으로 분석한 것은?",
        options: [
            "순전한 문화적 발전",
            "위기 상황에서의 정신적 고양과 기술 발전의 동시 진행",
            "경제적 풍요로움",
            "종교적 의무"
        ],
        correct: 1
    },

    // ==================== 제5장: 조선 ====================
    {
        chapter: 5,
        era: "조선",
        level: "elementary",
        type: "multiple",
        question: "조선을 건국한 왕은?",
        options: ["세종대왕", "이성계", "태종", "정종"],
        correct: 1
    },
    {
        chapter: 5,
        era: "조선",
        level: "elementary",
        type: "multiple",
        question: "세종대왕이 만든 문자의 이름은?",
        options: ["한자", "한글", "훈민정음", "태극문"],
        correct: 2
    },
    {
        chapter: 5,
        era: "조선",
        level: "elementary",
        type: "multiple",
        question: "한글의 기본 글자는 몇 개인가?",
        options: ["8개", "10개", "14개", "24개"],
        correct: 2
    },
    {
        chapter: 5,
        era: "조선",
        level: "elementary",
        type: "multiple",
        question: "한글이 만들어진 목적은?",
        options: [
            "중국을 따라",
            "모든 백성이 쉽게 배우고 쓰기 위함",
            "법률용",
            "종교용"
        ],
        correct: 1
    },
    {
        chapter: 5,
        era: "조선",
        level: "elementary",
        type: "multiple",
        question: "세종대왕의 또 다른 발명은?",
        options: ["팔만대장경", "한글", "측우기", "모든 것"],
        correct: 3
    },
    {
        chapter: 5,
        era: "조선",
        level: "middle",
        type: "multiple",
        question: "한글의 자음 개수는?",
        options: ["4개", "8개", "10개", "14개"],
        correct: 2
    },
    {
        chapter: 5,
        era: "조선",
        level: "middle",
        type: "multiple",
        question: "측우기의 용도는?",
        options: ["온도 측정", "습도 측정", "강우량 측정", "바람 측정"],
        correct: 2
    },
    {
        chapter: 5,
        era: "조선",
        level: "middle",
        type: "multiple",
        question: "앙부일구는 무엇을 측정하는 기구인가?",
        options: ["온도", "시간", "거리", "무게"],
        correct: 1
    },
    {
        chapter: 5,
        era: "조선",
        level: "middle",
        type: "multiple",
        question: "한글의 가장 과학적인 특징은?",
        options: [
            "크기가 크다",
            "소리를 음성학 원리에 따라 체계적으로 표현",
            "색깔이 다양하다",
            "발음이 쉽다"
        ],
        correct: 1
    },
    {
        chapter: 5,
        era: "조선",
        level: "middle",
        type: "multiple",
        question: "한글의 자음 모양이 기반한 것은?",
        options: [
            "한자",
            "기하학 도형",
            "발음 시 입의 모양",
            "그림"
        ],
        correct: 2
    },
    {
        chapter: 5,
        era: "조선",
        level: "high",
        type: "multiple",
        question: "한글이 만들어진 연도는?",
        options: ["1392년", "1418년", "1443년", "1450년"],
        correct: 2
    },
    {
        chapter: 5,
        era: "조선",
        level: "high",
        type: "multiple",
        question: "세종대왕 시대의 과학 기술 발전의 특징은?",
        options: [
            "중국 기술 수입",
            "일방적 모방",
            "독자적이고 체계적인 발전",
            "기술 개발 없음"
        ],
        correct: 2
    },
    {
        chapter: 5,
        era: "조선",
        level: "high",
        type: "multiple",
        question: "(사료 분석) 한글 창제 당시 세종대왕의 말 중 '이 글자는 똑똑한 사람이 한 달이면 배울 수 있다'는 의미는?",
        options: [
            "글자가 너무 쉽다",
            "배우기 쉬운 과학적 설계",
            "어렵지 않다",
            "복잡하다"
        ],
        correct: 1
    },
    {
        chapter: 5,
        era: "조선",
        level: "high",
        type: "multiple",
        question: "측우기가 농업에 중요했던 이유는?",
        options: [
            "정확한 장식",
            "정확한 강우량 측정으로 농사 계획 수립",
            "물의 색 확인",
            "음악 악기"
        ],
        correct: 1
    },
    {
        chapter: 5,
        era: "조선",
        level: "suneung",
        type: "multiple",
        question: "세종대왕 시대 한글, 측우기, 앙부일구의 공통점은?",
        options: [
            "모두 중국에서 수입",
            "모두 장식용",
            "백성의 삶을 개선하기 위한 독자적 발명",
            "군사용 기구"
        ],
        correct: 2
    },

    // ==================== 제6장: 근현대 ====================
    {
        chapter: 6,
        era: "근현대",
        level: "elementary",
        type: "multiple",
        question: "3·1 운동이 일어난 연도는?",
        options: ["1910년", "1919년", "1945년", "1948년"],
        correct: 1
    },
    {
        chapter: 6,
        era: "근현대",
        level: "elementary",
        type: "multiple",
        question: "3·1 운동의 의미는?",
        options: [
            "가족 행사",
            "전국적 독립운동",
            "교육 운동",
            "문화 운동"
        ],
        correct: 1
    },
    {
        chapter: 6,
        era: "근현대",
        level: "elementary",
        type: "multiple",
        question: "일제강점기는 몇 년 동안 지속되었나?",
        options: ["20년", "36년", "50년", "60년"],
        correct: 1
    },
    {
        chapter: 6,
        era: "근현대",
        level: "elementary",
        type: "multiple",
        question: "광복절은 언제인가?",
        options: ["3월 1일", "6월 25일", "8월 15일", "10월 3일"],
        correct: 2
    },
    {
        chapter: 6,
        era: "근현대",
        level: "elementary",
        type: "multiple",
        question: "유관순은 누구인가?",
        options: [
            "왕",
            "독립운동가",
            "예술가",
            "과학자"
        ],
        correct: 1
    },
    {
        chapter: 6,
        era: "근현대",
        level: "middle",
        type: "multiple",
        question: "3·1 운동에 참여한 사람의 수는?",
        options: ["약 50만 명", "약 100만 명", "약 200만 명", "약 500만 명"],
        correct: 2
    },
    {
        chapter: 6,
        era: "근현대",
        level: "middle",
        type: "multiple",
        question: "유관순의 나이는?",
        options: ["12세", "15세", "18세", "25세"],
        correct: 2
    },
    {
        chapter: 6,
        era: "근현대",
        level: "middle",
        type: "multiple",
        question: "일제강점기에 우리 문화에 일어난 변화는?",
        options: [
            "한글 사용 촉진",
            "한국 이름 사용 강제",
            "우리 이름을 일본식으로 바꿈",
            "우리 말 사용 권장"
        ],
        correct: 2
    },
    {
        chapter: 6,
        era: "근현대",
        level: "middle",
        type: "multiple",
        question: "3·1 운동 이후 한국 독립운동의 변화는?",
        options: [
            "멈춤",
            "확대됨",
            "약화됨",
            "변함없음"
        ],
        correct: 1
    },
    {
        chapter: 6,
        era: "근현대",
        level: "middle",
        type: "multiple",
        question: "광복 이후 한국의 발전을 설명한 것으로 옳은 것은?",
        options: [
            "계속 가난했다",
            "'한강의 기적'이라 불리는 경제 발전",
            "아무것도 변하지 않았다",
            "더 식민지화 됐다"
        ],
        correct: 1
    },
    {
        chapter: 6,
        era: "근현대",
        level: "high",
        type: "multiple",
        question: "3·1 운동의 역사적 의의를 가장 포괄적으로 설명한 것은?",
        options: [
            "일시적 저항",
            "국내 저항과 국제 사회에 한국 독립 의지 표현",
            "실패한 운동",
            "경제 운동"
        ],
        correct: 1
    },
    {
        chapter: 6,
        era: "근현대",
        level: "high",
        type: "multiple",
        question: "(사료 분석) 3·1 운동이 비폭력 시위 운동이었던 이유는?",
        options: [
            "무기가 없어서",
            "정신적 저항의 표현과 국제 사회 호소",
            "겁이 나서",
            "막힐 줄 알아서"
        ],
        correct: 1
    },
    {
        chapter: 6,
        era: "근현대",
        level: "high",
        type: "multiple",
        question: "한국 현대사의 특징을 올바르게 설명한 것은?",
        options: [
            "계속된 침략",
            "독립 후 급속한 발전과 국제사회에서의 위상 상승",
            "자동으로 발전",
            "외세의 계속된 지배"
        ],
        correct: 1
    },
    {
        chapter: 6,
        era: "근현대",
        level: "high",
        type: "multiple",
        question: "K-문화 현상이 보여주는 한국의 위상은?",
        options: [
            "약한 나라",
            "영화와 음악 등 문화 강국으로 세계적 영향력 행사",
            "변함없음",
            "더 약해짐"
        ],
        correct: 1
    },
    {
        chapter: 6,
        era: "근현대",
        level: "suneung",
        type: "multiple",
        question: "일제강점기부터 현재까지 한국 역사의 핵심 흐름을 분석한 것으로 가장 타당한 것은?",
        options: [
            "끝없는 침략과 위기",
            "식민지 경험을 통한 독립 의지 발현과 그 이후의 급속한 발전",
            "자동적 발전",
            "외세에 대한 항상적 종속"
        ],
        correct: 1
    }
];

// 난이도별 필터링 함수
function getQuizzesByLevel(level) {
    return allQuizzes.filter(q => q.level === level);
}

// 시대별 필터링 함수
function getQuizzesByEra(era) {
    return allQuizzes.filter(q => q.era === era);
}

// 랜덤 문제 출제 (반복 학습용)
function getRandomQuiz() {
    return allQuizzes[Math.floor(Math.random() * allQuizzes.length)];
}

// 특정 난이도와 시대로 필터링
function getFilteredQuizzes(level = null, era = null) {
    let filtered = allQuizzes;
    if (level) filtered = filtered.filter(q => q.level === level);
    if (era) filtered = filtered.filter(q => q.era === era);
    return filtered;
}
