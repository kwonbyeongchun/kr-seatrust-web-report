import Slide from '../components/Slide';

const Slide16 = () => {
  return (
    <Slide number={12}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1>감사합니다</h1>
        <h2 style={{
          color: 'var(--color-brand-primary)',
          marginTop: '2rem'
        }}>
          SeaTrust Software Hub
        </h2>
      </div>
    </Slide>
  );
};

export default Slide16;
