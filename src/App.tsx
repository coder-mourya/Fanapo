// import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50">
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <ToastContainer position="bottom-right" />
      </div>
    </HelmetProvider>
  );
}

export default App;