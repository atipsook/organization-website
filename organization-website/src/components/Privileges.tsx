import { motion } from 'framer-motion';
import { TrendingUp, BookOpen, Monitor, Users, Briefcase, Wallet, ArrowRight } from 'lucide-react';
import { privileges } from '../data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  BookOpen,
  Monitor,
  Users,
  Briefcase,
  Wallet
};

export default function Privileges() {
  return (
    <section id="privileges" className="relative py-24 lg:py-32 bg-deep-navy overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-radial-gold rounded-full blur-[150px] opacity-30" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/20 text-gold text-sm font-semibold rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Club Benefits
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
            Join us to gain practical skills, real-world experience, and connections that will last a lifetime.
          </p>
        </motion.div>

        {/* Privileges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {privileges.map((privilege, index) => {
            const IconComponent = iconMap[privilege.icon] || TrendingUp;
            return (
              <motion.div
                key={privilege.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="h-full bg-obsidian/50 border border-white/5 rounded-2xl p-8 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-gold" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {privilege.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {privilege.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-semibold rounded-xl hover:shadow-xl hover:shadow-gold/25 transition-all duration-300 hover:scale-[1.02] group"
          >
            Join Our Club
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
