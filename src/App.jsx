import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contacts';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import React from 'react';
import Frontsectionone from './components/Frontsectionone';
import Work from './components/Work';
import Footer from './components/Footer';
import Getintouch from './components/Getintouch';



export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      
      </Router>
    </>
  )
}


