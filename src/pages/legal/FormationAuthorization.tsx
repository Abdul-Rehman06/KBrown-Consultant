import SEO from '../../components/SEO';
import PageTransition from '../../animations/PageTransition';

export default function FormationAuthorization() {
  return (
    <PageTransition>
      <SEO 
        title="LLC Formation Authorization Letter | KBrown Consultant Group" 
        description="LLC Formation Authorization Letter"
        noindex={true}
      />
      <main className="bg-[#0B1523] min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <h1 className="text-3xl md:text-4xl font-heading text-white mb-6">
              Authorization Letter — Permission for KBCG to Act on Your Behalf
            </h1>
            
            <p className="text-white/80 mb-8 leading-relaxed">
              I hereby authorize K Brown Consultant Group (KBCG) and its authorized representatives to act on my behalf in all matters related to the formation of my new LLC — including filing with the Florida Division of Corporations, applying for an EIN with the IRS, and coordinating with any applicable agencies.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-heading text-[#D4AF37] mb-4">This Authorization Covers:</h2>
                <ul className="list-disc pl-6 space-y-2 text-white/70">
                  <li>Searching LLC name availability on Florida Sunbiz</li>
                  <li>Preparing and filing Articles of Organization with the Florida Division of Corporations</li>
                  <li>Designating a Registered Agent on my behalf</li>
                  <li>Applying for an EIN with the IRS on my behalf</li>
                  <li>Drafting an Operating Agreement for my LLC</li>
                  <li>Communicating with the Florida Division of Corporations and applicable agencies on my behalf</li>
                </ul>
              </section>

              <section className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <p className="text-white/90">
                  This authorization does <strong className="text-red-400">NOT</strong> grant KBCG the authority to: sign legal documents requiring notarization on your behalf, access any personal bank accounts, or make financial decisions without your express written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-[#D4AF37] mb-4">Identification You'll Need to Provide:</h2>
                <p className="text-white/60 text-sm mb-4 italic">(Note: This is collected securely in the intake form, not on this page)</p>
                <ul className="list-disc pl-6 space-y-2 text-white/70">
                  <li>Government-issued Photo ID (Driver's License or Passport)</li>
                  <li>Social Security Card or Last 4 of SSN</li>
                  <li>Proof of Address (Utility Bill, Bank Statement, or Lease)</li>
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