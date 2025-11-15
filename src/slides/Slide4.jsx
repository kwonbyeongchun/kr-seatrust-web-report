const Slide4 = () => {
  return (
    <div className="slide">
      <div className="slide-number">Slide 4</div>
      <h1>3. 기술 스택 - 프론트엔드</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>코어 라이브러리</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
          <li>• React 19 - 최신 UI 라이브러리</li>
          <li>• TypeScript - 타입 안전성</li>
          <li>• Vite - 빠른 빌드 도구</li>
          <li>• React Router 7 - 클라이언트 라우팅</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>스타일링 & UI</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
          <li>• TailwindCSS - 유틸리티 기반 스타일</li>
          <li>• Design Tokens 시스템</li>
          <li>• Atomic Design 패턴</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>기타</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>• i18next - 다국어 지원 (한/영)</li>
          <li>• React Markdown - 마크다운 렌더링</li>
        </ul>
      </div>
    </div>
  );
};

export default Slide4;
