import Slide from '../components/Slide';

const Slide5 = () => {
  return (
    <Slide number={5}>
      <h1>3. 기술 스택 - 백엔드</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>코어 프레임워크</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
          <li>• Node.js + Express 5</li>
          <li>• TypeScript (CommonJS 빌드)</li>
          <li>• MVC 패턴 아키텍처</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>데이터 & 스토리지</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
          <li>• MSSQL - 관계형 데이터베이스</li>
          <li>• MinIO - S3 호환 객체 스토리지</li>
          <li>• Qdrant - 벡터 데이터베이스</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>외부 API & 라이브러리</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>• MS Graph API - Office 365 메일</li>
          <li>• OpenAI API - GPT-4, Embeddings</li>
          <li>• node-cron - 작업 스케줄러</li>
          <li>• @azure/identity - MSAL 인증</li>
        </ul>
      </div>
    </Slide>
  );
};


export default Slide5;
