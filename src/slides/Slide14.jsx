import { useEffect, useRef } from 'react';
import Slide from '../components/Slide';

const Slide14 = () => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // 컴포넌트 마운트 시 비디오와 오디오 동시 재생
    const playMedia = async () => {
      try {
        // 비디오와 오디오를 동시에 재생
        await Promise.all([
          videoRef.current?.play(),
          audioRef.current?.play()
        ]);
      } catch (error) {
        console.log('자동 재생 실패:', error);
        // 브라우저 정책으로 자동재생이 차단될 수 있습니다
      }
    };

    playMedia();

    // 클린업: 컴포넌트 언마운트 시 미디어 정지
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <Slide number={14}>
      <div className="overview-container" style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0
      }}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          loop
          controls
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        >
          <source src={`${import.meta.env.BASE_URL}video.mp4`} type="video/mp4" />
          브라우저가 비디오를 지원하지 않습니다.
        </video>

        <audio
          ref={audioRef}
          autoPlay
          loop
          style={{ display: 'none' }}
        >
          <source src={`${import.meta.env.BASE_URL}audio.mp3`} type="audio/mpeg" />
        </audio>
      </div>
    </Slide>
  );
};

export default Slide14;
