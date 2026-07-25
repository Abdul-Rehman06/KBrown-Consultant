import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import SEO component
import SEO from '../components/SEO';

// Import sections
import ServicesHero from '../sections/services/ServicesHero';
import ServiceCards from '../sections/services/ServiceCards';
import WhyChooseUs from '../sections/services/WhyChooseUs';
import ServicesProcess from '../sections/services/ServicesProcess';
import ServicesCTA from '../sections/services/ServicesCTA';

export default function Services() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="bg-[#0B1523] min-h-screen">
      <SEO 
        title="Our Services | KBrown Consultant Group LLC"
        description="Explore our strategic financial guidance, business funding education, credit education, and personalized consulting services."
      />
      <ServicesHero />
      <ServiceCards />
      <WhyChooseUs />
      <ServicesProcess />
      <ServicesCTA />
    </main>
  );
}
