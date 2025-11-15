const Slide12 = () => {
  return (
    <div className="slide">
      <div className="slide-number">Slide 12</div>
      <h1>8. 파일 업로드 시스템 (MinIO)</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>MinIO S3 연동</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• S3 호환 API 사용</li>
          <li>• 버킷: seatrust-dev</li>
          <li>• Public 다운로드 가능 설정</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>파일 업로드 프로세스</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>1. 프론트엔드 - 파일 선택</li>
          <li>2. 백엔드 - FormData 처리</li>
          <li>3. S3 서비스 - MinIO 업로드</li>
          <li>4. URL 생성 및 DB 저장</li>
          <li>5. 프론트엔드 - URL 표시</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>지원 파일 타입</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
          <li>• 소프트웨어: ZIP, EXE, MSI</li>
          <li>• 이미지: PNG, JPG, SVG</li>
          <li>• 문서: PDF, DOCX, TXT, MD</li>
        </ul>
      </div>
    </div>
  );
};

export default Slide12;
