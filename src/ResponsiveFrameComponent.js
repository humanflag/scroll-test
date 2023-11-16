import { useState, useEffect } from 'react';

const ResponsiveFrameComponent = () => {
  const [framePath, setFramePath] = useState("https://raw.githubusercontent.com/humanflag/scroll-test/main/1464x824/frame0001.jpg");

  useEffect(() => {
    const handleResize = () => {
      setFramePath(window.innerWidth < 800 ? "https://raw.githubusercontent.com/humanflag/scroll-test/main/800x450/frame0001.jpg" : "https://raw.githubusercontent.com/humanflag/scroll-test/main/1464x824/frame0001.jpg");
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return framePath; // Return the current frame path
};

export default ResponsiveFrameComponent;
