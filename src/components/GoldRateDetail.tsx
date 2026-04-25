"use client";

import ScrollReveal from "./ScrollReveal";

const rates = [
  { purity: "22K Gold", perGram: "INR 6,745", tenGram: "INR 67,450", making: "from 8%" },
  { purity: "24K Gold", perGram: "INR 7,358", tenGram: "INR 73,580", making: "from 6%" },
];

export default function GoldRateDetail() {
  return (
    <section className="bg-ivory py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-12 text-center">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.24em] text-gold">The Gold Rate Detail</p>
          <h2 className="mb-4 font-heading text-4xl text-deepblack md:text-5xl">Daily Price Breakdown</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-gold" />
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {rates.map((rate) => (
            <ScrollReveal key={rate.purity}>
              <article className="border border-deepblack/12 bg-white/60 p-8 backdrop-blur-sm">
                <h3 className="mb-6 font-heading text-3xl text-deepblack">{rate.purity}</h3>
                <div className="space-y-4 font-body">
                  <div className="flex items-center justify-between border-b border-deepblack/10 pb-2">
                    <span className="text-deepblack/65">Price per gram</span>
                    <span className="tracking-wide text-deepblack">{rate.perGram}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-deepblack/10 pb-2">
                    <span className="text-deepblack/65">Price per 10 grams</span>
                    <span className="tracking-wide text-deepblack">{rate.tenGram}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-deepblack/65">Indicative making charges</span>
                    <span className="tracking-wide text-deepblack">{rate.making}</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
