import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import DesignWorks from './components/DesignWorks';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {loading && <Loader onFinished={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <CustomCursor />
          <Background />
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <DesignWorks />
            <Certifications />
            <Contact />
          </main>
          
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
