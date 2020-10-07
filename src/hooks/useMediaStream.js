import { useEffect, useState } from 'react';

function useMediaStream() {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const getMediaStream = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      if (!cancelled) setMediaStream(stream);
    };
    getMediaStream();

    return () => {
      cancelled = true;
    };
  }, []);

  return mediaStream;
}

export default useMediaStream;
