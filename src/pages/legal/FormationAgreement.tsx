import SEO from '../../components/SEO';
import PageTransition from '../../animations/PageTransition';

export default function FormationAgreement() {
  return (
    <PageTransition>
      {/* noindex to keep it hidden from search engines */}
      <SEO 
        title="LLC Formation Service Agreement | KBrown Consultant Group" 
        description="LLC Formation Service Agreement"
        noindex={true}
      />
      <main className="bg-[#0B1523] min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <h1 className="text-3xl md:text-4xl font-heading text-white mb-6">
              LLC Formation Service Agreement
            </h1>
            
            <p className="text-white/80 mb-8 leading-relaxed">
              This Agreement is entered into between K Brown Consultant Group (KBCG) and the Client named below. By signing this agreement, you authorize KBCG to facilitate all steps necessary to form your LLC in accordance with Florida state law.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-heading text-[#D4AF37] mb-4">Scope of Services</h2>
                <p className="text-white/80 mb-4">KBCG agrees to perform the following on your behalf:</p>
                <ul className="list-disc pl-6 space-y-2 text-white/70">
                  <li>Search and verify LLC name availability on Florida Sunbiz</li>
                  <li>Prepare and file Articles of Organization with the Florida Division of Corporations</li>
                  <li>Designate and establish Registered Agent information</li>
                  <li>Obtain EIN (Employer Identification Number) from the IRS on your behalf</li>
                  <li>Draft Operating Agreement for your LLC (Full Formation tier)</li>
                  <li>Advise on opening a business bank account</li>
                  <li>Provide guidance on required local and county business licenses</li>
                  <li>Compile and deliver complete LLC formation document package</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-[#D4AF37] mb-4">Terms & Conditions</h2>
                <ul className="space-y-4 text-white/70">
                  <li>
                    <strong className="text-white">Payment.</strong> You agree to pay KBCG the agreed service fee in full prior to commencement of services. All state filing fees are handled by KBCG and covered within the service fee unless otherwise stated.
                  </li>
                  <li>
                    <strong className="text-white">Name Availability.</strong> KBCG will search name availability before filing. If your first choice is unavailable, KBCG will use your second choice or consult you for an alternative. KBCG is not responsible for name rejections due to similarity with existing entities.
                  </li>
                  <li>
                    <strong className="text-white">Client Cooperation.</strong> You agree to provide all requested documentation, identification, and information in a timely manner. Delays caused by you may extend the formation timeline.
                  </li>
                  <li>
                    <strong className="text-white">No Legal Advice.</strong> KBCG is a financial empowerment and consulting firm. Nothing in this agreement constitutes legal advice. You are advised to consult a licensed attorney for legal questions.
                  </li>
                  <li>
                    <strong className="text-white">No Tax Advice.</strong> KBCG does not provide licensed tax advice. Any tax-related guidance is general in nature. You should consult a licensed CPA for tax-specific matters.
                  </li>
                  <li>
                    <strong className="text-white">Timeline.</strong> Standard LLC formation in Florida takes approximately 5–10 business days after all client information is received. Expedited processing available at additional cost.
                  </li>
                  <li>
                    <strong className="text-white">Third-Party Registered Agent.</strong> KBCG charges a one-time $100 sourcing fee to locate and coordinate a licensed Registered Agent in the applicable state. This sourcing fee is entirely separate fromand does not includethe Registered Agent's own annual service fee. The Registered Agent's annual fee (typically $50–$300/year depending on provider and state) is the sole financial responsibility of the Client and must be paid directly to the Registered Agent. KBCG will present the Client with agent options and all associated costs prior to any commitment being made. KBCG assumes no liability for the ongoing performance, pricing changes, or availability of any third-party Registered Agent.
                  </li>
                  <li>
                    <strong className="text-white">Virtual Business Address.</strong> If Client does not have a business address and requests KBCG to source a virtual address provider, KBCG charges a one-time $100 sourcing fee. The virtual address provider's own monthly or annual subscription fee is completely separate from KBCG's sourcing fee and is the sole financial responsibility of the Client, paid directly to the chosen provider. Fees typically range from $10–$100/month. KBCG will present options and pricing before any commitment is made.
                  </li>
                  <li>
                    <strong className="text-white">Limitation of Liability.</strong> KBCG shall not be liable for delays caused by the Florida Division of Corporations, the IRS, or information withheld by the Client.
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