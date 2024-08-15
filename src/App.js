import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </>
  );
}


export default App;
