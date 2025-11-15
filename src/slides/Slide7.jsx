const Slide7 = () => {
  return (
    <div className="slide">
      <div className="slide-number">Slide 7</div>
      <h1>4. 구현 - 백엔드 API</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>Routes (라우트)</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• /api/users - 사용자 관리</li>
          <li>• /api/software - 소프트웨어 CRUD</li>
          <li>• /api/downloads - 다운로드 승인</li>
          <li>• /api/contact - 문의 양식</li>
          <li>• /api/knowledge - RAG 검색</li>
          <li>• /api/auth/graph - MS Graph 인증</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>Services (서비스)</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• database.service - MSSQL 연결</li>
          <li>• s3.service - MinIO 파일 관리</li>
          <li>• graph.service - MS Graph API</li>
          <li>• mail.service - 메일 발송</li>
          <li>• rag.service - AI 검색</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>Middleware</h3>
        <p style={{ fontSize: '0.85rem' }}>• Helmet, CORS, Compression, Morgan</p>
      </div>
    </div>
  );
};

export default Slide7;
