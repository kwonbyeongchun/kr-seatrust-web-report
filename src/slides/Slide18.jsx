const Slide18 = () => {
  return (
    <div className="slide">
      <div className="slide-number">Slide 18</div>
      <h1>14. 테스트 & 품질 보증</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>테스트 전략</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• 단위 테스트: 핵심 로직</li>
          <li>• 통합 테스트: API 엔드포인트</li>
          <li>• E2E 테스트: 주요 사용자 플로우</li>
          <li>• 성능 테스트: 응답 시간 검증</li>
        </ul>

        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>코드 품질</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• ESLint: 코드 스타일 통일</li>
          <li>• TypeScript: 타입 안정성</li>
          <li>• Prettier: 자동 포맷팅</li>
          <li>• Husky: Pre-commit 훅</li>
        </ul>

        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>보안 검증</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
          <li>• 의존성 취약점 스캔</li>
          <li>• SQL Injection 방지 확인</li>
          <li>• XSS 방어 검증</li>
        </ul>
      </div>
    </div>
  );
};

export default Slide18;
