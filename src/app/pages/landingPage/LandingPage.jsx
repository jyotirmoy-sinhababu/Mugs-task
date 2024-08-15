import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import HeroSection from '../../components/heroSection/HeroSection';
import AboutMe from '../../components/aboutMe/AboutMe';
import Services from '../../components/services/Services';
import MyProjects from '../../components/myProjects/MyProjects';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Services />
      <MyProjects />
    </div>
  );
};

export default LandingPage;
