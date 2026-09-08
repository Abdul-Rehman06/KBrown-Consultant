import SEO from '../../components/SEO';
import PageTransition from '../../animations/PageTransition';
import LlcDissolutionContent from '../../sections/llc/LlcDissolutionContent';

export default function LlcDissolution() {
  return (
    <PageTransition>
      <SEO 
        title="Dissolve Your LLC | KBrown Consultant" 
        description="Dissolve your LLC the right way with K Brown Consultant Group. Choose your package and let our team handle the paperwork."
      />
      <main className="bg-[#0B1523] min-h-screen">
        <LlcDissolutionContent />
      </main>
    </PageTransition>
  );
}