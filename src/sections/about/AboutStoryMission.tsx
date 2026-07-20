import { motion } from 'framer-motion';
import { Target, Compass, BarChart3, LineChart, PieChart } from 'lucide-react';

export default function AboutStoryMission() {
  return (
    <section className="py-24 relative bg-dark-500 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* OUR STORY */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left: Premium Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl glass-dark border border-white/5 p-8 flex flex-col justify-between group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-dark-300/50" />
            
            {/* Abstract Graphic Elements */}
            <div className="absolute top-[20%] right-[10%] w-32 h-32 rounded-full border border-gold/20 flex items-center justify-center animate-spin-slow">
              <div className="w-24 h-24 rounded-full border border-gold/30 border-t-transparent" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 backdrop-blur-md border border-white/10">
                <BarChart3 className="w-8 h-8 text-gold" />
              </div>
              <div className="w-3/4 h-4 bg-white/10 rounded mb-4" />
              <div className="w-1/2 h-4 bg-white/5 rounded" />
            </div>

            {/* Floating charts */}
            <div className="relative z-10 grid grid-cols-2 gap-4 mt-auto">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-md group-hover:-translate-y-2 transition-transform duration-500">
                <PieChart className="w-6 h-6 text-gold mb-3" />
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

          {/* Right: Our Story Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white mb-8"
            >
              Our <span className="text-gold italic">Story</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-light leading-relaxed"
            >
              <p className="font-medium text-white">
                KBrown Consultant was created with one simple goal:
              </p>
              <p>
                To make financial education and strategic guidance more accessible for individuals and business owners looking to make informed financial decisions.
              </p>
              <p>
                We understand that navigating funding opportunities and financial planning can feel overwhelming. That's why we focus on simplifying complex topics through educational resources, consultations, and personalized guidance.
              </p>
              <p>
                Our goal isn't simply to provide information—it's to help clients build confidence in every financial decision they make.
              </p>
            </motion.div>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-dark border border-white/10 rounded-3xl p-10 hover:border-gold/30 transition-colors duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <Target className="w-32 h-32 text-gold" />
            </div>
            <div className="w-14 h-14 rounded-full bg-dark-300 flex items-center justify-center mb-8 border border-white/5 group-hover:border-gold/50 transition-colors">
              <Target className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-white mb-6">Our Mission</h3>
            <p className="text-lg text-gray-light leading-relaxed relative z-10">
              To empower individuals and businesses through financial education, strategic consulting, and practical resources that support informed financial decision-making.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-dark border border-white/10 rounded-3xl p-10 hover:border-gold/30 transition-colors duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <Compass className="w-32 h-32 text-gold" />
            </div>
            <div className="w-14 h-14 rounded-full bg-dark-300 flex items-center justify-center mb-8 border border-white/5 group-hover:border-gold/50 transition-colors">
              <Compass className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-white mb-6">Our Vision</h3>
            <p className="text-lg text-gray-light leading-relaxed relative z-10">
              To become a trusted financial consulting brand recognized for transparency, innovation, education, and client-focused guidance.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}