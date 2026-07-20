import { motion } from 'framer-motion';

export default function CreditConsultation() {
  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Animated Gold Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-500 via-dark to-dark-300 border border-gold/20" />
          <motion.div 
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_50%)] bg-[length:200%_200%]"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015]" />

          
        </motion.div>
      </div>
    </section>
  );
}