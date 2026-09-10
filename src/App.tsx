import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis';

// Layout
import Layout from './layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import FundingSolutions from './pages/FundingSolutions';
import CreditEducation from './pages/CreditEducation';
import Resources from './pages/Resources';
import Ebooks from './pages/Ebooks';
import Guides from './pages/Guides';
import Tradelines from './pages/Tradelines';
import LlcServices from './pages/llc/LlcServices';
import LlcFormation from './pages/llc/LlcFormation';
import LlcDissolution from './pages/llc/LlcDissolution';

// Hidden LLC Post-Payment Pages
import FormationPacket from './pages/llc/FormationPacket';
import FormationStateSelection from './pages/llc/FormationStateSelection';
import FormationStateThankYou from './pages/llc/FormationStateThankYou';
import DissolutionPacket from './pages/llc/DissolutionPacket';
import DissolutionPacketThankYou from './pages/llc/DissolutionPacketThankYou';

import BookConsultation from './pages/BookConsultation';
import Services from './pages/Services';
import SuccessStories from './pages/SuccessStories';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import Accessibility from './pages/Accessibility';
import ThankYou from './pages/ThankYou';

// Legal Hidden Pages
import FormationAgreement from './pages/legal/FormationAgreement';
import FormationAuthorization from './pages/legal/FormationAuthorization';
import DissolutionAgreement from './pages/legal/DissolutionAgreement';
import DissolutionAuthorization from './pages/legal/DissolutionAuthorization';

import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import SEO from './components/SEO';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="funding" element={<FundingSolutions />} />
        <Route path="credit-education" element={<CreditEducation />} />
        <Route path="services" element={<Services />} />
        <Route path="success-stories" element={<SuccessStories />} />
        <Route path="resources" element={<Resources />} />
        <Route path="ebooks" element={<Ebooks />} />
        <Route path="guides" element={<Guides />} />
        <Route path="tradelines" element={<Tradelines />} />
        <Route path="llc-services" element={<LlcServices />} />
        {/* Alias URLs for the LLC form pages (from doc) */}
        <Route path="llc-formation-form" element={<LlcFormation />} />
        <Route path="llc-dissolution-form" element={<LlcDissolution />} />
        <Route path="llc-formation" element={<LlcFormation />} />
        <Route path="llc-dissolution" element={<LlcDissolution />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book-consultation" element={<BookConsultation />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="accessibility" element={<Accessibility />} />
        
        {/* Hidden Legal Pages */}
        <Route path="formation-agreement" element={<FormationAgreement />} />
        <Route path="formation-authorization" element={<FormationAuthorization />} />
        <Route path="dissolution-agreement" element={<DissolutionAgreement />} />
        <Route path="dissolution-authorization" element={<DissolutionAuthorization />} />

        {/* Hidden LLC Post-Payment Pages */}
        <Route path="formation-packet" element={<FormationPacket />} />
        <Route path="formation-state-selection" element={<FormationStateSelection />} />
        <Route path="formation-state-thank-you" element={<FormationStateThankYou />} />
        <Route path="dissolution-packet" element={<DissolutionPacket />} />
        <Route path="dissolution-packet-thank-you" element={<DissolutionPacketThankYou />} />

        <Route path="thank-you" element={<ThankYou />} />
        <Route path="*" element={<div className="h-screen flex items-center justify-center text-4xl font-heading text-gold"><SEO title="404 - Not Found | KBrown Consultant Group LLC" description="The page you are looking for does not exist." noindex={true} />404 - Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
