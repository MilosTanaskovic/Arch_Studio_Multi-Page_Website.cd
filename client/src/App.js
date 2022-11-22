import React from 'react';
import {} from 'react-dom';
import { Route, Routes } from 'react-router';
import './App.css';
import { AboutUs, Contact, Home, NotFound, Portfolio } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
