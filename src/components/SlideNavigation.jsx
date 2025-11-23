const SlideNavigation = ({ currentSlide, totalSlides, onPrevious, onNext }) => {
  return (
    <div className="navigation">
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="nav-button"
      >
        ← Previous
      </button>

      <div className="slide-indicator">
        {currentSlide + 1} / {totalSlides}
      </div>

      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="nav-button"
      >
        Next →
      </button>
    </div>
  );
};

export default SlideNavigation;
