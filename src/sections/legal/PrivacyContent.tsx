import { motion } from 'framer-motion';

export default function PrivacyContent() {
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
            At KBrown Consultant ("Company," "we," "our," or "us"), we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or interact with our services.
          </p>
          <p>
            By using this website, you agree to the practices described in this Privacy Policy.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Information We Collect</h3>
          <p>We may collect information that you voluntarily provide when you:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Schedule a consultation</li>
            <li>Complete a contact form</li>
            <li>Download educational resources</li>
            <li>Subscribe to our newsletter</li>
            <li>Communicate with our team</li>
          </ul>
          <p className="mt-4">This information may include:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Business Name</li>
            <li>Information you choose to provide in forms or messages</li>
          </ul>
          <p className="mt-4">We may also collect certain technical information automatically, including:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>IP Address</li>
            <li>Browser Type</li>
            <li>Device Information</li>
            <li>Pages Visited</li>
            <li>Time Spent on Our Website</li>
            <li>Referring Website</li>
            <li>Cookies and Similar Technologies</li>
          </ul>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">How We Use Your Information</h3>
          <p>The information we collect may be used to:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Respond to inquiries</li>
            <li>Schedule consultations</li>
            <li>Deliver requested educational resources</li>
            <li>Improve our website and user experience</li>
            <li>Communicate important updates</li>
            <li>Send newsletters or educational content (where permitted)</li>
            <li>Maintain website security</li>
            <li>Comply with applicable legal obligations</li>
          </ul>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Cookies and Analytics</h3>
          <p>
            Our website may use cookies and similar technologies to improve functionality, understand visitor behavior, and enhance your browsing experience.
          </p>
          <p>
            We may also use analytics services to better understand how visitors interact with our website. You can adjust your browser settings to refuse cookies; however, some website features may not function properly.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Third-Party Services</h3>
          <p>Our website may integrate with trusted third-party platforms to provide certain services, including:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>GoHighLevel</li>
            <li>Calendar Scheduling</li>
            <li>Email Communication</li>
            <li>Analytics Services</li>
            <li>Payment Providers (if applicable)</li>
            <li>Video Hosting Platforms</li>
            <li>Cloud Hosting Providers</li>
          </ul>
          <p className="mt-4">These providers operate under their own privacy policies.</p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Data Security</h3>
          <p>
            We implement reasonable administrative, technical, and organizational safeguards designed to help protect your personal information against unauthorized access, disclosure, alteration, or destruction.
          </p>
          <p>
            While we strive to protect your information, no method of internet transmission or electronic storage can be guaranteed to be completely secure.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Information Sharing</h3>
          <p>We do not sell your personal information. We may share information only when necessary to:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Provide requested services</li>
            <li>Operate our business</li>
            <li>Comply with legal obligations</li>
            <li>Protect our legal rights</li>
            <li>Work with trusted service providers acting on our behalf</li>
          </ul>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Data Retention</h3>
          <p>
            We retain personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy or as required by applicable law.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Your Rights</h3>
          <p>Depending on your location and applicable laws, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Request access to your information</li>
            <li>Request corrections</li>
            <li>Request deletion of your information</li>
            <li>Withdraw consent where applicable</li>
            <li>Request a copy of your personal information</li>
            <li>Object to certain processing activities</li>
          </ul>
          <p className="mt-4">To exercise these rights, please contact us using the information below.</p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Third-Party Links</h3>
          <p>
            Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies before providing personal information.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Children's Privacy</h3>
          <p>
            Our website and services are intended for adults and are not directed toward children under the age required by applicable law. We do not knowingly collect personal information from children.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or business operations. Any updates will be posted on this page with a revised Effective Date.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Contact Us</h3>
          <p>If you have questions about this Privacy Policy or how your information is handled, please contact us.</p>
          <div className="bg-black/20 p-6 rounded-xl border border-white/5 my-6">
            <p className="mb-2 text-white"><strong>KBrown Consultant</strong></p>
            <p className="mb-2"><strong className="text-white/60">Email:</strong> <a href="mailto:support@kbrownconsultant.com" className="text-[#D4AF37] hover:underline">support@kbrownconsultant.com</a></p>
            <p className="mb-2"><strong className="text-white/60">Phone:</strong> <a href="tel:0000000000" className="text-[#D4AF37] hover:underline">(000) 000-0000</a></p>
            <p className="mb-0"><strong className="text-white/60">Website:</strong> <a href="https://www.kbrownconsultant.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">www.kbrownconsultant.com</a></p>
          </div>

          <div className="my-12 p-8 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20">
            <h3 className="text-2xl font-heading text-[#D4AF37] mt-0 mb-4">Privacy Commitment</h3>
            <p className="text-white/90 mb-0">
              We are committed to handling your information responsibly, transparently, and in accordance with applicable privacy laws. Protecting your trust is an important part of everything we do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
