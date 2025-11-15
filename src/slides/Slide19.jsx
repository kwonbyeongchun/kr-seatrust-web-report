const Slide19 = () => {
  return (
    <div className="slide">
      <div className="slide-number">Slide 19</div>
      <h1>15. 성과 및 결과</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>기술적 성과</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>✅ 최신 React 19 & Express 5 적용</li>
          <li>✅ AI RAG 시스템 성공적 구현</li>
          <li>✅ MSAL 4단계 토큰 자동 갱신</li>
          <li>✅ Docker 기반 배포 자동화</li>
        </ul>

        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>사용자 경험</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• 다국어 지원 (한/영)</li>
          <li>• 반응형 디자인</li>
          <li>• 직관적인 관리자 페이지</li>
          <li>• 빠른 AI 챗봇 응답</li>
        </ul>

        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>시스템 안정성</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
          <li>• 자동 에러 복구</li>
          <li>• 스케줄러 안정성 확보</li>
          <li>• 메일 발송 자동화</li>
        </ul>
      </div>
    </div>
  );
};

export default Slide19;
