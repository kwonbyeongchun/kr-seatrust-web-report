import Slide from '../components/Slide';

const Slide20 = () => {
  return (
    <Slide number={20}>
      <h1>감사합니다</h1>
      <div style={{ marginTop: '3rem', textAlign: 'center', width: '100%' }}>
        <h2 style={{
          color: 'var(--color-brand-primary)',
          marginBottom: '2rem',
          fontSize: '2rem'
        }}>
          SeaTrust Software Hub
        </h2>

        <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
          <p style={{ marginBottom: '1rem' }}>해양 소프트웨어 통합 관리 시스템</p>
          <p style={{ marginBottom: '2rem' }}>프로젝트 완료 보고서</p>

          <div style={{ marginTop: '3rem', fontSize: '0.9rem', opacity: 0.7 }}>
            <p>질문이 있으시면 언제든지 문의해 주세요</p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide20;
