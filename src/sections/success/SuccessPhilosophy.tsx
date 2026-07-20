import { motion } from 'framer-motion';
import { Ear, Lightbulb, Users, Compass, BookOpen, Shield } from 'lucide-react';

export default function SuccessPhilosophy() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#13243D]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0B1523] to-transparent opacity-80" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Part 1: Every Journey Begins with Understanding */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1523]/50 border border-white/10 backdrop-blur-md mb-6">
              <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
                Our Approach
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-8 leading-tight">
              Every Journey Begins with <span className="text-[#D4AF37]">Understanding</span>
            </h2>
            
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                No two clients have the same goals, challenges, or questions. That's why every consultation is centered around listening first.
              </p>
              <p>
                Whether you're exploring funding opportunities, learning about financial concepts, or planning your next business move, our approach is built on education, transparency, and personalized guidance—not one-size-fits-all solutions.
              </p>
              <p>
                Our goal is to help you better understand your options so you can make confident decisions that align with your objectives.
              </p>
            </div>
          </motion.div>

          {/* Abstract Visual / Feature Cards for Approach */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { icon: Ear, title: "Listening First" },
              { icon: BookOpen, title: "Education-Based" },
              { icon: Compass, title: "Personalized Guidance" },
              { icon: Lightbulb, title: "Confident Decisions" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[#0B1523]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-[#0B1523] transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-white font-medium">{item.title}</h3>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Part 2: Why Clients Choose Us */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Abstract Visual for Why Us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent rounded-3xl transform -rotate-3 scale-105" />
            <div className="bg-[#0B1523]/80 border border-[#D4AF37]/20 rounded-3xl p-10 backdrop-blur-xl relative z-10 shadow-2xl">
              <Users className="w-12 h-12 text-[#D4AF37] mb-6" />
              <h3 className="text-2xl font-heading text-white mb-4">Clear Communication</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                We strip away the confusing jargon and focus on practical, actionable education that makes sense for your business.
              </p>
              <div className="h-[1px] w-full bg-gradient-to-r from-[#D4AF37]/50 to-transparent mb-8" />
              <Shield className="w-12 h-12 text-[#D4AF37] mb-6" />
              <h3 className="text-2xl font-heading text-white mb-4">Professional Environment</h3>
              <p className="text-white/70 leading-relaxed">
                A respectful space where questions are encouraged and every client feels supported throughout their journey.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1523]/50 border border-white/10 backdrop-blur-md mb-6">
              <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
                The KBrown Difference
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-8 leading-tight">
              Why Clients Choose <span className="text-[#D4AF37]">KBrown Consultant</span>
            </h2>
            
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                Clients work with us because they value clear communication, practical education, and a personalized experience.
              </p>
              <p>
                We focus on understanding your goals before discussing strategies, ensuring every conversation is relevant, respectful, and informative.
              </p>
              <p>
                Our commitment is to provide a professional environment where questions are encouraged, information is presented clearly, and every client feels supported throughout their journey.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
