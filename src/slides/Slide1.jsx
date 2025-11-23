import Slide from '../components/Slide';

const Slide1 = () => {
  return (
    <Slide number={1}>
      <div className="split-layout">
        <div className="split-left">
          <h1>SeaTrust Software Hub</h1>
          <h2>프로젝트 완료 보고서</h2>
        </div>
        <div className="split-right">
          <img src={`${import.meta.env.BASE_URL}main.jpg`} alt="SeaTrust Main" className="split-image" />
        </div>
      </div>
    </Slide>
  );
};

export default Slide1;
