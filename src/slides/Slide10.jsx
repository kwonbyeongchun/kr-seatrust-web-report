const Slide10 = () => {
  return (
    <div className="slide">
      <div className="slide-number">Slide 10</div>
      <h1>6. RAG 시스템 - 구현 세부사항</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>문서 처리 파이프라인</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>1. 파일 업로드 (MinIO 저장)</li>
          <li>2. 텍스트 추출 및 파싱</li>
          <li>3. 청크 분할 (1000자 단위)</li>
          <li>4. OpenAI Embedding 생성</li>
          <li>5. Qdrant에 벡터 저장</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>검색 & 답변 생성</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>1. 사용자 질의 임베딩</li>
          <li>2. Qdrant 유사도 검색</li>
          <li>3. 관련 문서 컨텍스트 추출</li>
          <li>4. GPT-4 프롬프트 생성</li>
          <li>5. AI 답변 반환</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>관리 기능</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
          <li>• 문서 업로드/삭제</li>
          <li>• 벡터 인덱스 관리</li>
        </ul>
      </div>
    </div>
  );
};

export default Slide10;
