# 🛡️ 역사 수호대: 타임 리프

제인 수호대장과 함께 한국 역사를 배우는 **인터랙티브 학습 플랫폼**입니다.
각 시대별 배경 이야기를 먼저 읽고, 관련 문제를 풀면서 즐겁게 역사를 학습할 수 있습니다.

## ✨ 핵심 특징

- **시대별 구조화된 학습**: 7개 시대 × 20개 문제 = 총 140개 문제
  - 선사시대 🪨 | 고조선 👑 | 삼국시대 ⚔️ | 남북국시대 🌊 | 고려 🌿 | 조선 📖 | 근현대 🚀

- **3단계 난이도 시스템**: 초등, 중학, 고등
  - 각 시대마다 단계별 문제로 심화 학습 가능

- **배경 학습 → 문제 풀이 → 피드백** 단계식 구조
  - 시대별 상세한 배경 설명
  - 핵심 포인트 정리
  - 즉시 피드백 및 자세한 해설

- **진행도 추적 & 성장 그래프**
  - 시대별 정확도 및 완료 상태
  - 학습 성장 그래프 (Chart.js)
  - LocalStorage를 통한 자동 저장

- **아름다운 UI/UX**
  - 프로페셔널한 그래디언트 디자인
  - 부드러운 애니메이션
  - 모바일 반응형 레이아웃

## 📁 프로젝트 구조

```
제인이공부/
├── public/                   # 프론트엔드 (HTML/CSS/JS)
│   ├── index.html           # 홈페이지 - 시대 선택 UI
│   ├── learn.html           # 시대별 학습 페이지
│   ├── style.css            # 스타일시트
│   └── [기타 레거시 파일들]
│
├── src/                      # 백엔드 (Node.js)
│   ├── index.js             # 서버 엔트리
│   ├── db.js                # SQLite 연결
│   ├── routes/              # API 라우트
│   │   ├── history.js       # 역사 콘텐츠
│   │   ├── quiz.js          # 퀴즈 관리
│   │   └── progress.js      # 사용자 진행도
│   ├── utils/               # 유틸리티
│   │   ├── difficulty.js    # 난이도 계산
│   │   └── gamification.js  # 게임화 로직
│   └── data/
│       └── history-stories.js  # 역사 데이터
│
├── data/
│   ├── korean-history.db    # SQLite 데이터베이스
│   └── korean-history.json  # 백업 JSON 파일
│
├── .github/
│   └── copilot-instructions.md  # 개발 가이드
│
├── package.json
└── README.md
```

## 📚 시대별 콘텐츠

### 1️⃣ **선사시대** (20개 문제)
- 구석기 시대 (주먹도끼, 사냥)
- 신석기 시대 (농경, 빗살무늬토기)
- 청동기 시대 (금속 도구, 사회 계층화)

### 2️⃣ **고조선** (20개 문제)
- 단군왕검의 건국 (기원전 2333년)
- 8조법과 법치주의
- 멸망까지의 역사 (기원전 108년)

### 3️⃣ **삼국시대** (20개 문제)
- 고구려, 백제, 신라의 건국과 성장
- 각 시대의 전성기
- 신라의 삼국통일 (676년)

### 4️⃣ **남북국시대** (20개 문제)
- 신라의 불교 문화 (석굴암, 불국사)
- 팔만대장경 제작
- 발해의 건국과 멸망

### 5️⃣ **고려** (20개 문제)
- 왕건의 건국 (918년)
- 고려청자 (비색)
- 거란(요)과의 전쟁 (서희의 귀주대첩)

### 6️⃣ **조선** (20개 문제)
- 이성계의 건국 (1392년)
- **한글 창제** (세종대왕, 1443년)
- 측우기와 한국 과학 발전
- 신분제와 양반 정치

### 7️⃣ **근현대** (20개 문제)
- 을사조약 (1905년)
- 일제강점기 (1910-1945)
- **3·1 운동** (1919년, 약 200만 명 참여)
- 대한민국 수립 (1948년)

## 🚀 빠른 시작

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/YOUR_USERNAME/제인이공부.git
cd 제인이공부

# 2. 의존성 설치
npm install

# 3. 서버 실행
npm run dev

# 4. 브라우저에서 열기
# http://localhost:3000
```

## 🎮 사용 방법

1. **홈페이지에서 시대 선택**
   - 7개의 시대별 카드 중 하나를 클릭
   - 각 시대별 진행도와 정확도 확인 가능

2. **배경 학습**
   - 해당 시대의 역사적 배경 읽기
   - 핵심 포인트 확인하기
   - 진행도 바에서 현재 위치 파악

3. **문제 풀이**
   - 난이도별 문제 풀이 (초등 → 중학 → 고등)
   - 4개 선택지 중 정답 선택

4. **피드백 확인**
   - 즉시 정답/오답 표시
   - 자세한 설명 읽기
   - 틀린 경우 정답 확인

5. **완료 및 통계**
   - 시대 완료 시 최종 점수 계산
   - 성장 그래프 보기
   - 다음 시대로 이동

## 🔧 기술 스택

**프론트엔드:**
- HTML5, CSS3, Vanilla JavaScript
- Chart.js (그래프 시각화)
- LocalStorage (진행도 저장)

**백엔드:**
- Node.js + Express
- SQLite3
- RESTful API

**디자인:**
- 반응형 레이아웃
- CSS Grid & Flexbox
- 부드러운 애니메이션

## 📊 학습 시스템

### 데이터 구조
```javascript
{
  era: "시대명",                    // 예: "조선"
  level: "난이도",                  // "elementary" | "middle" | "high"
  q: "문제 텍스트",
  opts: ["선택지1", "선택지2", "선택지3", "선택지4"],
  ans: 0,                           // 정답 인덱스
  exp: "상세한 해설"
}
```

### LocalStorage 저장 형식
```javascript
// 시대별 진행도
janeProgress: {
  sonsahui: { correct: 15, total: 20, completed: false },
  gojoseon: { correct: 18, total: 20, completed: true },
  // ...
}

// 시대별 상세 데이터
janeProgress-sonsahui: {
  correct: 15,
  total: 20,
  history: [100, 0, 100, 100, ...] // 각 문제별 점수
}
```

## 🎓 학습 효과

- **단계적 학습**: 배경 이해 → 문제 풀이로 효과적인 학습
- **즉시 피드백**: 오답 시 왜 틀렸는지 즉시 확인
- **시각적 추적**: 성장 그래프로 동기 부여
- **자동 저장**: 중단했던 부분에서 계속 학습

## 📱 지원 기기

- ✅ 데스크톱 (Windows, Mac, Linux)
- ✅ 태블릿 (iPad, Android)
- ✅ 모바일 (iPhone, Android)

## 🔄 업데이트 내역

### v2.0 (2026-01-20) - 완전 리뉴얼
- 🎨 프로페셔널한 UI/UX 디자인
- 📖 시대별 배경 학습 시스템 추가
- 📊 성장 그래프 (Chart.js) 통합
- 🎯 3단계 난이도 체계 완성
- 📱 모바일 반응형 레이아웃

### v1.0 (초기 버전)
- 기본 퀴즈 시스템
- 레벨별 문제 풀이

## 👨‍💻 개발자

**GitHub Copilot** - AI 개발 어시스턴트

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의 및 건의

- 버그 리포트: GitHub Issues
- 기능 제안: GitHub Discussions

---

**Made with ❤️ for Jane's Korean History Learning**

## 학습 레벨 시스템

- **Level 1-3**: 기초 개념 및 주요 사건
- **Level 4-6**: 심화 내용 및 인물 관계
- **Level 7-10**: 역사적 배경 및 인과관계 분석

사용자가 각 레벨에서 70% 이상 정답하면 다음 레벨로 자동 상향됩니다.

## 기술 스택

- **Backend**: Node.js + Express
- **Database**: SQLite3
- **Frontend**: HTML5, CSS3, Vanilla JavaScript

## 개발 가이드

자세한 개발 가이드는 `.github/copilot-instructions.md`를 참고하세요.
