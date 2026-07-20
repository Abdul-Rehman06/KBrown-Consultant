import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import SEO component
import SEO from '../components/SEO';

// Import sections
import ContactHero from '../sections/contact/ContactHero';
import ContactForm from '../sections/contact/ContactForm';
import ContactWhyReachOut from '../sections/contact/ContactWhyReachOut';
import ContactFAQ from '../sections/contact/ContactFAQ';
import ContactCTA from '../sections/contact/ContactCTA';

export default function Contact() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="bg-[#0B1523] min-h-screen">
      <SEO 
        title="Contact Us | KBrown Consultant"
        description="Get in touch with KBrown Consultant for professional financial consulting, business funding guidance, and credit education."
      />
      <ContactHero />
      <ContactForm />
      <ContactWhyReachOut />
      <ContactFAQ />
      <ContactCTA />
    </main>
  );
}
