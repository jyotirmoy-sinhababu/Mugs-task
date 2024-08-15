import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import HeroSection from '../../components/heroSection/HeroSection';
import AboutMe from '../../components/aboutMe/AboutMe';
import Services from '../../components/services/Services';
import MyProjects from '../../components/myProjects/MyProjects';
import Testimonials from '../../components/testimonial/Testimonials';
import ContactForm from '../../components/contactForm/ContactForm';
import Footer from '../../components/footer/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Services />
      <MyProjects />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
