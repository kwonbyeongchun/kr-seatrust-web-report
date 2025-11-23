import Slide from '../components/Slide';
import InfoBox from '../components/InfoBox';

const Slide5 = () => {
  const coreFramework = [
    'Node.js + Express 5',
    'TypeScript (CommonJS 빌드)',
    'MVC 패턴 아키텍처'
  ];

  const dataStorage = [
    'MSSQL - 관계형 데이터베이스',
    'MinIO - S3 호환 객체 스토리지',
    'Qdrant - 벡터 데이터베이스'
  ];

  const externalAPI = [
    'MS Graph API - Office 365 메일',
    'OpenAI API - GPT-4, Embeddings',
    'node-cron - 작업 스케줄러',
    '@azure/identity - MSAL 인증'
  ];

  return (
    <Slide number={5}>
      <h1>기술 스택 - 백엔드</h1>

      <div className="three-column-layout">
        <InfoBox title="코어 프레임워크" items={coreFramework} />
        <InfoBox title="데이터 & 스토리지" items={dataStorage} />
        <InfoBox title="외부 API & 라이브러리" items={externalAPI} />
      </div>
    </Slide>
  );
};

export default Slide5;
