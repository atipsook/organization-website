import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Lock, Mail, Phone, User, Building, DollarSign, Send } from 'lucide-react';
import { companyInfo } from '../data/content';

const steps = [
  { id: 1, title: 'Personal Info', description: 'Basic details about you' },
  { id: 2, title: 'Investment Profile', description: 'Your financial background' },
  { id: 3, title: 'Referral', description: 'How you heard about us' },
  { id: 4, title: 'Review', description: 'Confirm your application' }
];

export default function Application() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    investmentRange: '',
    referralSource: '',
    referralCode: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <section id="application" className="relative py-24 lg:py-32 bg-deep-navy overflow-hidden">
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
            Application
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Request an Invitation
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Membership is by invitation only. Submit your candidacy and our team will be in touch.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    currentStep > step.id
                      ? 'bg-gold text-obsidian'
                      : currentStep === step.id
                      ? 'bg-gold/20 border-2 border-gold text-gold'
                      : 'bg-white/5 border border-white/20 text-slate-500'
                  }`}>
                    {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
                  </div>
                  <span className={`mt-2 text-xs font-medium hidden sm:block ${currentStep >= step.id ? 'text-white' : 'text-slate-500'}`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 lg:w-24 h-px mx-2 ${currentStep > step.id ? 'bg-gold' : 'bg-white/10'}`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-obsidian/50 border border-white/10 rounded-2xl p-8"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-serif font-bold text-white mb-6">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">First Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-gold/50 focus:outline-none transition-colors"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Last Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-gold/50 focus:outline-none transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-gold/50 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-gold/50 focus:outline-none transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Investment Profile */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-serif font-bold text-white mb-6">Investment Profile</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Company / Organization</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-gold/50 focus:outline-none transition-colors"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Investment Range *</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <select
                        name="investmentRange"
                        value={formData.investmentRange}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="" className="bg-obsidian">Select range</option>
                        <option value="1m-5m" className="bg-obsidian">$1M - $5M</option>
                        <option value="5m-25m" className="bg-obsidian">$5M - $25M</option>
                        <option value="25m-100m" className="bg-obsidian">$25M - $100M</option>
                        <option value="100m+" className="bg-obsidian">$100M+</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your investment interests..."
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Referral */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-serif font-bold text-white mb-6">Referral Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">How did you hear about us? *</label>
                    <select
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="" className="bg-obsidian">Select source</option>
                      <option value="member" className="bg-obsidian">Existing Member</option>
                      <option value="professional" className="bg-obsidian">Professional Advisor</option>
                      <option value="event" className="bg-obsidian">Event/Conference</option>
                      <option value="search" className="bg-obsidian">Search</option>
                      <option value="press" className="bg-obsidian">Press/Media</option>
                      <option value="other" className="bg-obsidian">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Referral Code (if applicable)</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="text"
                        name="referralCode"
                        value={formData.referralCode}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-gold/50 focus:outline-none transition-colors"
                        placeholder="Enter code"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-serif font-bold text-white mb-6">Review Your Application</h3>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-500">Name</p>
                      <p className="text-white">{formData.firstName} {formData.lastName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="text-white">{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Investment Range</p>
                      <p className="text-white">{formData.investmentRange || 'Not specified'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Referral Source</p>
                      <p className="text-white capitalize">{formData.referralSource || 'Not specified'}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-500">
                  By submitting this application, you agree to our privacy policy and terms of membership.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                currentStep === 1
                  ? 'text-slate-600 cursor-not-allowed'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>

            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-semibold rounded-xl hover:shadow-lg hover:shadow-gold/25 transition-all"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-semibold rounded-xl hover:shadow-lg hover:shadow-gold/25 transition-all"
              >
                <Send className="w-5 h-5" />
                Submit Application
              </button>
            )}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 mb-4">Prefer to contact us directly?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
              <Mail className="w-5 h-5" />
              {companyInfo.email}
            </a>
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
              <Phone className="w-5 h-5" />
              {companyInfo.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
