import Slide from '../components/Slide';

const Slide8 = () => {
  return (
    <Slide number={8}>
      <h1 style={{ textAlign: 'center' }}>4-1. 소프트웨어 상세</h1>
      <div className="equal-height-layout">
        <div className="split-right-with-padding">
          <img src={`${import.meta.env.BASE_URL}software.jpg`} alt="Software" className="split-image" />
        </div>
        <div className="split-right-with-padding">
          <img src={`${import.meta.env.BASE_URL}software2.jpg`} alt="Software Details" className="split-image" />
        </div>
      </div>
    </Slide>
  );
};

export default Slide8;
