import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import SEO component
import SEO from '../components/SEO';

// Import sections
import DisclaimerHero from '../sections/legal/DisclaimerHero';
import DisclaimerContent from '../sections/legal/DisclaimerContent';

export default function Disclaimer() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="bg-[#0B1523] min-h-screen">
      <SEO 
        title="Disclaimer | KBrown Consultant Group LLC"
        description="Review the KBrown Consultant Group LLC disclaimer. Information provided is for educational purposes only and does not constitute financial, legal, or professional advice."
      />
      <DisclaimerHero />
      <DisclaimerContent />
    </main>
  );
}