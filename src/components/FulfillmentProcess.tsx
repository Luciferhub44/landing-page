import React from 'react';
import { Bell, Package, Printer, Stamp, Send } from 'lucide-react';

export const FulfillmentProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: Bell,
      title: 'Order Ping in Portal',
      description: 'Customer in your designated zip codes buys on SOHAN.com. You get an instant notification on your phone or desktop portal.'
    },
    {
      step: '02',
      icon: Package,
      title: 'Grab Pre-Kitted Mailer',
      description: 'Take the pre-sealed luxury mailer from your shelf. SOHAN items arrive pre-wrapped in branded tissue with story cards and seals already assembled.'
    },
    {
      step: '03',
      icon: Printer,
      title: 'Print 4×6 Pre-Paid Label',
      description: 'One click in the portal prints the pre-paid USPS Ground Advantage label. SOHAN pays 100% of the postage cost automatically.'
    },
    {
      step: '04',
      icon: Stamp,
      title: 'Affix Label to Box',
      description: 'Peel and stick the thermal label onto the exterior mailer. No taping messy boxes or bubble wrapping cosmetics.'
    },
    {
      step: '05',
      icon: Send,
      title: 'Carrier Hand-Off',
      description: 'Leave it for your daily USPS mail carrier pickup or drop in the blue box. Tracking updates in Shopify, customer gets delivery in 1–2 days.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-sohan-card/60 border-b border-sohan-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-sohan-pistachio mb-3">
            Pre-Kitted Packaging Architecture
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-sohan-cocoa tracking-tight mb-6">
            The 60-Second "Pre-Kitted" Workflow
          </h2>
          <p className="text-base sm:text-lg text-sohan-cocoa/80 leading-relaxed font-sans">
            You are a luxury fragrance partner, not a warehouse worker. We engineered our fulfillment to eliminate folding boxes, wrapping paper, or measuring bubble wrap.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-12">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="p-6 rounded-3xl bg-sohan-cream border border-sohan-border flex flex-col justify-between relative group hover:border-sohan-cocoa/40 transition-all hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-bold text-sm text-sohan-pistachio tracking-widest">
                      STEP {s.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-sohan-card border border-sohan-border flex items-center justify-center text-sohan-cocoa">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-sohan-cocoa mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-sohan-cocoa/75 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-sohan-border/60 text-[11px] font-bold uppercase tracking-wider text-sohan-muted">
                  {index === 0 && '~10 Seconds'}
                  {index === 1 && '~15 Seconds'}
                  {index === 2 && '~10 Seconds'}
                  {index === 3 && '~15 Seconds'}
                  {index === 4 && '~10 Seconds'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Packaging Visual Verification Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 rounded-3xl bg-sohan-cream border border-sohan-border items-center">
          <div className="md:col-span-4 flex gap-3 justify-center">
            <div className="w-28 h-36 rounded-2xl overflow-hidden border border-sohan-border shadow-xs">
              <img
                src="/Set2.jpeg"
                alt="SOHAN Pre-Kitted Discovery Box"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-28 h-36 rounded-2xl overflow-hidden border border-sohan-border shadow-xs">
              <img
                src="/Balm.jpg"
                alt="SOHAN Pre-Sealed Balm Tin"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="md:col-span-8">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-sohan-sugar block mb-1">
              Standardized Luxury Unboxing
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-sohan-cocoa mb-2">
              Every Unit Ships Pre-Assembled in Protective Luxury Mailers
            </h3>
            <p className="text-xs sm:text-sm text-sohan-cocoa/80 leading-relaxed mb-4">
              Your customers receive pristine European apothecary presentation: custom kraft paperboard boxes, cocoa die-cut inserts, and wax seal branded story cards. You never handle bulk packing materials.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wider text-sohan-cocoa">
              <span className="px-3 py-1 rounded-full bg-sohan-pistachio/15 border border-sohan-pistachio/30">Average Time: 54 Seconds</span>
              <span className="px-3 py-1 rounded-full bg-sohan-card border border-sohan-border">Zero Messy Bubble Wrap</span>
              <span className="px-3 py-1 rounded-full bg-sohan-sugar/15 border border-sohan-sugar/30">100% Pre-Paid Postage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
