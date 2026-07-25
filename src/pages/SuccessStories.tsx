import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import SEO component
import SEO from '../components/SEO';

// Import sections
import SuccessHero from '../sections/success/SuccessHero';
import SuccessTestimonials from '../sections/success/SuccessTestimonials';
import SuccessPhilosophy from '../sections/success/SuccessPhilosophy';
import SuccessCommitment from '../sections/success/SuccessCommitment';
import SuccessCTA from '../sections/success/SuccessCTA';

export default function SuccessStories() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="bg-[#0B1523] min-h-screen">
      <SEO 
        title="Success Stories | KBrown Consultant Group LLC"
        description="Read about the meaningful conversations and lasting confidence our clients experience through KBrown Consultant Group LLC's personalized guidance."
      />
      <SuccessHero />
      <SuccessTestimonials />
      <SuccessPhilosophy />
      <SuccessCommitment />
      <SuccessCTA />
    </main>
  );
}
