import Slide from '../components/Slide';

const Slide14 = () => {
  return (
    <Slide number={14}>
      <h1>10. 스케줄러 시스템</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>node-cron 기반</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• 크론 표현식으로 작업 스케줄링</li>
          <li>• 서버 시작 시 자동 등록</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>주요 스케줄 작업</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• 토큰 갱신: 매일 00:00 KST</li>
          <li>• 메일 체크: 1분 간격</li>
          <li>• 만료 다운로드 정리: 매일 03:00</li>
          <li>• 시스템 헬스 체크: 5분 간격</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>에러 처리</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
          <li>• Try-Catch 블록으로 안전성 확보</li>
          <li>• 에러 로그 기록</li>
          <li>• 실패 시 다음 스케줄 계속 실행</li>
        </ul>
      </div>
    </Slide>
  );
};


export default Slide14;
