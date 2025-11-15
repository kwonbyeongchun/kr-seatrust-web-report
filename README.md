# SeaTrust MSAL 프로젝트 완료 보고서 슬라이드

Vite + React로 제작된 프레젠테이션 슬라이드 애플리케이션입니다.

## 시작하기

### 개발 모드 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 열기

### 빌드
```bash
npm run build
```

### 미리보기
```bash
npm run preview
```

## 슬라이드 조작법

### 키보드 단축키
- **→ (오른쪽 화살표)** 또는 **Space**: 다음 슬라이드
- **← (왼쪽 화살표)**: 이전 슬라이드

### 마우스 조작
- **Previous/Next 버튼**: 슬라이드 이동
- **하단 썸네일**: 특정 슬라이드로 즉시 이동

## 슬라이드 구조

총 12개의 슬라이드로 구성:

1. **Slide 1**: Title Slide
2. **Slide 2**: 프로젝트 개요
3. **Slide 3**: 완료된 주요 기능
4. **Slide 4**: 기술적 구현 - 백엔드
5. **Slide 5**: 기술적 구현 - 프론트엔드
6. **Slide 6**: 문제 해결 내역
7. **Slide 7**: 시스템 아키텍처
8. **Slide 8**: 보안 및 배포
9. **Slide 9**: 테스트 결과
10. **Slide 10**: 성과 및 향후 계획
11. **Slide 11**: 배운 교훈
12. **Slide 12**: Thank You

## 슬라이드 추가 방법

1. `src/slides/` 디렉토리에 새 슬라이드 컴포넌트 생성:
```jsx
// src/slides/Slide13.jsx
const Slide13 = () => {
  return (
    <div className="slide">
      <div className="slide-number">Slide 13</div>
      <h1>새 슬라이드</h1>
    </div>
  );
};

export default Slide13;
```

2. `src/App.jsx`에 import 및 배열 추가:
```jsx
import Slide13 from './slides/Slide13';

const slides = [
  // ... 기존 슬라이드들
  Slide13,
];
```

## 기술 스택

- **React 19**: UI 라이브러리
- **Vite**: 빌드 도구
- **CSS3**: 스타일링 (그라디언트, 애니메이션)

## 특징

- ✨ 현대적인 그라디언트 디자인
- 🎯 키보드 및 마우스 네비게이션
- 📱 반응형 디자인
- 🎨 슬라이드 번호 표시
- 🔍 하단 썸네일 네비게이션
- ⚡ 빠른 페이지 전환

## 라이선스

MIT
