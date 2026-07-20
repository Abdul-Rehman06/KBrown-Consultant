import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';

const reasons = [
  "Financial education",
  "Business funding guidance",
  "Credit education",
  "Educational resources",
  "Consultation scheduling",
  "Business strategy discussions"
];

export default function ContactWhyReachOut() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#13243D]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0B1523] to-transparent opacity-80" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Why Reach Out */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1523]/50 border border-white/10 backdrop-blur-md mb-6">
              <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
                Why Reach Out?
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6 leading-tight">
              We're Here to <span className="text-[#D4AF37]">Help</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Our team is available to help answer general questions related to:
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {reasons.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-white/60 italic text-sm">
              If we aren't the right fit for your needs, we'll do our best to point you toward helpful resources whenever possible.
            </p>
          </motion.div>

          {/* Our Commitment */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0B1523]/80 border border-[#D4AF37]/20 rounded-3xl p-8 md:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(212,175,55,0.10)_0%,transparent_70%)] rounded-full pointer-events-none" />
            
            <h3 className="text-2xl font-heading text-white mb-8 relative z-10 flex items-center">
              <ShieldCheck className="w-8 h-8 text-[#D4AF37] mr-3" />
              Our Commitment to You
            </h3>

            <div className="space-y-8 relative z-10">
              <div className="flex gap-4">
                <HeartHandshake className="w-6 h-6 text-[#D4AF37] shrink-0" />
                <p className="text-white/70 leading-relaxed">
                  Every inquiry is treated with professionalism, confidentiality, and respect.
                </p>
              </div>
              
              <div className="flex gap-4">
                <Eye className="w-6 h-6 text-[#D4AF37] shrink-0" />
                <p className="text-white/70 leading-relaxed">
                  We understand that financial conversations are personal, and we're committed to creating a comfortable environment where you can ask questions and receive clear, educational guidance.
                </p>
              </div>

              <div className="flex gap-4">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37] shrink-0" />
                <p className="text-white/70 leading-relaxed">
                  Our goal is to provide helpful information that supports informed decision-making—not pressure or unrealistic expectations.
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
