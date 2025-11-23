import Slide from '../components/Slide';
import InfoBox from '../components/InfoBox';

const Slide4 = () => {
  const coreLibrary = [
    'React 19 - 최신 UI 라이브러리',
    'TypeScript - 타입 안전성',
    'Vite - 빠른 빌드 도구',
    'React Router 7 - 클라이언트 라우팅'
  ];

  const stylingUI = [
    'TailwindCSS - 유틸리티 기반 스타일',
    'Design Tokens 시스템',
    <span><strong>Atomic Design</strong> 패턴</span>
  ];

  const others = [
    'i18next - 다국어 지원 (한/영/중)',
    'React Markdown - 마크다운 렌더링'
  ];

  return (
    <Slide number={4}>
      <h1>기술 스택 - 프론트엔드</h1>

      <div className="three-column-layout">
        <InfoBox title="코어 라이브러리" items={coreLibrary} />
        <InfoBox title="스타일링 & UI" items={stylingUI} />
        <InfoBox title="기타" items={others} />
      </div>
    </Slide>
  );
};

export default Slide4;
