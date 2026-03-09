import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-deep-navy overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-radial-gold rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/20 text-gold text-sm font-semibold rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Have questions about our club? Want to learn more about events or membership? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Club Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-slate-400">{companyInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href={`mailto:${companyInfo.email}`} className="text-slate-400 hover:text-gold transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href={`tel:${companyInfo.phone}`} className="text-slate-400 hover:text-gold transition-colors">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Meeting Times */}
            <div className="bg-obsidian/50 border border-white/10 rounded-xl p-6 mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Weekly Meetings</h4>
              <p className="text-slate-400 mb-2">Every Thursday at 7:00 PM</p>
              <p className="text-slate-500 text-sm">Business School Room 201</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-obsidian/50 border border-white/10 rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="john@school.edu"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                  <textarea
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-semibold rounded-xl hover:shadow-lg hover:shadow-gold/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
