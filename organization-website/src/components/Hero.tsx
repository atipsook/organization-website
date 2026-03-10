import { ArrowRight, Star, BookOpen, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/content';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-obsidian"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-deep-navy to-obsidian" />

        {/* Radial Gold Glow */}
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-radial-gold rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-gold/20 rounded-full"
            >
              <Star className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold/80 tracking-wide">ESTABLISHED {companyInfo.established}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight"
            >
              Investing in Tomorrow's{' '}
              <span className="gold-text">Leaders</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-slate-400 leading-relaxed max-w-xl font-light"
            >
              {companyInfo.taglineFull}. We empower students with practical financial knowledge and real-world investment experience.
            </motion.p>

            {/* Value Propositions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                { icon: TrendingUp, label: 'Stock Competitions' },
                { icon: BookOpen, label: 'Workshops' },
                { icon: Users, label: 'Mentorship' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-xl">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-semibold rounded-xl hover:shadow-xl hover:shadow-gold/25 transition-all duration-300 hover:scale-[1.02] group"
              >
                Join Our Club
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#philosophy"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-slate-300 font-medium rounded-xl border border-white/20 hover:border-gold/50 hover:text-gold transition-all duration-300"
              >
                Learn More
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-obsidian overflow-hidden bg-deep-navy">
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 20}`}
                      alt="Member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-slate-400">Join <span className="text-gold font-semibold">20+</span> student members</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:h-[700px]"
          >
            {/* Main Image Container */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-gold/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-deep-navy to-obsidian rounded-3xl p-1 border border-gold/20">
                <img
                  src="/image.png"
                  alt="Students learning finance"
                  className="rounded-2xl w-full h-[500px] lg:h-[650px] object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent rounded-2xl" />

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-8 -left-8 bg-obsidian/90 backdrop-blur-xl border border-gold/30 rounded-2xl p-6 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-financial-green/10 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-7 h-7 text-financial-green" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Competition Wins</p>
                      <p className="text-2xl font-bold text-white">3+</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -top-6 -right-6 bg-obsidian/90 backdrop-blur-xl border border-gold/20 rounded-2xl p-5"
                >
                  <div className="text-center">
                    <p className="text-sm text-slate-400 mb-1">Club Portfolio</p>
                    <p className="text-2xl font-bold gold-text">5000</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-4 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            <div className="absolute -left-4 bottom-1/4 w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
