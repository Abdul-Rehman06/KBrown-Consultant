import { motion } from 'framer-motion';

export default function AboutFounder() {
  return (
    <section className="py-24 relative bg-dark border-t border-white/5 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-[100%] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Founder Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.15)] group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10 opacity-80" />
            <motion.img 
              src="/kevin-main.jpeg" 
              alt="Kevin Brown - Founder" 
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Small decorative element */}
            <div className="absolute bottom-6 left-6 z-20 glass-dark px-6 py-4 rounded-xl border border-white/10 backdrop-blur-md">
              <h4 className="text-xl font-heading font-bold text-white mb-1">Kevin Brown</h4>
              <p className="text-gold text-sm uppercase tracking-wider">Founder & CEO</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white mb-8"
            >
              Meet the <span className="text-gold italic">Founder</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-light leading-relaxed"
            >
              <p className="font-medium text-white text-xl border-l-2 border-gold pl-6 py-2">
                KBrown Consultant is led by a commitment to helping individuals and businesses navigate financial topics with confidence.
              </p>
              <p>
                Through education, strategic thinking, and a client-first mindset, our goal is to provide practical guidance that helps people better understand financial opportunities and make informed decisions for the future.
              </p>
              <p className="text-sm text-gray/60 italic mt-8 border border-white/5 p-4 rounded-lg bg-white/5">
                (This section is a placeholder. We will replace this with Kevin's personal story, experience, and credentials once provided.)
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}