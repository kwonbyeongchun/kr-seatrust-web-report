import Slide from '../components/Slide';

const Slide2 = () => {
  return (
    <Slide number={2}>
      <h1>목차</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div>
            <p style={{ marginBottom: '0.5rem' }}><strong>1.</strong> 시스템 아키텍처</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>2.</strong> 프론트엔드 기술 스택</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>3.</strong> 백엔드 기술 스택</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>4.</strong> 주요기능</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>5.</strong> 소프트웨어 상세</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>6.</strong> 소프트웨어 화면</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>7.</strong> 피드백 처리 절차</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>8.</strong> RAG 시스템 구현</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>9.</strong> MSAL 인증 시스템</p>
          </div>
          <div>
            <p style={{ marginBottom: '0.5rem' }}><strong>10.</strong> 배포 / CI/CD</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>11.</strong> 관리자 기능</p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide2;
