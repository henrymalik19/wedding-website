import React, { useRef } from 'react'
import useMediaStream from '../hooks/useMediaStream.js'

function Guestbook() {
    const videoRef = useRef();
    const stream = useMediaStream({ audio:true, video:true });

    if (stream && videoRef.current && !videoRef.current.srcObject) {
        videoRef.current.srcObject = stream;
      }
    
      // function handleCanPlay() {
      //   videoRef.current.play();
      // }

    return (
        <div className="guestbook">
            <video className="guestbook-video" ref={videoRef}  controls muted></video>
        </div>
    )
}

export default Guestbook
