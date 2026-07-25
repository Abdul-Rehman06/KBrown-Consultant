import { motion } from 'framer-motion';

export default function TermsContent() {
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
            Welcome to KBrown Consultant Group LLC. These Terms & Conditions ("Terms") govern your access to and use of our website, educational resources, consultations, and related services.
          </p>
          <p>
            By accessing or using this website, you agree to comply with these Terms. If you do not agree, please discontinue use of the website.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Acceptance of These Terms</h3>
          <p>
            By visiting this website, downloading resources, scheduling consultations, or otherwise using our services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Educational Purpose</h3>
          <p>
            The information, resources, guides, articles, consultations, and materials provided by KBrown Consultant Group LLC are intended solely for informational and educational purposes.
          </p>
          <p>
            Nothing on this website should be interpreted as legal, tax, accounting, investment, lending, financial, or credit repair advice.
          </p>
          <p>
            Users are encouraged to consult qualified professionals regarding their individual circumstances before making financial or business decisions.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Consultations</h3>
          <p>
            Consultations are designed to provide educational guidance and general information based on the details voluntarily shared by the client.
          </p>
          <p>
            Scheduling a consultation does not establish a legal, financial, or fiduciary relationship beyond the scope of the consultation provided.
          </p>
          <p>
            Consultation availability, duration, and pricing are subject to change without notice.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">No Guarantee of Results</h3>
          <p>Every individual's financial situation is different.</p>
          <p>KBrown Consultant Group LLC makes no guarantees regarding:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Funding approvals</li>
            <li>Loan eligibility</li>
            <li>Credit score changes</li>
            <li>Business outcomes</li>
            <li>Financial results</li>
            <li>Future opportunities</li>
          </ul>
          <p className="mt-4">
            Any examples, educational materials, or discussions should not be interpreted as promises or guarantees of future performance.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Third-Party Services</h3>
          <p>
            Our website may contain links to third-party websites, applications, service providers, lenders, scheduling platforms, payment processors, or educational resources.
          </p>
          <p>
            We do not own or control these third-party services and are not responsible for their content, availability, security, privacy practices, products, or decisions.
          </p>
          <p>
            Your interactions with third-party providers are governed by their own terms and policies.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Intellectual Property</h3>
          <p>Unless otherwise stated, all content available on this website, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Logos</li>
            <li>Branding</li>
            <li>Graphics</li>
            <li>Icons</li>
            <li>Website Design</li>
            <li>Educational Materials</li>
            <li>eBooks</li>
            <li>Articles</li>
            <li>Videos</li>
            <li>Downloads</li>
            <li>Text</li>
            <li>Layouts</li>
          </ul>
          <p className="mt-4">
            is the intellectual property of KBrown Consultant Group LLC and is protected by applicable copyright, trademark, and intellectual property laws.
          </p>
          <p>
            No content may be copied, reproduced, modified, distributed, or used without prior written permission.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">User Responsibilities</h3>
          <p>By using this website, you agree to:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Provide accurate information when submitting forms.</li>
            <li>Use the website only for lawful purposes.</li>
            <li>Refrain from attempting unauthorized access to our systems.</li>
            <li>Respect the intellectual property rights of KBrown Consultant Group LLC.</li>
            <li>Avoid transmitting harmful software, malware, or malicious code.</li>
          </ul>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, KBrown Consultant Group LLC shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Your use of this website</li>
            <li>Reliance on educational materials</li>
            <li>Third-party services</li>
            <li>Business decisions</li>
            <li>Financial decisions</li>
            <li>Website interruptions</li>
            <li>Technical errors</li>
          </ul>
          <p className="mt-4">Your use of this website is at your own risk.</p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Indemnification</h3>
          <p>
            You agree to indemnify and hold harmless KBrown Consultant Group LLC, its owners, employees, affiliates, contractors, and representatives from any claims, damages, losses, liabilities, costs, or expenses arising from your misuse of the website or violation of these Terms.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Website Availability</h3>
          <p>
            We strive to keep our website available and up to date. However, we do not guarantee uninterrupted access and reserve the right to modify, suspend, or discontinue any portion of the website or services at any time without prior notice.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Changes to These Terms</h3>
          <p>We reserve the right to update or modify these Terms & Conditions at any time.</p>
          <p>
            Changes become effective immediately upon publication on this page. Continued use of the website after updates constitutes acceptance of the revised Terms.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Governing Law</h3>
          <p>
            These Terms & Conditions shall be governed by and interpreted in accordance with the laws of the jurisdiction in which KBrown Consultant Group LLC operates, without regard to conflict of law principles.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Contact Information</h3>
          <p>If you have questions regarding these Terms & Conditions, please contact us.</p>
          <div className="bg-black/20 p-6 rounded-xl border border-white/5 my-6">
            <p className="mb-2 text-white"><strong>KBrown Consultant Group LLC</strong></p>
            <p className="mb-2"><strong className="text-white/60">Email:</strong> <a href="mailto:support@kbrownconsultant.com" className="text-[#D4AF37] hover:underline">support@kbrownconsultant.com</a></p>
            <p className="mb-2"><strong className="text-white/60">Phone:</strong> <a href="tel:0000000000" className="text-[#D4AF37] hover:underline">(000) 000-0000</a></p>
            <p className="mb-0"><strong className="text-white/60">Website:</strong> <a href="https://www.kbrownconsultant.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">www.kbrownconsultant.com</a></p>
          </div>

          <div className="my-12 p-8 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20">
            <h3 className="text-2xl font-heading text-[#D4AF37] mt-0 mb-4">Agreement</h3>
            <p className="text-white/90 mb-0">
              By continuing to use this website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions. Thank you for visiting KBrown Consultant Group LLC and for trusting us as a source of educational resources and professional guidance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
