import { useEffect } from 'react';

const PreloadImages = ({ baseUrl, frameCount, startNumber = 1 }) => {
  useEffect(() => {
    for (let i = startNumber; i < startNumber + frameCount; i++) {
      const frameNumber = i.toString().padStart(4, '0');
      const img = new Image();
      img.src = `${baseUrl}/frame${frameNumber}.jpg`;
    }
  }, [baseUrl, frameCount, startNumber]);

  return null; // This component does not render anything
};

export default PreloadImages;
