const Slide8 = () => {
  return (
    <div className="slide">
      <div className="slide-number">Slide 8</div>
      <h1>5. 데이터베이스 설계</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>주요 테이블</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• users - 사용자 정보 및 권한</li>
          <li>• software - 소프트웨어 메타데이터</li>
          <li>• download_requests - 다운로드 승인 요청</li>
          <li>• knowledge_documents - RAG 문서 정보</li>
          <li>• contact_submissions - 문의 내역</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>관계 설계</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• users ↔ download_requests (1:N)</li>
          <li>• software ↔ download_requests (1:N)</li>
          <li>• Foreign Key 제약조건</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>인덱싱 전략</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
          <li>• Primary Key 자동 인덱스</li>
          <li>• email, status 필드 인덱스</li>
        </ul>
      </div>
    </div>
  );
};

export default Slide8;
