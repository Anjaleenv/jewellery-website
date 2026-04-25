"use client";

import ScrollReveal from "./ScrollReveal";

export default function OurHeritage() {
  return (
    <section className="bg-deepblack py-24 text-ivory">
      <div className="container mx-auto grid items-center gap-10 px-6 lg:grid-cols-2">
        <ScrollReveal className="lg:pr-10">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.24em] text-gold">Our Heritage</p>
          <h2 className="mb-6 font-heading text-4xl leading-tight text-gold md:text-5xl">
            From Mettupalayam Legacy to Modern Chennai Elegance
          </h2>
          <p className="mb-5 font-body leading-relaxed text-ivory/78">
            Navaratna Jewellers began as a family atelier rooted in craft-first values. Over the decades,
            the house evolved into a trusted destination for finely hallmarked gold and bespoke bridal pieces.
          </p>
          <p className="font-body leading-relaxed text-ivory/72">
            Every collection reflects a blend of traditional Tamil artistry and contemporary refinement,
            preserving cultural heritage while shaping a premium jewelry experience for today.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden border border-gold/25 bg-black/20">
            <img
              src="https://images.unsplash.com/photo-1459908676235-d5f02a50184b?q=80&w=2070&auto=format&fit=crop"
              alt="Jewelry workshop with artisans"
              className="h-[520px] w-full object-cover transition-transform duration-[1500ms] ease-out hover:scale-105"
              data-jewelry-hover="true"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
