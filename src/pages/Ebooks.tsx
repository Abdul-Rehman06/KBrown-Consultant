import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import SEO component
import SEO from '../components/SEO';

// Import sections
import EbooksHero from '../sections/ebooks/EbooksHero';
import EbooksCollection from '../sections/ebooks/EbooksCollection';
import EbooksWhyUs from '../sections/ebooks/EbooksWhyUs';
import EbooksFeatures from '../sections/ebooks/EbooksFeatures';
import EbooksLearning from '../sections/ebooks/EbooksLearning';
import EbooksCTA from '../sections/ebooks/EbooksCTA';

export default function Ebooks() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="bg-[#0B1523] min-h-screen">
      <SEO 
        title="eBooks Library | KBrown Consultant Group LLC"
        description="Explore our premium collection of educational eBooks covering business funding, financial planning, credit education, and strategic growth."
      />
      <EbooksHero />
      <EbooksCollection />
      <EbooksWhyUs />
      <EbooksFeatures />
      <EbooksLearning />
      <EbooksCTA />
    </main>
  );
}
