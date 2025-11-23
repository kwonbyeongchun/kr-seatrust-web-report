import Slide from '../components/Slide';
import InfoBox from '../components/InfoBox';

const Slide3 = () => {
  const systemArchitecture = [
    'Frontend (React 19) ↔ Backend (Express 5)',
    'Backend ↔ MSSQL Database',
    'Backend ↔ MinIO (S3) - 파일 저장소',
    'Backend ↔ Qdrant - 벡터 DB',
    'Backend ↔ MS Graph API - Office 365',
    'Backend ↔ OpenAI API - RAG 처리'
  ];

  const deploymentEnvironment = [
    'Docker Compose 기반 컨테이너화',
    'IIS Reverse Proxy (HTTPS)',
    'GitHub Actions CI/CD',
    'GHCR 컨테이너 레지스트리'
  ];

  const projectManagement = [
    '이슈관리 : 깃허브 Issue',
    '문서관리 : 깃허브 Wiki',
    'CI/CD : 깃허브 Actions',
    '프로젝트 개발 전과정을 GitHub를 이용하여 관리'
  ];

  return (
    <Slide number={3}>
      <h1>프로젝트 구성</h1>

      <div className="three-column-layout">
        <InfoBox title="시스템 아키텍처" items={systemArchitecture} />
        <InfoBox title="배포 환경" items={deploymentEnvironment} />
        <InfoBox title="프로젝트 관리" items={projectManagement} />
      </div>
    </Slide>
  );
};

export default Slide3;
