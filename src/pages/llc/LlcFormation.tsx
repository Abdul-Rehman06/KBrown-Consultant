import SEO from '../../components/SEO';
import PageTransition from '../../animations/PageTransition';
import LlcFormationContent from '../../sections/llc/LlcFormationContent';

export default function LlcFormation() {
  return (
    <PageTransition>
      <SEO 
        title="Start Your LLC Formation | KBrown Consultant" 
        description="Start your LLC formation with K Brown Consultant Group. Choose your package and let our team handle the paperwork."
      />
      <main className="bg-[#0B1523] min-h-screen">
        <LlcFormationContent />
      </main>
    </PageTransition>
  );
}