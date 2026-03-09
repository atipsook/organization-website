import { Linkedin, Twitter, Instagram, ArrowRight, Mail, Phone, MapPin, Shield, Lock } from 'lucide-react';
import { companyInfo } from '../data/content';

const footerLinks = {
  membership: [
    { name: 'Membership Tiers', href: '#membership' },
    { name: 'The Council', href: '#council' },
    { name: 'Events', href: '#events' },
    { name: 'Application', href: '#application' }
  ],
  privileges: [
    { name: 'Private Equity', href: '#privileges' },
    { name: 'Hedge Funds', href: '#privileges' },
    { name: 'Tax Optimization', href: '#privileges' },
    { name: 'Legacy Planning', href: '#privileges' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Disclaimer', href: '#' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-obsidian text-white border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Brand & Newsletter */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-gold via-gold-light to-gold rounded-lg rotate-45" />
                <div className="absolute inset-0.5 bg-obsidian rounded-lg rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gold font-serif text-lg font-bold">A</span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-wider">AUREUS</span>
                <span className="text-[10px] tracking-[0.3em] text-gold/70 -mt-1">CIRCLE</span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-md font-light">
              Where sophistication meets alpha. We provide discerning investors with exclusive access to institutional-grade opportunities and a community of visionaries.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-sm">{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-gold" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-gold transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-gold" />
                <a href={`tel:${companyInfo.phone}`} className="text-sm hover:text-gold transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-serif font-semibold mb-4 text-white">Stay Informed</h4>
              <p className="text-slate-400 text-sm mb-4">Receive exclusive market insights and event invitations.</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-gold/50 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-semibold rounded-xl hover:shadow-lg hover:shadow-gold/25 transition-all"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={companyInfo.socialLinks.linkedin}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-gold/50 hover:text-gold transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.socialLinks.twitter}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-gold/50 hover:text-gold transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.socialLinks.instagram}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-gold/50 hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Membership */}
            <div>
              <h4 className="text-lg font-serif font-semibold mb-4 text-white">Membership</h4>
              <ul className="space-y-3">
                {footerLinks.membership.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-gold transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privileges */}
            <div>
              <h4 className="text-lg font-serif font-semibold mb-4 text-white">Privileges</h4>
              <ul className="space-y-3">
                {footerLinks.privileges.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-gold transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-serif font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-gold transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Shield className="w-4 h-4" />
              <span>© {new Date().getFullYear()} The Aureus Circle. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Lock className="w-4 h-4" />
              <span>SECURE • CONFIDENTIAL • EXCLUSIVE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
