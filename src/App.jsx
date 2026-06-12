import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllCertifications from './pages/AllCertifications';
import Contact from './pages/Contact';
import './App.css';

const MainScroll = () => {
  return (
    <>
      <Home />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <ParticlesBackground />
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<MainScroll />} />
            <Route path="/certifications" element={<AllCertifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
