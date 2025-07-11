import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Program from './components/Program';
import Careers from './components/Careers';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Program />
        <Careers />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;