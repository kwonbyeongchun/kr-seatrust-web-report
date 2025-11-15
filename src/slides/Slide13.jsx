const Slide13 = () => {
  return (
    <div className="slide">
      <div className="slide-number">Slide 13</div>
      <h1>9. 메일 자동화 시스템</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>MS Graph Mail API</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• Office 365 메일 계정 사용</li>
          <li>• Device Flow 인증</li>
          <li>• 토큰 자동 갱신</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>자동 메일 발송</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• 다운로드 승인 알림</li>
          <li>• Contact Form 접수 확인</li>
          <li>• Quote 요청 알림</li>
          <li>• 관리자 알림</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>메일 템플릿</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
          <li>• HTML 포맷 지원</li>
          <li>• 다국어 템플릿 (한/영)</li>
          <li>• 동적 변수 치환</li>
        </ul>
      </div>
    </div>
  );
};

export default Slide13;
