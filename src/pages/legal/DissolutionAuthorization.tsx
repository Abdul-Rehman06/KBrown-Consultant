import SEO from '../../components/SEO';
import PageTransition from '../../animations/PageTransition';

export default function DissolutionAuthorization() {
  return (
    <PageTransition>
      <SEO 
        title="LLC Dissolution Authorization Letter | KBrown Consultant Group" 
        description="LLC Dissolution Authorization Letter"
        noindex={true}
      />
      <main className="bg-[#0B1523] min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <h1 className="text-3xl md:text-4xl font-heading text-white mb-6">
              Authorization LetterPermission for KBCG to Act on Your Behalf
            </h1>
            
            <p className="text-white/80 mb-8 leading-relaxed">
              I hereby authorize K Brown Consultant Group (KBCG) and its authorized representatives to act on my behalf in all matters related to the dissolution of my LLC. This includes communicating with the Florida Division of Corporations, the IRS, local agencies, and financial institutions on my behalf.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-heading text-[#D4AF37] mb-4">This Authorization Covers:</h2>
                <ul className="list-disc pl-6 space-y-2 text-white/70">
                  <li>Accessing and verifying business records on Florida Sunbiz</li>
                  <li>Ordering official state documents on my behalf</li>
                  <li>Communicating with the Florida Division of Corporations on my behalf</li>
                  <li>Communicating with local county licensing offices on my behalf</li>
                  <li>Drafting correspondence to the IRS regarding EIN / business account closure</li>
                  <li>Coordinating with financial institutions regarding business account closure</li>
                </ul>
              </section>

              <section className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <p className="text-white/90">
                  This authorization does <strong className="text-red-400">NOT</strong> grant KBCG the authority to: sign legal documents requiring notarization on your behalf, access personal bank accounts not associated with the LLC, or make financial decisions without your express written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-[#D4AF37] mb-4">Identification You'll Need to Provide:</h2>
                <p className="text-white/60 text-sm mb-4 italic">(Note: This is collected securely in the intake form, not on this page)</p>
                <ul className="list-disc pl-6 space-y-2 text-white/70">
                  <li>Government-issued Photo ID (Driver's License or Passport)</li>
                  <li>Social Security Card or Last 4 of SSN</li>
                  <li>Proof of LLC Ownership (original filing docs or Sunbiz screenshot)</li>
                </ul>
              </section>

              <div className="pt-8 border-t border-white/10 text-white/50 text-sm italic">
                By checking the box on your intake form, you confirm you have read and agree to this authorization.
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}