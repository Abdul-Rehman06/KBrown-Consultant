import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, CreditCard, LineChart, Building2, BookOpen, Users, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 'funding',
    icon: Briefcase,
    title: 'Business Funding Guidance',
    subtitle: 'Explore Funding Opportunities with Greater Confidence',
    description: [
      'Understanding funding options can be challenging, especially with so many products, requirements, and financial considerations available today.',
      'Our Business Funding Guidance service is designed to help you better understand common funding concepts, prepare for the process, and explore educational resources that support informed decision-making.',
      "We'll discuss topics such as funding readiness, business planning, financial organization, and general funding education so you can approach future opportunities with greater confidence."
    ],
    listTitle: "What's Included",
    items: [
      'Personalized consultation',
      'Funding education',
      'Business readiness guidance',
      'Financial preparation discussions',
      'Educational resources',
      'Strategic planning conversations'
    ]
  },
  {
    id: 'credit',
    icon: CreditCard,
    title: 'Credit Education',
    subtitle: 'Build Knowledge Before Making Financial Decisions',
    description: [
      'Credit plays an important role in many financial situations, but understanding how it works can often feel overwhelming.',
      'Our Credit Education service provides practical, easy-to-understand information designed to help you better understand credit concepts, financial habits, and the role credit may play in personal and business financial planning.',
      'Our goal is to educate, answer questions, and help you make informed decisions based on your individual circumstances.'
    ],
    listTitle: "Topics We Cover",
    items: [
      'Personal credit fundamentals',
      'Business credit education',
      'Financial literacy',
      'Credit reporting concepts',
      'Responsible financial habits',
      'Educational resources'
    ]
  },
  {
    id: 'strategy',
    icon: LineChart,
    title: 'Financial Strategy',
    subtitle: 'Plan Today with Tomorrow in Mind',
    description: [
      'Every successful financial journey begins with a thoughtful strategy.',
      'Through personalized consultations, we help individuals and business owners explore financial planning concepts, organize priorities, and develop a clearer understanding of available options based on their goals.',
      'Our approach emphasizes education, long-term thinking, and practical planning rather than short-term solutions.'
    ],
    listTitle: "Areas of Discussion",
    items: [
      'Financial goal planning',
      'Business strategy',
      'Growth planning',
      'Organization and preparation',
      'Decision-making frameworks',
      'Long-term financial awareness'
    ]
  },
  {
    id: 'consulting',
    icon: Building2,
    title: 'Business Consulting',
    subtitle: 'Guidance for Entrepreneurs and Growing Businesses',
    description: [
      "Whether you're launching a new business or planning your next stage of growth, having access to experienced guidance can help you navigate important decisions with greater confidence.",
      'Our consulting sessions focus on discussing business planning, operational considerations, financial awareness, and educational resources designed to support entrepreneurs throughout their journey.'
    ],
    listTitle: "Consultation Topics",
    items: [
      'Business planning',
      'Growth strategies',
      'Financial organization',
      'Business education',
      'Entrepreneur resources',
      'Strategic discussions'
    ]
  },
  {
    id: 'resources',
    icon: BookOpen,
    title: 'Educational Resources',
    subtitle: 'Continue Learning Beyond Your Consultation',
    description: [
      'Knowledge is one of the most valuable investments you can make.',
      'Our growing collection of educational materials is designed to help you continue learning long after your consultation ends.',
      'From downloadable eBooks and practical guides to planning worksheets and articles, our resource library supports continuous learning for individuals and business owners alike.'
    ],
    listTitle: "Available Resources",
    items: [
      'eBooks',
      'Business guides',
      'Financial planning workbooks',
      'Educational articles',
      'Business checklists',
      'Learning materials'
    ]
  },
  {
    id: 'personalized',
    icon: Users,
    title: 'Personalized Consultations',
    subtitle: 'One Conversation Can Create Greater Clarity',
    description: [
      'Every consultation begins with listening.',
      'We take the time to understand your goals, answer your questions, and provide educational guidance tailored to your unique situation.',
      'Our consultations are designed to help you better understand financial concepts, explore available resources, and identify practical next steps that align with your objectives.',
      'Every conversation is professional, confidential, and focused on helping you make informed decisions.'
    ],
    listTitle: "What to Expect",
    items: [
      'One-on-one professional discussion',
      'Tailored educational guidance',
      'Clear answers to your questions',
      'Exploration of available options',
      'Confidential and respectful environment',
      'Actionable insights and resources'
    ]
  }
];

export default function ServiceCards() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="pb-24 pt-12 relative bg-[#0B1523] z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {services.map((service, index) => {
            const isExpanded = expandedId === service.id;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/5 border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm ${
                  isExpanded ? 'border-[#D4AF37]/40 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'border-white/10 hover:border-[#D4AF37]/30'
                }`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  className="w-full text-left p-6 md:p-8 flex items-start md:items-center justify-between group"
                >
                  <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center transition-colors duration-300 ${isExpanded ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-white/5 text-white/70 group-hover:text-[#D4AF37]'}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-[#D4AF37] italic">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className={`mt-4 md:mt-0 p-2 shrink-0 rounded-full border transition-all duration-300 ${isExpanded ? 'border-[#D4AF37] text-[#D4AF37] rotate-180 bg-[#D4AF37]/10' : 'border-white/10 text-white/50 group-hover:border-[#D4AF37]/30'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-4 border-t border-white/10">
                        <div className="grid md:grid-cols-3 gap-8">
                          <div className="md:col-span-2 space-y-4">
                            {service.description.map((paragraph, pIdx) => (
                              <p key={pIdx} className="text-white/70 leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                            <button
                              onClick={() => setExpandedId(null)}
                              className="text-[#D4AF37] text-sm font-medium hover:underline mt-4 inline-block"
                            >
                              Show Less
                            </button>
                          </div>
                          <div className="bg-[#0B1523]/50 rounded-xl p-6 border border-white/5">
                            <h4 className="text-white font-heading font-semibold mb-4 text-lg">
                              {service.listTitle}
                            </h4>
                            <ul className="space-y-3">
                              {service.items.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-start text-white/70 text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mr-3 mt-0.5 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
