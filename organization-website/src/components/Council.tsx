import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { councilMembers } from '../data/content';

export default function Council() {
  return (
    <section id="council" className="relative py-24 lg:py-32 bg-deep-navy overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-gold rounded-full blur-[150px] opacity-20" />
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
            The Council
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Meet Our Officer
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
            A student leader responsible for organizing activities, promoting financial literacy, and helping manage the operations of the finance club.
          </p>
        </motion.div>

        {/* Council Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {councilMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Card */}
              <div className="relative">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />

                  {/* Social Links (shown on hover) */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.credentials}
                      className="flex-1 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-lg text-center hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-gold transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-3">
                    {member.credentials}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisory Board Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500">
            
          </p>
        </motion.div>
      </div>
    </section>
  );
}
