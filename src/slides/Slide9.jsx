import Slide from '../components/Slide';
import InfoBox from '../components/InfoBox';

const Slide9 = () => {
  const questionProcess = [
    '1. 사용자 질문 등록',
    '2. AI는 관리자 Work Area를 검토하여 담당자 지정',
    '3. 사용자 질문 임베딩'
  ];

  const aiAnswerGeneration = [
    '4. 사용자 질문과 유사한 문서 추출 (RAG, 기존 질문 답변)',
    '5. GPT-4o용 프롬프트 생성',
    '6. GPT-4o는 예상 답변 생성'
  ];

  const answerDelivery = [
    '7. 담당자에게 사용자 질문 전송 (예상답변과 함께)',
    '8. 담당자는 답변하여 이메일로 전송',
    '9. 서버는 이메일 받은 편지함을 검색하여 답변 등록'
  ];

  return (
    <Slide number={9}>
      <div className="split-layout">
        <div className="split-left">
          <h1>5. 피드백 처리 절차</h1>

          <div className="vertical-layout">
            <InfoBox title="질문 접수 및 분석" items={questionProcess} />
            <InfoBox title="AI 답변 생성" items={aiAnswerGeneration} />
            <InfoBox title="답변 전송 및 등록" items={answerDelivery} />
          </div>
        </div>
        <div className="split-right-with-padding">
          <img src={`${import.meta.env.BASE_URL}knowledge.jpg`} alt="Knowledge Base" className="split-image" />
        </div>
      </div>
    </Slide>
  );
};


export default Slide9;
