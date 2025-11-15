const Slide11 = () => {
  return (
    <div className="slide">
      <div className="slide-number">Slide 11</div>
      <h1>7. MSAL 인증 시스템</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>Device Flow 인증</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• Microsoft Graph API 인증</li>
          <li>• 브라우저 기반 사용자 인증</li>
          <li>• Public Client (Client Secret 불필요)</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>4단계 토큰 자동 갱신</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>1. 서버 시작 시 자동 검증 및 갱신</li>
          <li>2. 실시간 갱신 (만료 5분 전)</li>
          <li>3. 스케줄러 갱신 (매일 00:00 KST)</li>
          <li>4. 수동 갱신 API (/api/auth/graph/refresh)</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>토큰 관리</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
          <li>• Access Token: 1시간 유효</li>
          <li>• Refresh Token: 90일 유효</li>
          <li>• MSAL 영구 캐시 (.msal-cache.json)</li>
          <li>• 서버 재시작 시 자동 복구</li>
        </ul>
      </div>
    </div>
  );
};

export default Slide11;
