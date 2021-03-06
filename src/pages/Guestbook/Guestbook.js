import React, { useRef } from 'react';
import useMediaStream from '../../hooks/useMediaStream';

function Guestbook() {
  const videoRef = useRef();
  const stream = useMediaStream();

  if (stream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = stream;
  }

  // function handleCanPlay() {
  //   videoRef.current.play();
  // }

  return (
    <div className="guestbook">
      {console.log('called')}
      <h3>Guestbook</h3>
      <p>Leave a Message for the newlyweds</p>
      <video className="guestbook-video" ref={videoRef} controls muted />
    </div>
  );
}

export default Guestbook;
