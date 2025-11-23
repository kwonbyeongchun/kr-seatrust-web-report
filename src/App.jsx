import { useState, useEffect } from 'react';
import './App.css';
import SlideNavigation from './components/SlideNavigation';

// Import all slides
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';
import Slide13 from './slides/Slide13';
import Slide16 from './slides/Slide16';

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide16,
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const CurrentSlideComponent = slides[currentSlide];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleNavigation = () => {
    setIsNavVisible((prev) => !prev);
  };

  return (
    <div className="app">
      <div className="slide-container">
        <CurrentSlideComponent />
      </div>

      {/* Navigation Toggle Button */}
      <button
        className="nav-toggle"
        onClick={toggleNavigation}
        title={isNavVisible ? "Hide navigation" : "Show navigation"}
      >
        {isNavVisible ? '▼ Hide Navigation' : '▲ Show Navigation'}
      </button>

      {/* Navigation Controls */}
      {isNavVisible && (
        <>
          <SlideNavigation
            currentSlide={currentSlide}
            totalSlides={slides.length}
            onPrevious={prevSlide}
            onNext={nextSlide}
          />

          {/* Slide Thumbnails */}
          <div className="thumbnails">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`thumbnail ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
