import React from 'react';
import './App.css';
import ScrollingVideo from './ScrollingVideo';
import ResponsiveFrameComponent from './ResponsiveFrameComponent';

function App() {
  const framePath = ResponsiveFrameComponent(); // Get the dynamic frame path

  return (
    <div className="App">
      <ScrollingVideo
        framePath={framePath}
        frameCount={648}
        scrollArea={12000}
      />
      
    </div>
  );
}

export default App;
