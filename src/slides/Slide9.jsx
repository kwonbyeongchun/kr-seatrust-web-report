import Slide from '../components/Slide';

const Slide9 = () => {
  return (
    <Slide number={9}>
      <h1>6. RAG 시스템 - 아키텍처</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>시스템 구성</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• 문서 업로드 → 파싱 → 임베딩 → 저장</li>
          <li>• 사용자 질의 → 임베딩 → 유사도 검색 → AI 답변</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>기술 스택</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• Qdrant - 벡터 데이터베이스</li>
          <li>• OpenAI Embeddings - text-embedding-3-small</li>
          <li>• OpenAI GPT-4 - 답변 생성</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>지원 포맷</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
          <li>• PDF, DOCX, TXT, Markdown</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>검색 방식</h3>
        <p style={{ fontSize: '0.85rem' }}>• 코사인 유사도 기반 벡터 검색</p>
        <p style={{ fontSize: '0.85rem' }}>• Top-K 결과 반환 (K=3~5)</p>
      </div>
    </Slide>
  );
};


export default Slide9;
