import React from 'react';
import Services from './Components/Services';
import HeroSection from './Components/HeroSection'; 
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
