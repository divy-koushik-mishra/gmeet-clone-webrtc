import { useRef, useEffect } from 'react';

const VideoCanvas = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const getVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    };
    getVideo();
  }, []);



  return (
    <div className='rounded-lg overflow-hidden cursor-crosshair'>
      <video ref={videoRef} width="1280" height="720" className='-scale-x-100' autoPlay muted />
    </div>
  );
};

export default VideoCanvas;
