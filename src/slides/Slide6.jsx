import Slide from '../components/Slide';
import InfoBox from '../components/InfoBox';

const Slide6 = () => {
  const mainFeatures = [
    '소프트웨어 상세설명 (영어, 중국어, 한국어)',
    'Markdown 편집기 (이미지, 동영상 지원)',
    'Feedback Center (고객과 원활한 소통)',
    'FAQ, Release Note 포함',
    '소프트웨어 다운로드 및 실행',
    '견적요청 기능',
    '문의하기'
  ];

  const userManagement = [
    '관리자 지정',
    '관리자 Work_Area 지정',
    '사용자별 소프트웨어 사용권한 지정'
  ];

  const knowledgeBase = [
    '문서 업로드 → 파싱 → 임베딩 → 저장',
    '사용자 질의 → 임베딩 → 유사도 검색',
    'Qdrant - 벡터 데이터베이스',
    'OpenAI GPT-4 - 답변 생성',
    'PDF, DOCX, TXT, Markdown 지원',
    '코사인 유사도 기반 벡터 검색'
  ];

  return (
    <Slide number={6}>
      <h1>주요기능</h1>

      <div className="three-column-layout">
        <InfoBox title="주요 기능" items={mainFeatures} />
        <InfoBox title="회원관리" items={userManagement} />
        <InfoBox title="지식 기반 관리" items={knowledgeBase} />
      </div>
    </Slide>
  );
};

export default Slide6;
