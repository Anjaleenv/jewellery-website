"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const featuredCategories = [
  {
    title: "Gold",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Timeless bridal and heirloom signatures",
  },
  {
    title: "Diamond",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Brilliant cuts for modern elegance",
  },
  {
    title: "Platinum",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Refined minimalism in precious metal",
  },
];

export default function FeaturedCategories() {
  return (
    <section id="featured-categories" className="bg-ivory py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-14 text-center">
          <h2 className="mb-4 font-heading text-4xl text-deepblack md:text-5xl">Featured Categories</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-gold" />
          <p className="mx-auto max-w-2xl font-body tracking-wide text-deepblack/70">
            A curated edit of Navaratna classics, presented with gallery-like restraint and focus.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {featuredCategories.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden border border-deepblack/10 bg-deepblack cursor-pointer"
              data-jewelry-hover="true"
            >
              <img
                src={item.image}
                alt={`${item.title} jewellery`}
                className="h-[440px] w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                data-jewelry-hover="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepblack/85 via-deepblack/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-ivory">
                <h3 className="font-heading text-3xl">{item.title}</h3>
                <p className="mt-2 font-body text-sm uppercase tracking-[0.2em] text-ivory/75">
                  {item.subtitle}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
