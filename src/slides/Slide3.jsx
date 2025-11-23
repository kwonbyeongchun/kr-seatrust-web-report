import Slide from '../components/Slide';

const Slide3 = () => {
  return (
    <Slide number={3}>
      <h1>2. 시스템 전체 구성도</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>시스템 아키텍처</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
          <li>• Frontend (React 19) ↔ Backend (Express 5)</li>
          <li>• Backend ↔ MSSQL Database</li>
          <li>• Backend ↔ MinIO (S3) - 파일 저장소</li>
          <li>• Backend ↔ Qdrant - 벡터 DB</li>
          <li>• Backend ↔ MS Graph API - Office 365</li>
          <li>• Backend ↔ OpenAI API - RAG 처리</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>배포 환경</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>• Docker Compose 기반 컨테이너화</li>
          <li>• IIS Reverse Proxy (HTTPS)</li>
          <li>• GitHub Actions CI/CD</li>
          <li>• GHCR 컨테이너 레지스트리</li>
        </ul>
      </div>
    </Slide>
  );
};


export default Slide3;
