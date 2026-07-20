import { motion } from 'framer-motion';
import { Lock, Mail, ShieldCheck } from 'lucide-react';
import { useEffect } from 'react';

export default function BookingCalendar() {
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
    <section className="pt-32 pb-20 relative overflow-hidden bg-[#0B1523]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(19,36,61,0.50)_0%,transparent_70%)] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6 leading-tight"
          >
            Let's Start the <span className="text-[#D4AF37]">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Whether you're exploring funding opportunities, looking to better understand financial topics, or seeking guidance for your next business move, we're here to help. Schedule a one-on-one consultation at a time that works best for you.
          </motion.p>
        </div>

        {/* Premium Calendar Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-4 md:p-8 backdrop-blur-xl shadow-2xl relative">
            {/* Subtle gold glow behind calendar */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent rounded-3xl pointer-events-none" />
            
            {/* GoHighLevel Calendar */}
            <div className="w-full bg-black/20 rounded-2xl border border-white/5 relative z-10">
              <iframe 
                src="https://api.ahriat.com/widget/booking/akMULfhJ97OS3Awbag34" 
                style={{ width: '100%', border: 'none', minHeight: '950px' }} 
                scrolling="auto" 
                id="akMULfhJ97OS3Awbag34_1784546234102"
              ></iframe>
            </div>
          </div>

          {/* Trust Indicators Below Calendar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-8"
          >
            <div className="flex items-center gap-2 text-white/60">
              <Lock className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm font-medium">Secure Online Booking</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm font-medium">Personalized Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm font-medium">Confirmation Sent Instantly</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
