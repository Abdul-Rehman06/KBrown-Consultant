import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import SEO component
import SEO from '../components/SEO';

// Import sections
import AccessibilityHero from '../sections/legal/AccessibilityHero';
import AccessibilityContent from '../sections/legal/AccessibilityContent';

export default function Accessibility() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="bg-[#0B1523] min-h-screen">
      <SEO 
        title="Accessibility Statement | KBrown Consultant"
        description="KBrown Consultant is committed to providing an accessible website experience for all users. Read our accessibility statement and guidelines."
      />
      <AccessibilityHero />
      <AccessibilityContent />
    </main>
  );
}