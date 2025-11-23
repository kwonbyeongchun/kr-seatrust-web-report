import Slide from '../components/Slide';

const Slide6 = () => {
  return (
    <Slide number={6}>
      <h1>4. 구현 - 프론트엔드 (Atomic Design)</h1>
      <div style={{ marginTop: '1.5rem', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>Atoms (기본 요소)</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• Button, Input, Label, Badge, Avatar</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>Molecules (조합 컴포넌트)</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• Card, FormField, Toast, HardwareRequirementCard</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>Pages (라우트)</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
          <li>• Home - 소프트웨어 카탈로그</li>
          <li>• SoftwareDetail - 상세 정보 & 다운로드</li>
          <li>• Admin - 관리자 대시보드</li>
          <li>• KnowledgeBase - AI 검색</li>
        </ul>
        
        <h3 style={{ color: 'var(--color-brand-primary)', marginBottom: '0.75rem' }}>Design Tokens</h3>
        <p style={{ fontSize: '0.85rem' }}>• 일관된 색상, 폰트, 간격 시스템</p>
        <p style={{ fontSize: '0.85rem' }}>• TailwindCSS 커스텀 테마</p>
      </div>
    </Slide>
  );
};


export default Slide6;
