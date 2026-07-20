import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import AboutHero from '../sections/about/AboutHero';
import AboutStoryMission from '../sections/about/AboutStoryMission';
import AboutPhilosophy from '../sections/about/AboutPhilosophy';
import AboutWhoWeHelp from '../sections/about/AboutWhoWeHelp';
import AboutApproach from '../sections/about/AboutApproach';
import WhyChooseUs from '../sections/home/WhyChooseUs'; // Reusing the identical section from Home
import AboutValues from '../sections/about/AboutValues';
import AboutFounder from '../sections/about/AboutFounder';
import AboutEducation from '../sections/about/AboutEducation';
import AboutCTA from '../sections/about/AboutCTA';

export default function About() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-dark min-h-screen">
      <SEO 
        title="About Us | KBrown Consultant"
        description="Learn about KBrown Consultant's mission to provide education, strategy, and premium financial consulting for entrepreneurs and business owners."
      />
      <AboutHero />
      <AboutStoryMission />
      <AboutPhilosophy />
      <AboutWhoWeHelp />
      <AboutApproach />
      <WhyChooseUs />
      <AboutValues />
      <AboutFounder />
      <AboutEducation />
      <AboutCTA />
    </div>
  );
}