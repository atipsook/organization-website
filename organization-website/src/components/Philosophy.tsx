import { motion } from 'framer-motion';
import { Eye, Target, Award, Sparkles } from 'lucide-react';
import { companyInfo, statsData } from '../data/content';

export default function Philosophy() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue the highest standards in everything we do, from due diligence to member services.'
    },
    {
      icon: Target,
      title: 'Discretion',
      description: 'We operate with absolute confidentiality, protecting our members\' privacy and interests.'
    },
    {
      icon: Eye,
      title: 'Foresight',
      description: 'We anticipate market shifts and opportunities before they become consensus views.'
    }
  ];

  return (
    <section id="philosophy" className="relative py-24 lg:py-32 bg-obsidian overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-radial-gold rounded-full blur-[150px]" />
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
            The Philosophy
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Why We Exist
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
            In a world of noise, we provide clarity. In a world of short-term thinking, we build lasting legacies.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-gold/20 via-gold/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-deep-navy/50 border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-colors duration-300">
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                {companyInfo.mission}
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-deep-navy/50 border border-white/10 rounded-2xl p-8 hover:border-gold/20 transition-colors duration-300">
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-slate-300" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-deep-navy via-obsidian to-deep-navy rounded-3xl p-8 lg:p-12 border border-white/5"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold gold-text mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-white mb-4">Our Core Principles</h3>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h4 className="text-xl font-serif font-bold text-white mb-3">{value.title}</h4>
                <p className="text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="relative inline-block">
            <Sparkles className="absolute -top-4 -left-4 w-8 h-8 text-gold/50" />
            <blockquote className="text-2xl lg:text-3xl font-serif text-white italic max-w-4xl mx-auto leading-relaxed">
              "Rule No.1 is never lose money. Rule No.2 is never forget Rule No.1"
            </blockquote>
            <Sparkles className="absolute -bottom-4 -right-4 w-8 h-8 text-gold/50" />
          </div>
          <p className="mt-6 text-gold font-medium">— Warren Buffet</p>
        </motion.div>
      </div>
    </section>
  );
}
