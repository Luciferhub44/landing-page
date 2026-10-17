import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

interface EarningsCalculatorProps {
  onApplyClick: () => void;
}

export const EarningsCalculator: React.FC<EarningsCalculatorProps> = ({ onApplyClick }) => {
  const [directUnits, setDirectUnits] = useState<number>(35);
  const [adOrders, setAdOrders] = useState<number>(90);

  // Constants for economics
  const PROFIT_PER_DIRECT_UNIT = 17.00; // ~$35 retail average - ~$18 wholesale average
  const BOUNTY_PER_AD_ORDER = 5.00;
  const DISCOVERY_BONUS_ESTIMATE = 0.15 * 10.00; // 15% of orders convert to discovery upsell bonus ($1.50 effective per order)

  const directMonthlyIncome = Math.round(directUnits * PROFIT_PER_DIRECT_UNIT);
  const adFulfillmentIncome = Math.round(adOrders * (BOUNTY_PER_AD_ORDER + DISCOVERY_BONUS_ESTIMATE));
  const totalMonthlyIncome = directMonthlyIncome + adFulfillmentIncome;
  const totalAnnualIncome = totalMonthlyIncome * 12;

  return (
    <section id="calculator" className="py-20 md:py-32 border-b border-sohan-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-sohan-pistachio mb-3">
            Financial Modeling
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-sohan-cocoa tracking-tight mb-6">
            Estimate Your Monthly Revenue
          </h2>
          <p className="text-base sm:text-lg text-sohan-cocoa/80 leading-relaxed font-sans">
            Adjust the sliders below to model your earnings based on your expected local foot traffic and digital ad volume in your metro area.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-sohan-card border border-sohan-border shadow-xs flex flex-col justify-between">
            <div className="space-y-8">
              {/* Slider 1: Direct Sales */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <label htmlFor="direct-units" className="text-sm font-bold text-sohan-cocoa">
                    1. Direct Local Sales (Units / Month)
                  </label>
                  <span className="px-3 py-1 rounded-full bg-sohan-cream border border-sohan-border font-display font-bold text-base text-sohan-cocoa">
                    {directUnits} units
                  </span>
                </div>
                <input
                  id="direct-units"
                  type="range"
                  min="0"
                  max="150"
                  step="5"
                  value={directUnits}
                  onChange={(e) => setDirectUnits(Number(e.target.value))}
                  className="w-full h-2.5 bg-sohan-cream rounded-lg appearance-none cursor-pointer accent-sohan-cocoa border border-sohan-border"
                />
                <div className="flex justify-between text-[11px] text-sohan-muted font-medium mt-2">
                  <span>0 units (Passive only)</span>
                  <span>50 units (Active boutique)</span>
                  <span>150 units (Major store)</span>
                </div>
                <p className="text-xs text-sohan-cocoa/70 mt-2">
                  In-store foot traffic, salon clients, private gifting, or local pop-ups (~$17 net profit/unit).
                </p>
              </div>

              {/* Slider 2: Ad Routing Orders */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <label htmlFor="ad-orders" className="text-sm font-bold text-sohan-cocoa">
                    2. SOHAN.com Ad Orders Fulfilled / Month
                  </label>
                  <span className="px-3 py-1 rounded-full bg-sohan-cream border border-sohan-border font-display font-bold text-base text-sohan-sugar">
                    {adOrders} orders
                  </span>
                </div>
                <input
                  id="ad-orders"
                  type="range"
                  min="0"
                  max="300"
                  step="10"
                  value={adOrders}
                  onChange={(e) => setAdOrders(Number(e.target.value))}
                  className="w-full h-2.5 bg-sohan-cream rounded-lg appearance-none cursor-pointer accent-sohan-sugar border border-sohan-border"
                />
                <div className="flex justify-between text-[11px] text-sohan-muted font-medium mt-2">
                  <span>0 orders</span>
                  <span>100 orders (~3/day)</span>
                  <span>300 orders (~10/day)</span>
                </div>
                <p className="text-xs text-sohan-cocoa/70 mt-2">
                  Orders automatically routed to your zip code from our digital ad campaigns ($5.00 fee + bonus).
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-sohan-border/80 flex items-center justify-between text-xs text-sohan-cocoa/80">
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-sohan-pistachio" />
                Inventory is auto-restocked as ad orders deplete stock
              </span>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-sohan-cocoa text-sohan-cream shadow-md flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-sohan-sugar">
                Estimated Net Earnings
              </span>

              <div className="my-6">
                <span className="text-xs uppercase tracking-wider text-sohan-cream/70 block mb-1">
                  Projected Monthly Net Profit
                </span>
                <p className="text-4xl sm:text-5xl font-display font-extrabold text-sohan-cream tracking-tight">
                  ${totalMonthlyIncome.toLocaleString()}
                  <span className="text-lg font-sans font-normal text-sohan-cream/70"> / mo</span>
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-sohan-cream/15 text-xs">
                <div className="flex justify-between items-center text-sohan-cream/80">
                  <span>Direct Retail Profit (45%):</span>
                  <span className="font-bold text-sohan-cream font-mono">${directMonthlyIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sohan-cream/80">
                  <span>Ad Fulfillment Bounties:</span>
                  <span className="font-bold text-sohan-cream font-mono">${adFulfillmentIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sohan-sugar pt-2 border-t border-sohan-cream/10 font-bold">
                  <span>Annualized Run-Rate:</span>
                  <span className="font-mono text-sm">${totalAnnualIncome.toLocaleString()} / year</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6">
              <button
                onClick={onApplyClick}
                className="w-full py-4 rounded-full bg-sohan-sugar hover:bg-sohan-sugar/90 text-sohan-cream font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 text-center"
              >
                Apply for Your Metro Territory
              </button>
              <p className="text-[11px] text-center text-sohan-cream/60 mt-2">
                Actual results depend on local sales activity and ad performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
