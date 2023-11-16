import React, { useEffect } from 'react';
import CanvasScrollClip from 'canvas-scroll-clip';

const ScrollingVideo = ({ framePath, frameCount, scrollArea }) => {

  useEffect(() => {
    new CanvasScrollClip(document.querySelector('.scroll-video'), {
      framePath,
      frameCount,
      scrollArea,
    });
    
  }, [framePath, frameCount, scrollArea]);
  
  return <div className='scroll-video'></div>;
};

export default ScrollingVideo;
