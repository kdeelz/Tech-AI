
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Home from './components/Home';
import Learn from './components/Learn';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/learn' element={<Learn/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
