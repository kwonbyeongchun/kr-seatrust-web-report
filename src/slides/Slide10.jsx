import Slide from '../components/Slide';
import InfoBox from '../components/InfoBox';

const Slide10 = () => {
  const documentProcessing = [
    '1. 파일 업로드 (MinIO 저장)',
    '2. 텍스트 추출 및 파싱',
    '3. 청크 분할 (1000자 단위)',
    '4. OpenAI Embedding 생성',
    '5. Qdrant에 벡터 저장'
  ];

  const searchAndAnswer = [
    '1. 사용자 질의 임베딩',
    '2. Qdrant 유사도 검색',
    '3. 관련 문서 컨텍스트 추출',
    '4. GPT-4 프롬프트 생성',
    '5. AI 답변 반환'
  ];

  const feedbackStorage = [
    '1. 사용자 피드백 질문 저장',
    '2. 담당자 답변 저장',
    '3. 질문-답변 쌍 임베딩 생성',
    '4. Vector DB에 저장',
    '5. 향후 유사 질문 검색에 활용'
  ];

  return (
    <Slide number={10}>
      <div className="split-layout">
        <div className="split-left">
          <h1>6. RAG 시스템 구현</h1>

          <div className="vertical-layout">
            <InfoBox title="문서 처리 파이프라인" items={documentProcessing} />
            <InfoBox title="피드백 학습" items={feedbackStorage} />
            <InfoBox title="검색 & 답변 생성" items={searchAndAnswer} />
          </div>
        </div>
        <div className="split-right-with-padding">
          <img src={`${import.meta.env.BASE_URL}rag.jpg`} alt="RAG System" className="split-image" />
        </div>
      </div>
    </Slide>
  );
};


export default Slide10;
