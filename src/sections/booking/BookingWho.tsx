import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const whoWeHelp = [
  "Starting or growing a business",
  "Exploring funding opportunities",
  "Looking to better understand personal or business credit",
  "Planning future financial goals",
  "Seeking educational resources before making important financial decisions",
  "Looking for a trusted professional to answer your questions"
];

export default function BookingWho() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#13243D]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0B1523] to-transparent opacity-80" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1523]/50 border border-white/10 backdrop-blur-md mb-6">
              <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
                Is This Consultation Right for You?
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6 leading-tight">
              Who We <span className="text-[#D4AF37]">Work With</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              This consultation is designed for individuals and businesses looking for professional financial guidance and educational support.
            </p>
            <p className="text-lg text-white/80 font-medium mb-8">
              It may be a great fit if you are:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0B1523]/80 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
            
            <ul className="space-y-6 relative z-10">
              {whoWeHelp.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] mr-4 shrink-0 mt-0.5" />
                  <span className="text-white/80 text-lg leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
