import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';

const videos = [
  {
    title: 'Business Funding Overview',
    duration: '12:45',
    category: 'Funding'
  },
  {
    title: 'Credit Education Basics',
    duration: '08:30',
    category: 'Credit'
  },
  {
    title: 'Financial Planning Tips',
    duration: '15:20',
    category: 'Planning'
  },
  {
    title: 'Business Strategy Sessions',
    duration: '22:15',
    category: 'Strategy'
  }
];

export default function ResourcesVideos() {
  return (
    <section className="py-24 relative bg-dark overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Learn Through <span className="text-gold italic">Video</span>
          </h2>
          <p className="text-gray-light text-lg">Watch our latest masterclasses and educational sessions.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl border border-white/10 hover:border-gold/30 transition-all duration-500 group overflow-hidden cursor-pointer"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full h-48 bg-dark-500 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent z-0" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] z-0" />
                
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-dark ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 bg-dark/80 backdrop-blur-md px-2 py-1 rounded text-xs font-medium text-white border border-white/10 flex items-center z-10">
                  <Clock className="w-3 h-3 mr-1 text-gold" />
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs font-semibold text-gold tracking-widest uppercase mb-2">
                  {video.category}
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-4 group-hover:text-gold-light transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="text-sm font-semibold text-white/70 group-hover:text-gold flex items-center transition-colors">
                  Watch Now <Play className="w-3 h-3 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}