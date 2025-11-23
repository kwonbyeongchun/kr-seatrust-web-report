import Slide from '../components/Slide';
import InfoBox from '../components/InfoBox';

const Slide13 = () => {
  const productManagement = [
    '제품 등록/수정/삭제',
    '이미지/파일 업로드',
    '버전 관리',
    '다운로드 통계'
  ];

  const downloadApproval = [
    '다운로드 요청 목록',
    '승인/거부 처리',
    '자동 메일 발송',
    '사용자 정보 조회'
  ];

  const ragDocumentManagement = [
    '문서 업로드/삭제',
    '벡터 인덱스 관리',
    'AI 응답 테스트'
  ];

  return (
    <Slide number={11}>
      <div className="split-layout">
        <div className="split-left">
          <h1>11. 관리자 기능</h1>

          <div className="vertical-layout">
            <InfoBox title="제품 관리" items={productManagement} />
            <InfoBox title="다운로드 승인 관리" items={downloadApproval} />
            <InfoBox title="RAG 문서 관리" items={ragDocumentManagement} />
          </div>
        </div>
        <div className="split-right-with-padding">
          <img src={`${import.meta.env.BASE_URL}manager.jpg`} alt="Manager Interface" className="split-image" />
        </div>
      </div>
    </Slide>
  );
};

export default Slide13;
