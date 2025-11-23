import Slide from '../components/Slide';
import InfoBox from '../components/InfoBox';

const Slide7 = () => {
  const softwareManagement = [
    '소프트웨어 정보 등록',
    '버전 관리',
    '다국어 지원 (한/영/중)',
    '카테고리 분류',
    '상태 관리'
  ];

  const feedbackAndFAQ = [
    '피드백 등록 및 관리',
    'FAQ 등록 및 관리',
    '사용자 질문 답변',
    '피드백 분류 및 추적'
  ];

  const releaseAndEditor = [
    '릴리즈 노트 관리',
    <span key="markdown"><strong>Markdown 편집기</strong></span>,
    '이미지 업로드 및 삽입',
    '동영상 임베딩',
    '실시간 미리보기'
  ];

  return (
    <Slide number={7}>
      <div className="split-layout">
        <div className="split-left">
          <h1 style={{ textAlign: 'center' }}>4. 소프트웨어 상세</h1>

          <div className="vertical-layout">
            <InfoBox title="소프트웨어 관리" items={softwareManagement} />
            <InfoBox title="피드백 & FAQ" items={feedbackAndFAQ} />
            <InfoBox title="릴리즈 노트 & 편집기" items={releaseAndEditor} />
          </div>
        </div>
        <div className="split-right-with-padding">
          <img src={`${import.meta.env.BASE_URL}software1.jpg`} alt="Software Details" className="split-image" />
        </div>
      </div>
    </Slide>
  );
};

export default Slide7;
