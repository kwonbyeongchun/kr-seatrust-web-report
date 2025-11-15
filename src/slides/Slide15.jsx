const Slide15 = () => {
  return (
    <div className="slide">
      <div className="slide-number">Slide 15</div>
      <h1>11. Docker & 배포 구성</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>Docker Compose 서비스</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• MinIO: S3 호환 객체 스토리지</li>
          <li>• Qdrant: 벡터 데이터베이스</li>
          <li>• Frontend: React 프로덕션 빌드</li>
          <li>• Backend: Node.js API 서버</li>
        </ul>

        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>컨테이너 오케스트레이션</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• 서비스 간 네트워크 격리</li>
          <li>• 볼륨 마운트로 데이터 영속성</li>
          <li>• 헬스체크 자동화</li>
          <li>• 환경 변수 관리</li>
        </ul>

        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>배포 환경</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
          <li>• 개발: Docker Compose</li>
          <li>• 프로덕션: GHCR + 자동 배포</li>
          <li>• 모니터링: 로그 집계</li>
        </ul>
      </div>
    </div>
  );
};

export default Slide15;
