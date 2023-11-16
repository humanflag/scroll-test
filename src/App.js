import React from 'react';
import './App.css';
import ScrollingVideo from './ScrollingVideo';
import ResponsiveFrameComponent from './ResponsiveFrameComponent';

// React Router imports
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const framePath = ResponsiveFrameComponent(); // Get the dynamic frame path

  return (
    <Router>
      <div className="App">
        {/* Basic Navigation */}


        {/* Define your routes here */}
        <Routes>
          <Route 
            path="/" 
            element={
              <ScrollingVideo
                framePath={framePath}
                frameCount={648}
                scrollArea={12000}
              />
            } 
          />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
