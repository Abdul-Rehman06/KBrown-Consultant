import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import SEO component
import SEO from '../components/SEO';

// Import sections
import TermsHero from '../sections/legal/TermsHero';
import TermsContent from '../sections/legal/TermsContent';

export default function Terms() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="bg-[#0B1523] min-h-screen">
      <SEO 
        title="Terms & Conditions | KBrown Consultant Group LLC"
        description="Read the Terms and Conditions for KBrown Consultant Group LLC. Understand the rules and guidelines for using our website and services."
      />
      <TermsHero />
      <TermsContent />
    </main>
  );
}
