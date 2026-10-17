import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Shield, Building, MapPin, Mail, Phone, User } from 'lucide-react';

interface ApplicationFormProps {
  initialTier?: string;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ initialTier = 'City Partner' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityState: '',
    businessType: 'Boutique Retailer',
    selectedTier: initialTier,
    hasClimateStorage: 'yes',
    notes: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (initialTier) {
      setFormData((prev) => ({ ...prev, selectedTier: initialTier }));
    }
  }, [initialTier]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="apply" className="py-20 md:py-32 border-b border-sohan-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-sohan-pistachio mb-3">
            Confidential Territory Screening
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-sohan-cocoa tracking-tight mb-4">
            Apply for Your Metro Territory
          </h2>
          <p className="text-base sm:text-lg text-sohan-cocoa/80 leading-relaxed font-sans max-w-2xl mx-auto">
            We are selecting 20 Founding City Partners across key US metropolitan regions for the 2026 launch cohort.
          </p>
        </div>

        {submitted ? (
          <div className="p-10 rounded-3xl bg-sohan-card border-2 border-sohan-pistachio/40 text-center max-w-2xl mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full bg-sohan-pistachio/20 text-sohan-cocoa flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-sohan-pistachio" />
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-sohan-cocoa mb-3">
              Application Received
            </h3>
            <p className="text-sm text-sohan-cocoa/80 leading-relaxed mb-6">
              Thank you, <strong className="text-sohan-cocoa">{formData.fullName}</strong>. Our partner director will review your territory request for <strong className="text-sohan-cocoa">{formData.cityState || 'your city'}</strong> and contact you via email ({formData.email}) within 24 business hours with your preliminary territory status.
            </p>
            <div className="p-4 rounded-2xl bg-sohan-cream border border-sohan-border text-xs text-sohan-cocoa/75 mb-6 text-left space-y-2">
              <div className="font-bold uppercase tracking-wider text-sohan-cocoa">Next Steps in Selection:</div>
              <div>1. Territory exclusivity availability check for your zip code.</div>
              <div>2. 15-minute briefing Zoom with SOHAN executive founders.</div>
              <div>3. Dispatch of a complimentary Discovery Set tasting box to your address.</div>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-full bg-sohan-cocoa text-sohan-cream font-semibold text-xs uppercase tracking-wider hover:bg-sohan-dark transition-all"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-12 rounded-3xl bg-sohan-card border border-sohan-border shadow-sm space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sohan-cocoa mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-sohan-muted" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Elena Rostova"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-sohan-cream border border-sohan-border text-sm text-sohan-cocoa placeholder:text-sohan-muted/60 focus:outline-none focus:ring-2 focus:ring-sohan-cocoa/30"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sohan-cocoa mb-2 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sohan-muted" />
                  Business / Primary Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="elena@yourboutique.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-sohan-cream border border-sohan-border text-sm text-sohan-cocoa placeholder:text-sohan-muted/60 focus:outline-none focus:ring-2 focus:ring-sohan-cocoa/30"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sohan-cocoa mb-2 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sohan-muted" />
                  Mobile Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+1 (512) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-sohan-cream border border-sohan-border text-sm text-sohan-cocoa placeholder:text-sohan-muted/60 focus:outline-none focus:ring-2 focus:ring-sohan-cocoa/30"
                />
              </div>

              {/* City & State */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sohan-cocoa mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sohan-muted" />
                  Target Metro Area / City & State *
                </label>
                <input
                  type="text"
                  name="cityState"
                  required
                  placeholder="e.g. Austin, TX (or 78701)"
                  value={formData.cityState}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-sohan-cream border border-sohan-border text-sm text-sohan-cocoa placeholder:text-sohan-muted/60 focus:outline-none focus:ring-2 focus:ring-sohan-cocoa/30"
                />
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sohan-cocoa mb-2 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-sohan-muted" />
                  Current Business / Operation
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-sohan-cream border border-sohan-border text-sm text-sohan-cocoa focus:outline-none focus:ring-2 focus:ring-sohan-cocoa/30"
                >
                  <option value="Boutique Retailer">Concept Store / Boutique Retailer</option>
                  <option value="Spa / Salon">Luxury Spa / Esthetician Studio</option>
                  <option value="Beauty Leader">Beauty Ambassador / Direct Sales Leader</option>
                  <option value="E-Commerce Hub">E-Commerce / Micro-3PL Operator</option>
                  <option value="Independent Entrepreneur">Independent Entrepreneur / Home Studio</option>
                </select>
              </div>

              {/* Desired Partner Tier */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sohan-cocoa mb-2 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-sohan-muted" />
                  Desired Partner Tier
                </label>
                <select
                  name="selectedTier"
                  value={formData.selectedTier}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-sohan-cream border border-sohan-border text-sm text-sohan-cocoa focus:outline-none focus:ring-2 focus:ring-sohan-cocoa/30"
                >
                  <option value="Micro-Hub Ambassador">Tier 1 · Micro-Hub ($1,200 Wholesale)</option>
                  <option value="City Partner">Tier 2 · City Partner ($3,500 Wholesale - Recommended)</option>
                  <option value="Regional Master Hub">Tier 3 · Regional Master Hub ($8,000 Wholesale)</option>
                </select>
              </div>
            </div>

            {/* Climate-Controlled Storage */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sohan-cocoa mb-2">
                Do you have clean, climate-controlled, smoke-free storage space available for perfume stock? *
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-sm text-sohan-cocoa cursor-pointer">
                  <input
                    type="radio"
                    name="hasClimateStorage"
                    value="yes"
                    checked={formData.hasClimateStorage === 'yes'}
                    onChange={handleChange}
                    className="accent-sohan-cocoa"
                  />
                  <span>Yes, ready immediately (Dedicated shelf/closet/commercial space)</span>
                </label>
                <label className="flex items-center gap-2 text-sm text-sohan-cocoa cursor-pointer">
                  <input
                    type="radio"
                    name="hasClimateStorage"
                    value="no"
                    checked={formData.hasClimateStorage === 'no'}
                    onChange={handleChange}
                    className="accent-sohan-cocoa"
                  />
                  <span>No / In transition</span>
                </label>
              </div>
            </div>

            {/* Notes / Background */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sohan-cocoa mb-2">
                Brief background or questions (Optional)
              </label>
              <textarea
                name="notes"
                rows={3}
                placeholder="Tell us about your current customer base or local presence..."
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-sohan-cream border border-sohan-border text-sm text-sohan-cocoa placeholder:text-sohan-muted/60 focus:outline-none focus:ring-2 focus:ring-sohan-cocoa/30"
              />
            </div>

            <div className="pt-4 border-t border-sohan-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-sohan-cocoa/70 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-sohan-pistachio shrink-0" />
                Information is never shared or sold. 100% confidential.
              </span>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-sohan-cocoa text-sohan-cream font-bold text-xs uppercase tracking-wider hover:bg-sohan-dark transition-all shadow-md active:scale-95 disabled:opacity-50"
              >
                <span>{loading ? 'Submitting Application...' : 'Submit Territory Application'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
