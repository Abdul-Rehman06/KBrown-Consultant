import { motion } from 'framer-motion';
import { Mail, Phone, Clock } from 'lucide-react';
import { useEffect } from 'react';

export default function ContactForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.ahriat.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-24 relative bg-[#0B1523] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-white/70 mb-12 leading-relaxed">
              Have a question or need more information? Complete the contact form, and a member of our team will review your message and respond as soon as possible. We look forward to learning more about how we can support your financial education and business goals.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-heading text-white mb-2">Email</h3>
                  <p className="text-white/60 mb-2 text-sm">
                    Have a question? Send us an email anytime, and we'll get back to you as soon as possible.
                  </p>
                  <a href="mailto:support@kbrownconsultant.com" className="text-[#D4AF37] hover:text-white transition-colors">
                    support@kbrownconsultant.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-heading text-white mb-2">Phone</h3>
                  <p className="text-white/60 mb-2 text-sm">
                    Prefer to speak with someone directly? Give us a call during business hours.
                  </p>
                  <a href="tel:0000000000" className="text-[#D4AF37] hover:text-white transition-colors">
                    (000) 000-0000
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-heading text-white mb-2">Office Hours</h3>
                  <div className="space-y-1 text-white/70">
                    <p className="flex justify-between max-w-[200px]">
                      <span>Monday – Friday</span>
                      <span>9:00 AM – 6:00 PM</span>
                    </p>
                    <p className="flex justify-between max-w-[200px]">
                      <span>Saturday</span>
                      <span>By Appointment</span>
                    </p>
                    <p className="flex justify-between max-w-[200px]">
                      <span>Sunday</span>
                      <span className="text-white/40">Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
            
            <h3 className="text-2xl font-heading text-white mb-2 relative z-10">Send Us a Message</h3>
            <p className="text-white/60 mb-8 relative z-10 text-sm">
              Please complete the contact form with as much detail as possible so we can better understand your inquiry.
            </p>

            <div className="relative z-10 w-full min-h-[736px] bg-transparent rounded-xl overflow-hidden">
              <iframe 
                src="https://api.ahriat.com/widget/form/VzLby7YfTeuwzOjECsFx" 
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '0px', minHeight: '736px' }} 
                id="inline-VzLby7YfTeuwzOjECsFx"  
                data-layout="{'id':'INLINE'}" 
                data-trigger-type="alwaysShow" 
                data-trigger-value="" 
                data-activation-type="alwaysActivated" 
                data-activation-value="" 
                data-deactivation-type="neverDeactivate" 
                data-deactivation-value="" 
                data-form-name="Contact Form" 
                data-height="736" 
                data-layout-iframe-id="inline-VzLby7YfTeuwzOjECsFx" 
                data-form-id="VzLby7YfTeuwzOjECsFx" 
                title="Contact Form" 
              > 
              </iframe> 
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
