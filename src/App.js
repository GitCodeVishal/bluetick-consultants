import React from 'react';
import Services from './Components/Services';
import HeroSection from './Components/HeroSection'; 
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
