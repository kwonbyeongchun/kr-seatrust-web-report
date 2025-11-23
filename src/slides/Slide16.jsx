import Slide from '../components/Slide';

const Slide16 = () => {
  return (
    <Slide number={16}>
      <h1>12. CI/CD 파이프라인</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>GitHub Actions 워크플로우</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• 자동 빌드 및 테스트</li>
          <li>• Docker 이미지 빌드</li>
          <li>• GHCR 푸시 자동화</li>
          <li>• 배포 트리거</li>
        </ul>

        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>품질 게이트</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• ESLint 정적 분석</li>
          <li>• TypeScript 타입 체크</li>
          <li>• 단위 테스트 실행</li>
          <li>• 빌드 검증</li>
        </ul>

        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>배포 전략</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
          <li>• 자동 배포: main 브랜치 머지 시</li>
          <li>• 롤백 지원</li>
          <li>• 무중단 배포</li>
        </ul>
      </div>
    </Slide>
  );
};


export default Slide16;
