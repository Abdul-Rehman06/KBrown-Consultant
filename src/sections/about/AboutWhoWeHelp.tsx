import { motion } from 'framer-motion';
import { Lightbulb, Store, Rocket, Building2, Briefcase, GraduationCap } from 'lucide-react';

const audiences = [
  {
    title: 'Entrepreneurs',
    description: 'Founders looking for strategic guidance to scale their vision.',
    icon: <Lightbulb className="w-6 h-6 text-gold" />
  },
  {
    title: 'Small Business Owners',
    description: 'Local businesses seeking to understand funding opportunities.',
    icon: <Store className="w-6 h-6 text-gold" />
  },
  {
    title: 'Startups',
    description: 'Early-stage companies navigating business credit and capital.',
    icon: <Rocket className="w-6 h-6 text-gold" />
  },
  {
    title: 'Growing Businesses',
    description: 'Established companies planning for their next phase of expansion.',
    icon: <Building2 className="w-6 h-6 text-gold" />
  },
  {
    title: 'Professionals',
    description: 'Career-driven individuals seeking personal financial strategy.',
    icon: <Briefcase className="w-6 h-6 text-gold" />
  },
  {
    title: 'Individuals',
    description: 'People seeking foundational credit and financial education.',
    icon: <GraduationCap className="w-6 h-6 text-gold" />
  }
];

export default function AboutWhoWeHelp() {
  return (
    <section className="py-24 relative bg-dark-500 border-y border-white/5 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Who We <span className="text-gold italic">Work With</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-gold-light transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-light text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}