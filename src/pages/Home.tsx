import SEO from '../components/SEO';
import Hero from '../sections/home/Hero';
import Services from '../sections/home/Services';
import HowWeWork from '../sections/home/HowWeWork';
import FundingSolutions from '../sections/home/FundingSolutions';
import CreditEducation from '../sections/home/CreditEducation';
import TradelinesPreview from '../sections/home/TradelinesPreview';
import ResourcesPreview from '../sections/home/ResourcesPreview';
import WhyChooseUs from '../sections/home/WhyChooseUs';
import Metrics from '../sections/home/Metrics';
import Testimonials from '../sections/home/Testimonials';
import BookConsultationCTA from '../sections/home/BookConsultationCTA';
import FAQ from '../sections/home/FAQ';
import FinalCTA from '../sections/home/FinalCTA';

export default function Home() {
  return (
    <div className="bg-dark">
      <SEO 
        title="KBrown Consultant Group LLC | Premium Financial Consulting & Education"
        description="Transform your financial future with KBrown Consultant Group LLC. We offer premium business funding guidance, credit education, and strategic financial consulting."
      />
      <Hero />
      <Services />
      <HowWeWork />
      <FundingSolutions />
      <CreditEducation />
      <TradelinesPreview />
      <ResourcesPreview />
      <WhyChooseUs />
      <Metrics />
      <Testimonials />
      <BookConsultationCTA />
      <FAQ />
      <FinalCTA />
    </div>
  );
}