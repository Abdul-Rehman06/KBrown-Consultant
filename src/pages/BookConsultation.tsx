import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import SEO component
import SEO from '../components/SEO';

// Import sections
import BookingCalendar from '../sections/booking/BookingCalendar';
import BookingAbout from '../sections/booking/BookingAbout';
import BookingExpectations from '../sections/booking/BookingExpectations';
import BookingWho from '../sections/booking/BookingWho';
import BookingProcess from '../sections/booking/BookingProcess';
import BookingWhyUs from '../sections/booking/BookingWhyUs';
import BookingFAQ from '../sections/booking/BookingFAQ';
import BookingCTA from '../sections/booking/BookingCTA';

export default function BookConsultation() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="bg-[#0B1523] min-h-screen">
      <SEO 
        title="Book a Consultation | KBrown Consultant Group LLC"
        description="Schedule a personalized consultation with KBrown Consultant Group LLC. Explore funding opportunities and seek strategic guidance for your next business move."
      />
      <BookingCalendar />
      <BookingAbout />
      <BookingExpectations />
      <BookingWho />
      <BookingProcess />
      <BookingWhyUs />
      <BookingFAQ />
      <BookingCTA />
    </main>
  );
}
