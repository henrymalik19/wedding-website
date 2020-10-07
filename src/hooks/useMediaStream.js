import { useEffect, useState } from 'react';

function useMediaStream(constraints) {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    const getMediaStream = async () => {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setMediaStream(stream);
    };
    getMediaStream();
  }, [constraints]);

  return mediaStream;
}

export default useMediaStream;
