import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Toaster } from './components/ui/toaster';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <h1>Test - Mon Portfolio</h1>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Toaster /> */}
    </div>
  );
}

export default App;