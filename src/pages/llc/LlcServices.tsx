import SEO from '../../components/SEO';
import PageTransition from '../../animations/PageTransition';
import LlcServicesHero from '../../sections/llc/LlcServicesHero';

export default function LlcServices() {
  return (
    <PageTransition>
      <SEO 
        title="LLC Formation & Dissolution Services | KBrown Consultant" 
        description="Form a new business or close one out the right way with K Brown Consultant Group. Fixed pricing, a licensed process, and expert guidance."
      />
      <main className="bg-[#0B1523] min-h-screen pt-20">
        <LlcServicesHero />
      </main>
    </PageTransition>
  );
}