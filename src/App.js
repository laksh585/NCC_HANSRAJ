import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import Navbar from './components/Navbar/Navbar';
import NCC from './pages/NCC';

function App() {
  return (
      <div>
        <Navbar/>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/NCC" element={<NCC />} />
        </Routes>
        </div>
  );
}

export default App;