import SEO from '../../components/SEO';
import PageTransition from '../../animations/PageTransition';

export default function DissolutionAgreement() {
  return (
    <PageTransition>
      <SEO 
        title="LLC Dissolution Service Agreement | KBrown Consultant Group" 
        description="LLC Dissolution Service Agreement"
        noindex={true}
      />
      <main className="bg-[#0B1523] min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <h1 className="text-3xl md:text-4xl font-heading text-white mb-6">
              LLC Dissolution Service Agreement
            </h1>
            
            <p className="text-white/80 mb-8 leading-relaxed">
              This Agreement is entered into between K Brown Consultant Group (KBCG) and the Client named below. By signing this agreement, you authorize KBCG to facilitate all steps necessary to dissolve your LLC in accordance with Florida state law.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-heading text-[#D4AF37] mb-4">Scope of Services</h2>
                <p className="text-white/80 mb-4">KBCG agrees to perform the following on your behalf:</p>
                <ul className="list-disc pl-6 space-y-2 text-white/70">
                  <li>Verify LLC dissolution status on Florida Sunbiz database</li>
                  <li>Order Certificate of Status from Florida Division of Corporations (covered in service fee)</li>
                  <li>Advise and guide you through business bank account closure</li>
                  <li>Draft and submit IRS EIN closure letter (if applicable)</li>
                  <li>Identify and cancel any local or county business licenses or permits</li>
                  <li>Coordinate final tax return filing guidance</li>
                  <li>Compile and deliver complete dissolution document package</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-[#D4AF37] mb-4">Terms & Conditions</h2>
                <ul className="space-y-4 text-white/70">
                  <li>
                    <strong className="text-white">Payment.</strong> You agree to pay KBCG the agreed service fee in full prior to commencement of services. All state filing fees are handled by KBCG and covered within the service fee unless otherwise stated.
                  </li>
                  <li>
                    <strong className="text-white">Client Cooperation.</strong> You agree to provide all requested documentation, identification, and information in a timely manner. Delays caused by you may extend the timeline of services.
                  </li>
                  <li>
                    <strong className="text-white">No Legal Advice.</strong> KBCG is a financial empowerment and consulting firm. Nothing in this agreement constitutes legal advice. You are advised to consult a licensed attorney for legal questions related to your business dissolution.
                  </li>
                  <li>
                    <strong className="text-white">No Tax Advice.</strong> KBCG does not provide licensed tax advice. Any tax-related guidance is general in nature. You should consult a licensed CPA for tax-specific matters.
                  </li>
                  <li>
                    <strong className="text-white">Limitation of Liability.</strong> KBCG shall not be liable for delays caused by government agencies, third-party institutions, or information withheld by the Client.
                  </li>
                  <li>
                    <strong className="text-white">Confidentiality.</strong> All information you provide to KBCG shall be kept strictly confidential and will not be shared with third parties without your written consent.
                  </li>
                  <li>
                    <strong className="text-white">Refund Policy.</strong> Service fees are non-refundable once work has commenced. If KBCG is unable to complete services due to reasons outside your control, a partial refund may be issued at KBCG's discretion.
                  </li>
                </ul>
              </section>

              <div className="pt-8 border-t border-white/10 text-white/50 text-sm italic">
                By checking the box on your intake form, you confirm you have read and agree to the terms above.
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}