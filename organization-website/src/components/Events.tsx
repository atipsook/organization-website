import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Lock, ArrowRight } from 'lucide-react';
import { events } from '../data/content';

export default function Events() {
  return (
    <section id="events" className="relative py-24 lg:py-32 bg-obsidian overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-radial-gold rounded-full blur-[150px] opacity-15" />
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
            Exclusive Events
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Curated Experiences
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
            Connect with industry leaders, fellow investors, and visionaries at our invitation-only gatherings.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-deep-navy/50 border border-white/10 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/50 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-obsidian/80 backdrop-blur-sm text-gold text-xs font-semibold rounded-full flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-gold transition-colors">
                    {event.title}
                  </h3>

                  {/* Event Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Users className="w-4 h-4 text-gold" />
                      <span className="text-sm">{event.attendees} Attendees</span>
                    </div>
                  </div>

                  {/* RSVP Button */}
                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          {/* <button className="px-8 py-3 border border-white/20 text-slate-300 font-medium rounded-xl hover:border-gold/50 hover:text-gold transition-colors">
            View All Events (Members Archive)
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}
