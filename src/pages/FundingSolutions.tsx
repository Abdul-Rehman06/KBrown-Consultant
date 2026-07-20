import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import SEO component
import SEO from '../components/SEO';

import FundingHero from '../sections/funding/FundingHero';
import FundingOverview from '../sections/funding/FundingOverview';
import FundingOptions from '../sections/funding/FundingOptions';
import FundingHowItWorks from '../sections/funding/FundingHowItWorks';
import FundingWhoBenefits from '../sections/funding/FundingWhoBenefits';
import FundingConsultation from '../sections/funding/FundingConsultation';
import FundingPreparation from '../sections/funding/FundingPreparation';
import FundingFAQ from '../sections/funding/FundingFAQ';
import FundingCTA from '../sections/funding/FundingCTA';
import FinalCTA from '../sections/home/FinalCTA';

export default function FundingSolutions() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-dark min-h-screen">
      <SEO 
        title="Business Funding Guidance | KBrown Consultant"
        description="Learn about business funding readiness, explore financial concepts, and receive strategic guidance to help you navigate funding opportunities with confidence."
      />
      <FundingHero />
      <FundingOverview />
      <FundingOptions />
      <FundingHowItWorks />
      <FundingWhoBenefits />
      <FundingConsultation />
      <FundingPreparation />
      <FundingFAQ />
      <FundingCTA />
      {/* We can reuse the Final CTA from the homepage as it fits perfectly */}
      <FinalCTA />
    </div>
  );
}