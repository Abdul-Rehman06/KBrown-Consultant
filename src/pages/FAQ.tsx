import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import SEO component
import SEO from '../components/SEO';

// Import sections
import FAQHero from '../sections/faq/FAQHero';
import FAQAccordion from '../sections/faq/FAQAccordion';
import FAQCTA from '../sections/faq/FAQCTA';

export default function FAQ() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="bg-[#0B1523] min-h-screen">
      <SEO 
        title="Frequently Asked Questions | KBrown Consultant Group LLC"
        description="Find answers to common questions about KBrown Consultant Group LLC's educational resources, personalized consultations, and financial guidance."
      />
      <FAQHero />
      <FAQAccordion />
      <FAQCTA />
    </main>
  );
}
