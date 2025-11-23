const Slide = ({ number, children, className = '' }) => {
  return (
    <div className={`slide ${className}`}>
      <div className="slide-number">Slide {number}</div>
      {children}
    </div>
  );
};

export default Slide;
