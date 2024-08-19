
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          
          {/* Add other routes here */}
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
