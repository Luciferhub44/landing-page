import React from 'react';
import { DollarSign, Truck, RefreshCw, ShoppingBag, ShieldCheck } from 'lucide-react';

export const DualEngineModel: React.FC = () => {
  return (
    <section id="model" className="py-20 md:py-32 border-b border-sohan-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-sohan-sugar mb-3">
            Economic Architecture
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-sohan-cocoa tracking-tight mb-6">
            The Dual-Engine Partner Model
          </h2>
          <p className="text-base sm:text-lg text-sohan-cocoa/80 leading-relaxed font-sans">
            Why choose between waiting for foot traffic or building an online store from scratch? 
            SOHAN combines high-margin direct commerce with passive e-commerce order routing.
          </p>
        </div>

        {/* The 2 Side-by-Side Engines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {/* Engine 1 */}
          <div className="p-6 sm:p-10 rounded-3xl bg-sohan-card border-2 border-sohan-border/80 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sohan-pistachio/10 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3.5 py-1 rounded-full bg-sohan-pistachio/20 text-sohan-cocoa font-bold text-xs uppercase tracking-wider">
                  Engine 1 · Active Channel
                </span>
                <span className="text-sm font-bold text-sohan-pistachio uppercase">45% Margins</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-sohan-cocoa mb-3">
                Your Direct Local Retail
              </h3>
              <p className="text-sm text-sohan-cocoa/80 leading-relaxed mb-8">
                Sell directly to your regional network, local concept boutiques, luxury spas, and private clients. Keep the full wholesale spread on every piece.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sohan-cream border border-sohan-border">
                  <ShoppingBag className="w-5 h-5 text-sohan-cocoa shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sohan-cocoa">Buy at Wholesale, Sell at MSRP</h4>
                    <p className="text-xs text-sohan-cocoa/70 mt-0.5">Purchase units at $16.00–$19.00 and sell at $32.00–$38.00. Keep $16.00–$19.00 cash profit per unit.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sohan-cream border border-sohan-border">
                  <DollarSign className="w-5 h-5 text-sohan-cocoa shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sohan-cocoa">Zero Ad Spend Required</h4>
                    <p className="text-xs text-sohan-cocoa/70 mt-0.5">High word-of-mouth conversion through sensory fragrance testing, discovery cards, and gift sets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sohan-cream border border-sohan-border">
                  <ShieldCheck className="w-5 h-5 text-sohan-cocoa shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sohan-cocoa">Counter Tester Unit Included</h4>
                    <p className="text-xs text-sohan-cocoa/70 mt-0.5">Every partner receives deluxe wooden tasting trays and blotter cards for effortless pop-up displays.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-sohan-cream border border-sohan-border/80 text-center">
              <span className="text-xs uppercase font-bold text-sohan-muted">Example: 50 Direct Units / Month</span>
              <p className="text-2xl font-bold font-display text-sohan-cocoa mt-1">+$850.00 / month Net Profit</p>
            </div>
          </div>

          {/* Engine 2 */}
          <div className="p-6 sm:p-10 rounded-3xl bg-sohan-cocoa text-sohan-cream shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sohan-sugar/20 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3.5 py-1 rounded-full bg-sohan-sugar/30 text-sohan-cream font-bold text-xs uppercase tracking-wider">
                  Engine 2 · Automated Ad Flow
                </span>
                <span className="text-sm font-bold text-sohan-sugar uppercase">$5.00 / Order Bounty</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-sohan-cream mb-3">
                Decentralized DTC Micro-Hub
              </h3>
              <p className="text-sm text-sohan-cream/80 leading-relaxed mb-8">
                We spend our national advertising budget driving online sales on SOHAN.com. When an order lands in your zip code, our system routes it to your shelf to fulfill.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sohan-cream/10 border border-sohan-cream/20">
                  <Truck className="w-5 h-5 text-sohan-sugar shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sohan-cream">We Pay the Ad Spend ($15–$18 CAC)</h4>
                    <p className="text-xs text-sohan-cream/75 mt-0.5">You don't run paid ads or manage websites. We create the consumer demand; you fulfill the order locally.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sohan-cream/10 border border-sohan-cream/20">
                  <DollarSign className="w-5 h-5 text-sohan-sugar shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sohan-cream">Flat $5.00 Handling Bounty</h4>
                    <p className="text-xs text-sohan-cream/75 mt-0.5">Earn $5.00 cash for every box you hand to USPS. Shipping postage is 100% paid by SOHAN.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sohan-cream/10 border border-sohan-cream/20">
                  <RefreshCw className="w-5 h-5 text-sohan-sugar shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sohan-cream">Automated Inventory Replenishment</h4>
                    <p className="text-xs text-sohan-cream/75 mt-0.5">Whenever an ad order uses your stock, you get credited immediately and replacement inventory ships in bulk.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-sohan-cream/10 border border-sohan-cream/20 text-center">
              <span className="text-xs uppercase font-bold text-sohan-cream/70">Example: 100 Online Orders / Month</span>
              <p className="text-2xl font-bold font-display text-sohan-sugar mt-1">+$500.00 / month Hands-Free</p>
            </div>
          </div>
        </div>

        {/* Combined Power Statement */}
        <div className="p-8 rounded-3xl bg-sohan-card border border-sohan-border text-center max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl font-display font-semibold text-sohan-cocoa mb-2">
            "You monetize your community with 45% margins while turning spare closet space into a profitable local logistics hub."
          </p>
          <p className="text-xs uppercase font-bold tracking-widest text-sohan-muted">
            The SOHAN City Partner Advantage
          </p>
        </div>
      </div>
    </section>
  );
};
