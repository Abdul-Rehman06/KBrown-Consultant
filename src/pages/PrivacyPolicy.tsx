import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import SEO component
import SEO from '../components/SEO';

// Import sections
import PrivacyHero from '../sections/legal/PrivacyHero';
import PrivacyContent from '../sections/legal/PrivacyContent';

export default function PrivacyPolicy() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="bg-[#0B1523] min-h-screen">
      <SEO 
        title="Privacy Policy | KBrown Consultant"
        description="Read the KBrown Consultant Privacy Policy to understand how we collect, use, and protect your personal information."
      />
      <PrivacyHero />
      <PrivacyContent />
    </main>
  );
}
