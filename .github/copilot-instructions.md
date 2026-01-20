# 제인이의 한국 역사 학습 프로그램 - AI 개발 가이드

## 프로젝트 개요

제인이를 위한 인터랙티브 한국 역사 학습 플랫폼입니다. 사용자의 학습 수준에 맞춰 난이도가 조정되고, 틀린 문제는 자동으로 복습 목록에 추가되며, 레벨 시스템으로 학습 진행도를 추적합니다.

## 핵심 아키텍처

### 1. 백엔드 구조 (Node.js + Express)
- **DB**: SQLite3 (`data/korean-history.db`)
  - `history_periods`: 한국 역사의 시대별 정보 (고대, 고려, 조선 등)
  - `quizzes`: 난이도별 문제 저장소 (Level 1-10)
  - `user_progress`: 사용자 학습 진행도 추적
  - `review_queue`: 틀린 문제 복습 목록

### 2. 학습 플로우
```
사용자 시작 (Level 1)
    ↓
레벨에 맞는 퀴즈 출제 (src/routes/quiz.js)
    ↓
답변 제출 → 정답 확인 (submit API)
    ↓
틀림? → review_queue에 추가
    ↓
진행도 업데이트 (calculateNextLevel 호출)
    ↓
정확도 70%↑? → Level 상향
```

### 3. 레벨 시스템 (`src/utils/difficulty.js`)
```javascript
// calculateNextLevel() 로직:
- 정확도 90% 이상: 빠른 상향
- 정확도 70-90%: 단계적 상향  
- 정확도 60% 미만: 같은 레벨 유지
- 최대 Level 10 (제한)
```

## 핵심 라우트와 워크플로우

### 학습 관련
- `GET /api/history/periods` - 모든 역사 시대 목록
- `GET /api/history/periods/:id` - 특정 시대의 상세정보+사건
- `GET /api/quiz/by-level/:userId/:level` - 사용자 레벨에 맞는 퀴즈 5개
- `POST /api/quiz/submit` - 답변 검증 및 진행도 업데이트

### 복습 관련  
- `GET /api/quiz/review/:userId` - 복습 대기 중인 문제들
- 복습 문제는 시도 횟수가 많을수록 우선순위 높음

### 진행도 추적
- `GET /api/progress/:userId` - 현재 레벨, 정확도, 시도 횟수
- `PUT /api/progress/:userId` - 레벨 수동 업데이트
- `GET /api/progress/stats/:userId` - 통계 (정확도%, 복습 대기 개수 등)

## 프로젝트 규칙 & 패턴

### 데이터 흐름
1. **퀴즈 선택**: `selectQuestionsByDifficulty()` - 현재 레벨 ±2 범위 문제만 출제
2. **정답 검증**: 대소문자 무시 (`toLowerCase()` 비교)
3. **복습 추가**: 오답 시 `review_queue`에 자동 추가, `attempts` 증가
4. **레벨 계산**: 누적 정확도 기반 (즉각적 상향이 아닌 누적 기반)

### API 응답 형식
```javascript
// 퀴즈 제출 응답
{
  "isCorrect": boolean,
  "correctAnswer": string,
  "explanation": string,
  "nextLevel": number
}

// 진행도 응답
{
  "user_id": string,
  "current_level": number,
  "accuracy": number (percent),
  "total_correct": number,
  "total_attempted": number
}
```

### 에러 처리
- 모든 라우트는 500 에러로 `{ error: message }` 반환
- DB 미초기화 시 명확한 에러 메시지 제공

## 개발 워크플로우

### 로컬 실행
```bash
npm install
npm run dev  # nodemon으로 자동 재시작
```

### DB 초기화
- 서버 시작 시 자동으로 테이블 생성
- `src/db.js` 의 `initialize()` 함수 호출
- 테스트용 샘플 데이터는 `src/routes/history.js`의 POST 엔드포인트로 추가

### 테스트 명령어
```bash
npm test  # Jest 테스트 실행
```

## 주요 파일 참조

| 파일 | 목적 |
|------|------|
| [src/index.js](src/index.js) | 서버 진입점, 라우트 등록 |
| [src/db.js](src/db.js) | SQLite 연결 및 쿼리 유틸 |
| [src/routes/quiz.js](src/routes/quiz.js) | 퀴즈 제출, 복습 로직 |
| [src/utils/difficulty.js](src/utils/difficulty.js) | 레벨 계산 알고리즘 |
| [data/korean-history.json](data/korean-history.json) | 샘플 역사 데이터 |

## 확장 시 고려사항

### 새로운 퀴즈 타입 추가
- `quizzes.question_type` 컬럼 활용: `multiple_choice`, `short_answer`, `date_matching` 등
- 각 타입별 검증 로직을 `src/routes/quiz.js`에 추가

### 분석 기능 추가
- `user_progress` 테이블의 `last_studied_period` 활용하여 시간대별 학습 추이 분석
- 연간 학습 시간, 주간 학습 현황 등 추가 가능

### 멀티 유저 지원
- 현재 `user_id` 기반 설계로 이미 지원 가능
- 인증 미들웨어 추가하여 보안 강화 필요

## 예상 확장 경로

1. **프론트엔드**: Vue/React로 웹 UI 개발 (현재 Vanilla JS 기본 구조)
2. **모바일**: React Native로 iOS/Android 앱
3. **AI 학습**: 틀린 패턴 분석으로 맞춤형 문제 생성
4. **음성 기능**: TTS로 사건 설명 음성화, STT로 음성 입력 지원
