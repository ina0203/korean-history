# 제인이의 한국 역사 학습 프로그램

제인이가 한국 역사를 체계적이고 재미있게 배울 수 있는 인터랙티브 학습 플랫폼입니다.

## 주요 기능

- **단계적 학습**: 고대부터 근현대까지 한국 역사를 시대별로 순차적 학습
- **레벨 시스템**: 학습 진행도에 따라 난이도가 자동 상향
- **반복 학습**: 틀린 문제는 자동으로 복습 목록에 추가
- **다양한 문제 유형**: 객관식, 주관식, 연년대 맞추기 등
- **진행도 추적**: 사용자의 학습 진행도와 성취도를 실시간으로 기록

## 프로젝트 구조

```
.
├── src/
│   ├── index.js              # 메인 서버 엔트리
│   ├── db.js                 # 데이터베이스 설정
│   ├── routes/
│   │   ├── history.js        # 역사 콘텐츠 API
│   │   ├── quiz.js           # 퀴즈 API
│   │   └── progress.js       # 진행도 API
│   ├── models/
│   │   ├── HistoryPeriod.js  # 역사 시대 모델
│   │   └── UserProgress.js   # 사용자 진행도 모델
│   └── utils/
│       └── difficulty.js     # 난이도 계산 로직
├── data/
│   └── korean-history.json   # 한국 역사 콘텐츠
└── README.md
```

## 시작하기

1. 의존성 설치:
```bash
npm install
```

2. 서버 실행:
```bash
npm run dev
```

3. 브라우저에서 접속:
```
http://localhost:3000
```

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
