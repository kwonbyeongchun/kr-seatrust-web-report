import Slide from '../components/Slide';

const Slide2 = () => {
  return (
    <Slide number={2}>
      <h1>목차</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%', fontSize: '0.85rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div>
            <p style={{ marginBottom: '0.5rem' }}><strong>1.</strong> 시스템 아키텍처</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>2.</strong> 프론트엔드 기술 스택</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>3.</strong> 백엔드 기술 스택</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>4.</strong> 프론트엔드 구현</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>5.</strong> 백엔드 API 구현</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>6.</strong> 데이터베이스 설계</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>7.</strong> RAG 시스템 아키텍처</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>8.</strong> RAG 시스템 구현</p>
          </div>
          <div>
            <p style={{ marginBottom: '0.5rem' }}><strong>9.</strong> MSAL 인증 시스템</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>10.</strong> 파일 업로드 시스템</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>11.</strong> 메일 자동화 시스템</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>12.</strong> 스케줄러 시스템</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>13.</strong> Docker & 배포 구성</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>14.</strong> CI/CD 파이프라인</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>15.</strong> 관리자 기능</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>16.</strong> 테스트 & 품질 보증</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>17.</strong> 성과 및 결과</p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide2;
