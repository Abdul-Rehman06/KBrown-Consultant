import { motion } from 'framer-motion';
import { Shield, Award, HeartHandshake, TrendingUp } from 'lucide-react';

const values = [
  {
    title: 'Integrity',
    description: 'We value honesty and transparency in every interaction.',
    icon: <Shield className="w-8 h-8 text-gold" />
  },
  {
    title: 'Excellence',
    description: 'We strive to deliver exceptional experiences and valuable educational content.',
    icon: <Award className="w-8 h-8 text-gold" />
  },
  {
    title: 'Trust',
    description: 'Building long-term relationships through professionalism and reliability.',
    icon: <HeartHandshake className="w-8 h-8 text-gold" />
  },
  {
    title: 'Growth',
    description: 'Supporting continuous learning and financial confidence.',
    icon: <TrendingUp className="w-8 h-8 text-gold" />
  }
];

export default function AboutValues() {
  return (
    <section className="py-32 relative bg-dark-500 overflow-hidden border-y border-white/5">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Core <span className="text-gold italic">Values</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-gold/30 transition-all duration-500 group relative overflow-hidden text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-20 h-20 mx-auto rounded-full bg-dark flex items-center justify-center mb-8 border border-white/10 group-hover:border-gold/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gold/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-white mb-4 relative z-10">
                {value.title}
              </h3>
              <p className="text-gray-light leading-relaxed relative z-10">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}