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
        <nav>
          <ul>
            <li>
              <Link to="/1">Scrolling Video 1</Link>
            </li>
            <li>
              <Link to="/2">Scrolling Video 2</Link>
            </li>
          </ul>
        </nav>
        {/* Define your routes here */}
        <Routes>
        
          <Route
            path="/1"
            element={
              <ScrollingVideo
                framePath={framePath}
                frameCount={648}
                scrollArea={12000}
              />
            }
          />
          <Route
            path="/2"
            element={
              <ScrollingVideo
                framePath={"https://raw.githubusercontent.com/humanflag/scroll-test/main/1400/frame0001.jpg"}
                frameCount={576}
                scrollArea={10000}
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
