import React from 'react';
import { ShieldCheck, Scale, Award, Lock, FileText } from 'lucide-react';

export const TrustAndCompliance: React.FC = () => {
  return (
    <section className="py-20 md:py-32 border-b border-sohan-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sohan-card border border-sohan-border text-xs font-semibold uppercase tracking-wider text-sohan-cocoa mb-4">
            <Scale className="w-3.5 h-3.5 text-sohan-pistachio" />
            <span>Integrity & Legal Governance</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-sohan-cocoa tracking-tight mb-6">
            Built on Real Commerce, Not Network Marketing.
          </h2>
          <p className="text-base sm:text-lg text-sohan-cocoa/80 leading-relaxed font-sans">
            We designed this program specifically to eliminate the predatory tactics, high-pressure recruitment downlines, and hidden inventory traps of legacy direct selling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-sohan-card border border-sohan-border">
            <div className="w-10 h-10 rounded-2xl bg-sohan-pistachio/15 flex items-center justify-center text-sohan-pistachio mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-sohan-cocoa mb-2">
              90% Buy-Back Guarantee
            </h3>
            <p className="text-xs text-sohan-cocoa/75 leading-relaxed">
              If life changes and you choose to exit within 180 days, SOHAN will repurchase all undamaged, resalable inventory at 90% of your wholesale cost. Your downside is protected.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-sohan-card border border-sohan-border">
            <div className="w-10 h-10 rounded-2xl bg-sohan-sugar/15 flex items-center justify-center text-sohan-sugar mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-sohan-cocoa mb-2">
              Zero Multi-Level Downlines
            </h3>
            <p className="text-xs text-sohan-cocoa/75 leading-relaxed">
              You will never be asked to recruit friends or manage complex commission tiers. You earn money strictly by selling luxury goods and fulfilling local orders.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-sohan-card border border-sohan-border">
            <div className="w-10 h-10 rounded-2xl bg-sohan-cocoa/10 flex items-center justify-center text-sohan-cocoa mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-sohan-cocoa mb-2">
              Contracted Territory Rights
            </h3>
            <p className="text-xs text-sohan-cocoa/75 leading-relaxed">
              City Partners receive exclusive territory protection in writing. We will not onboard competing partners in your designated metropolitan area.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-sohan-card border border-sohan-border">
            <div className="w-10 h-10 rounded-2xl bg-sohan-pistachio/15 flex items-center justify-center text-sohan-pistachio mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-sohan-cocoa mb-2">
              No Recurring Platform Fees
            </h3>
            <p className="text-xs text-sohan-cocoa/75 leading-relaxed">
              No monthly software charges, no franchise royalty deductions, and no monthly sales quotas. Your inventory purchase is 100% product.
            </p>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-6 rounded-2xl bg-sohan-cream border border-sohan-border/80 max-w-4xl mx-auto text-center text-xs text-sohan-cocoa/70 leading-relaxed">
          <p>
            <strong className="text-sohan-cocoa">FTC Compliance Disclosure:</strong> SOHAN operates a legitimate B2B Wholesale Distribution and Authorized Micro-Fulfillment Contractor program. SOHAN does not make earnings claims or guarantees of financial success. Partner revenues depend entirely on local market conditions, sales efforts, and regional e-commerce demand.
          </p>
        </div>
      </div>
    </section>
  );
};
