import { motion } from 'framer-motion';

export default function DisclaimerContent() {
  return (
    <section className="py-20 relative bg-[#0B1523]">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm prose prose-invert prose-gold max-w-none"
        >
          <p className="text-white/60 mb-10">
            <strong>Effective Date:</strong> 20/07/2026
          </p>

          <p>
            The information provided on the KBrown Consultant website ("Website") is intended solely for general informational and educational purposes. By accessing or using this Website, you acknowledge and agree to the terms of this Disclaimer.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Educational & Informational Purposes Only</h3>
          <p>
            All content available on this Website, including articles, eBooks, guides, videos, consultations, downloads, and other educational materials, is provided for informational and educational purposes only.
          </p>
          <p>
            Nothing contained on this Website should be interpreted as legal, tax, accounting, investment, financial, lending, or credit repair advice.
          </p>
          <p>
            Any decisions you make based on information obtained through this Website are your sole responsibility.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">No Professional Advice</h3>
          <p>
            The information provided by KBrown Consultant is not a substitute for advice from licensed attorneys, certified public accountants, financial advisors, tax professionals, lenders, or other qualified professionals.
          </p>
          <p>
            You should seek professional advice specific to your individual circumstances before making financial or business decisions.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">No Guarantee of Results</h3>
          <p>Every individual and business situation is unique.</p>
          <p>KBrown Consultant does not guarantee:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Funding approvals</li>
            <li>Loan approvals</li>
            <li>Credit score improvements</li>
            <li>Business success</li>
            <li>Financial outcomes</li>
            <li>Eligibility for any financial product or service</li>
          </ul>
          <p className="mt-4">
            Any examples, case studies, testimonials, or educational materials are presented for informational purposes only and should not be interpreted as guarantees of future results.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Third-Party Services</h3>
          <p>
            This Website may contain links to third-party websites, applications, service providers, lenders, scheduling platforms, payment providers, or educational resources.
          </p>
          <p>
            These third-party services operate independently of KBrown Consultant.
          </p>
          <p>
            We do not endorse, control, or guarantee the accuracy, availability, security, or policies of any third-party service.
          </p>
          <p>
            Users should review the terms and privacy policies of any third-party website before submitting personal information or entering into agreements.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Consultation Disclaimer</h3>
          <p>
            Consultations offered through KBrown Consultant are intended to provide educational information, general guidance, and discussion based on the information voluntarily provided by the client.
          </p>
          <p>
            Consultations should not be interpreted as legal representation, financial planning, lending decisions, tax advice, investment advice, or credit repair services.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Accuracy of Information</h3>
          <p>
            We strive to provide accurate and up-to-date information. However, laws, regulations, financial products, and industry practices may change over time.
          </p>
          <p>
            Accordingly, KBrown Consultant makes no representations or warranties regarding the completeness, accuracy, reliability, or timeliness of the information presented on this Website.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Testimonials & Client Experiences</h3>
          <p>
            Testimonials and client experiences published on this Website reflect the personal experiences of individual clients.
          </p>
          <p>
            These testimonials are not intended to represent or guarantee that current or future clients will achieve similar experiences or outcomes.
          </p>
          <p>Individual experiences will vary.</p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, KBrown Consultant shall not be responsible for any direct, indirect, incidental, consequential, special, or punitive damages resulting from:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Use of this Website</li>
            <li>Reliance on educational materials</li>
            <li>Consultation discussions</li>
            <li>Third-party services</li>
            <li>Technical issues</li>
            <li>Business or financial decisions made by users</li>
          </ul>
          <p className="mt-4">
            Your use of this Website is entirely at your own risk.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">External Links</h3>
          <p>
            Links provided to external websites are offered solely for your convenience.
          </p>
          <p>
            KBrown Consultant assumes no responsibility for the content, accuracy, availability, or privacy practices of external websites.
          </p>
          <p>Visiting third-party websites is done at your own discretion.</p>

          <div className="my-12 p-8 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20">
            <h3 className="text-2xl font-heading text-[#D4AF37] mt-0 mb-4">Compliance Statement</h3>
            <p className="text-white/90">
              KBrown Consultant is committed to providing educational resources, professional guidance, and informational content designed to help individuals and businesses better understand financial topics.
            </p>
            <p className="text-white/90 mb-0">
              Nothing on this Website should be interpreted as a promise, guarantee, or representation regarding future financial results, funding approvals, lending decisions, or credit-related outcomes.
            </p>
          </div>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Changes to This Disclaimer</h3>
          <p>
            KBrown Consultant reserves the right to update or modify this Disclaimer at any time without prior notice.
          </p>
          <p>
            Any changes will become effective immediately upon publication on this page.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Contact Information</h3>
          <p>
            If you have questions regarding this Disclaimer or the information presented on this Website, please contact us.
          </p>
          <div className="bg-black/20 p-6 rounded-xl border border-white/5 my-6">
            <p className="mb-2 text-white"><strong>KBrown Consultant</strong></p>
            <p className="mb-2"><strong className="text-white/60">Email:</strong> <a href="mailto:support@kbrownconsultant.com" className="text-[#D4AF37] hover:underline">support@kbrownconsultant.com</a></p>
            <p className="mb-2"><strong className="text-white/60">Phone:</strong> <a href="tel:0000000000" className="text-[#D4AF37] hover:underline">(000) 000-0000</a></p>
            <p className="mb-0"><strong className="text-white/60">Website:</strong> <a href="https://www.kbrownconsultant.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">www.kbrownconsultant.com</a></p>
          </div>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Final Notice</h3>
          <p>
            By accessing and using this Website, you acknowledge that you have read, understood, and agreed to this Disclaimer.
          </p>
          <p>
            If you do not agree with any part of this Disclaimer, you should discontinue use of this Website.
          </p>
        </motion.div>
      </div>
    </section>
  );
}