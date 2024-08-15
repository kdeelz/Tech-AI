import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

export default App;
