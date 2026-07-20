import { motion } from 'framer-motion';
import { Target, Monitor, LineChart } from 'lucide-react';

export default function FundingConsultation() {
  return (
    <section className="py-24 relative bg-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Premium Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl glass-dark border border-white/5 p-8 flex flex-col justify-between group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-dark-300/50" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 backdrop-blur-md border border-white/10">
                <Target className="w-8 h-8 text-gold" />
              </div>
              <div className="w-3/4 h-4 bg-white/10 rounded mb-4" />
              <div className="w-1/2 h-4 bg-white/5 rounded" />
            </div>

            {/* Floating abstract UI elements */}
            <div className="relative z-10 grid grid-cols-2 gap-4 mt-auto">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-md group-hover:-translate-y-2 transition-transform duration-500">
                <Monitor className="w-6 h-6 text-gold mb-3" />
                <div className="w-full h-2 bg-white/10 rounded mb-2" />
                <div className="w-2/3 h-2 bg-white/5 rounded" />
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-md group-hover:-translate-y-4 transition-transform duration-500 delay-100">
                <LineChart className="w-6 h-6 text-gold mb-3" />
                <div className="w-full h-2 bg-white/10 rounded mb-2" />
                <div className="w-3/4 h-2 bg-white/5 rounded" />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight"
            >
              Personalized Guidance <br/>
              <span className="text-gold italic">Every Step of the Way</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-light leading-relaxed"
            >
              <p className="font-medium text-white text-xl border-l-2 border-gold pl-6 py-2">
                Every consultation begins with understanding your goals.
              </p>
              <p>
                We provide educational guidance, discuss general funding concepts, and help you better understand available options based on the information you share.
              </p>
              <p className="italic text-white/70">
                Our role is to support informed decision-making—not to guarantee outcomes.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}