import React from 'react';
import './App.css';
import HeroSection from './Sections/HeroSection';
import KeyPoints from './Sections/KeyPoints';
import FAQS from './Sections/FAQS';
import AboutUs from './Sections/AboutUs';

function App() {
  return (
     <>
      <HeroSection />
      <KeyPoints />
      <AboutUs />
      <FAQS />
    </>
   );
}

export default App;
