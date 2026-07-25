import { motion } from 'framer-motion';

export default function AccessibilityContent() {
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
            At KBrown Consultant Group LLC, we believe that everyone should have equal access to information, educational resources, and online services. We are committed to providing a website experience that is inclusive, accessible, and user-friendly for all visitors, regardless of ability or technology.
          </p>
          <p>
            Our goal is to continually improve the accessibility and usability of our website while following recognized accessibility standards and best practices.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Our Commitment</h3>
          <p>
            We are dedicated to creating a digital experience that is accessible to as many users as possible. Accessibility is an ongoing effort, and we continuously evaluate and improve our website to enhance usability for all visitors.
          </p>
          <p>
            We strive to provide an experience that is intuitive, responsive, and accessible across a wide range of devices, browsers, and assistive technologies.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Accessibility Features</h3>
          <p>
            Our website is designed with accessibility in mind and includes features such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Responsive layouts for desktop, tablet, and mobile devices</li>
            <li>Clear navigation and consistent page structure</li>
            <li>Readable typography with appropriate spacing</li>
            <li>High-contrast color combinations for improved readability</li>
            <li>Keyboard-accessible navigation where applicable</li>
            <li>Descriptive headings and organized content hierarchy</li>
            <li>Alternative text for meaningful images where appropriate</li>
            <li>Clearly labeled buttons, links, and form fields</li>
            <li>Accessible focus indicators for keyboard users</li>
            <li>Compatibility with modern screen readers and assistive technologies where possible</li>
          </ul>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Accessibility Standards</h3>
          <p>
            We strive to align our website with the principles of the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, to help ensure an inclusive browsing experience.
          </p>
          <p>
            Accessibility is an ongoing process, and we continue working toward improving our website as technologies and standards evolve.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Browser & Device Compatibility</h3>
          <p>
            Our website is designed to function across modern browsers and devices, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Microsoft Edge</li>
            <li>Safari</li>
            <li>Mobile browsers on iOS and Android</li>
          </ul>
          <p className="mt-4">
            For the best experience, we recommend using the latest version of your preferred browser.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Ongoing Improvements</h3>
          <p>
            Accessibility is not a one-time effort. We regularly review our website and continue implementing improvements that enhance usability, navigation, readability, and compatibility with assistive technologies.
          </p>
          <p>
            As new content and features are added, we aim to ensure they meet the same accessibility standards and provide a consistent experience for all users.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Need Assistance?</h3>
          <p>
            If you experience difficulty accessing any part of this website, encounter an accessibility barrier, or have suggestions on how we can improve your experience, we'd love to hear from you.
          </p>
          <p>
            We are committed to responding promptly and working toward an appropriate solution whenever possible.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Contact Us</h3>
          <div className="bg-black/20 p-6 rounded-xl border border-white/5 my-6">
            <p className="mb-2 text-white"><strong>KBrown Consultant Group LLC</strong></p>
            <p className="mb-2"><strong className="text-white/60">Email:</strong> <a href="mailto:support@kbrownconsultant.com" className="text-[#D4AF37] hover:underline">support@kbrownconsultant.com</a></p>
            <p className="mb-2"><strong className="text-white/60">Phone:</strong> <a href="tel:0000000000" className="text-[#D4AF37] hover:underline">(000) 000-0000</a></p>
            <p className="mb-0"><strong className="text-white/60">Website:</strong> <a href="https://www.kbrownconsultant.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">www.kbrownconsultant.com</a></p>
          </div>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Feedback</h3>
          <p>
            We welcome your feedback regarding the accessibility of our website.
          </p>
          <p>
            If you have suggestions, encounter technical issues, or require assistance accessing any content or resources, please contact us using the information above. Your feedback helps us improve and provide a better experience for all visitors.
          </p>

          <h3 className="text-2xl font-heading text-white mt-10 mb-4">Third-Party Content</h3>
          <p>
            Some portions of our website may include third-party content or services, such as embedded scheduling tools, payment platforms, videos, or external resources.
          </p>
          <p>
            While we strive to work with providers that support accessibility, we cannot guarantee the accessibility of third-party content or websites that are not under our direct control.
          </p>
          <p>
            If you experience difficulty using a third-party feature integrated into our website, please let us know, and we'll do our best to assist you or provide an alternative solution whenever possible.
          </p>

          <div className="my-12 p-8 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20">
            <h3 className="text-2xl font-heading text-[#D4AF37] mt-0 mb-4">Our Promise</h3>
            <p className="text-white/90">
              At KBrown Consultant Group LLC, we believe accessibility is an important part of creating an exceptional online experience.
            </p>
            <p className="text-white/90 mb-0">
              We remain committed to improving our website, embracing accessibility best practices, and ensuring our educational resources and services are available to as many people as possible.
            </p>
          </div>

          <p className="text-center text-white/60 mt-12 font-medium">
            Thank you for visiting KBrown Consultant Group LLC.
          </p>
        </motion.div>
      </div>
    </section>
  );
}