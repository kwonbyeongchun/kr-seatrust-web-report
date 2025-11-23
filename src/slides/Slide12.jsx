import Slide from '../components/Slide';
import InfoBox from '../components/InfoBox';

const Slide15 = () => {
  const containerOrchestration = [
    '서비스 간 네트워크 격리',
    '볼륨 마운트로 데이터 영속성',
    '헬스체크 자동화',
    '환경 변수 관리',
    'MinIO & Qdrant 통합'
  ];

  const cicdPipeline = [
    '자동 빌드 및 테스트',
    'Docker 이미지 빌드',
    'GHCR 푸시 자동화',
    'ESLint & TypeScript 체크',
    '무중단 배포 & 롤백 지원'
  ];

  return (
    <Slide number={12}>
      <h1>10. 배포 / CI/CD</h1>

      <div className="three-column-layout">
        <InfoBox title="컨테이너 오케스트레이션" items={containerOrchestration} />
        <InfoBox title="CI/CD 파이프라인" items={cicdPipeline} />
      </div>
    </Slide>
  );
};


export default Slide15;
