import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import HeroSection from '../../components/heroSection/HeroSection';
import AboutMe from '../../components/aboutMe/AboutMe';
import Services from '../../components/services/Services';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Services />
    </div>
  );
};

export default LandingPage;
