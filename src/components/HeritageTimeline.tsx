"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const milestones = [
  {
    year: "1972",
    title: "The Mettupalayam Atelier",
    description:
      "Navaratna began as a family-led craft atelier, known for hand-finished gold pieces made with generational precision.",
  },
  {
    year: "1994",
    title: "House of Hallmarked Purity",
    description:
      "Certified purity and uncompromising quality became the hallmark promise, elevating trust as the core of every purchase.",
  },
  {
    year: "2010",
    title: "Curated Diamond Expansion",
    description:
      "The collection expanded into ethically sourced diamonds and bridal classics, balancing tradition with modern taste.",
  },
  {
    year: "2026",
    title: "From Mettupalayam to Chennai",
    description:
      "A premium editorial retail experience now welcomes a new generation while honoring roots, rituals, and craftsmanship.",
  },
];

export default function HeritageTimeline() {
  return (
    <section className="bg-deepblack py-24 text-ivory">
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-14 text-center">
          <h2 className="mb-4 font-heading text-4xl text-gold md:text-5xl">Heritage Storytelling</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-ivory/30" />
          <p className="mx-auto max-w-3xl font-body tracking-wide text-ivory/75">
            A scroll-triggered timeline tracing Navaratna Jewellers from its Mettupalayam roots to
            its Chennai presence.
          </p>
        </ScrollReveal>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gold/30 md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const alignLeft = index % 2 === 0;
              return (
                <motion.article
                  key={milestone.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                  className={`relative grid md:grid-cols-2 ${alignLeft ? "" : "md:[&>div:first-child]:order-2"}`}
                >
                  <div className={`pl-12 md:pl-0 ${alignLeft ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
                    <p className="mb-2 font-body text-xs uppercase tracking-[0.25em] text-gold">{milestone.year}</p>
                    <h3 className="mb-3 font-heading text-3xl leading-tight">{milestone.title}</h3>
                    <p className="font-body leading-relaxed text-ivory/72">{milestone.description}</p>
                  </div>
                  <div />
                  <span className="absolute left-4 top-4 h-3 w-3 -translate-x-1/2 rounded-full border border-gold bg-deepblack md:left-1/2" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
