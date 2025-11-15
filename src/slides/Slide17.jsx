const Slide17 = () => {
  return (
    <div className="slide">
      <div className="slide-number">Slide 17</div>
      <h1>13. 관리자 기능</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>제품 관리</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• 제품 등록/수정/삭제</li>
          <li>• 이미지/파일 업로드</li>
          <li>• 버전 관리</li>
          <li>• 다운로드 통계</li>
        </ul>

        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>다운로드 승인 관리</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• 다운로드 요청 목록</li>
          <li>• 승인/거부 처리</li>
          <li>• 자동 메일 발송</li>
          <li>• 사용자 정보 조회</li>
        </ul>

        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>RAG 문서 관리</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
          <li>• 문서 업로드/삭제</li>
          <li>• 벡터 인덱스 관리</li>
          <li>• 검색 테스트</li>
        </ul>
      </div>
    </div>
  );
};

export default Slide17;
