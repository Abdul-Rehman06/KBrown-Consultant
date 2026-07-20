import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import SEO component
import SEO from '../components/SEO';

import CreditHero from '../sections/credit/CreditHero';
import UnderstandingCredit from '../sections/credit/UnderstandingCredit';
import WhyCreditMatters from '../sections/credit/WhyCreditMatters';
import CreditComparison from '../sections/credit/CreditComparison';
import CreditFundamentals from '../sections/credit/CreditFundamentals';
import FinancialHabits from '../sections/credit/FinancialHabits';
import CreditFAQ from '../sections/credit/CreditFAQ';
import CreditWhyKBrown from '../sections/credit/CreditWhyKBrown';
import CreditConsultation from '../sections/credit/CreditConsultation';
import FinalCTA from '../sections/home/FinalCTA'; // Using global final CTA

export default function CreditEducation() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-dark min-h-screen">
      <SEO 
        title="Credit Education | KBrown Consultant"
        description="Build a stronger financial foundation through our comprehensive credit education resources. Learn the fundamentals of personal and business credit."
      />
      <CreditHero />
      <UnderstandingCredit />
      <WhyCreditMatters />
      <CreditComparison />
      <CreditFundamentals />
      <FinancialHabits />
      <CreditFAQ />
      <CreditWhyKBrown />
      <CreditConsultation />
      
      {/* We use a modified prop-based approach if we want to change text, 
          but since we reuse FinalCTA, let's keep the design consistent with Home/Funding */}
      <FinalCTA />
    </div>
  );
}