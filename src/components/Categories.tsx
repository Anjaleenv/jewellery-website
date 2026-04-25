"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    title: "Gold Collection",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Diamonds",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "1-Gram Gold",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function Categories() {
  return (
    <section id="collections" className="py-24 bg-ivory">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-deepblack mb-4">Curated Collections</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="font-body text-deepblack/70 max-w-2xl mx-auto tracking-wide">
            Explore our meticulously categorized selections, each piece telling a story of heritage and refined craftsmanship.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-[800px] md:h-[600px]">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.15 * index, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 0.98 }}
              className={`relative overflow-hidden group cursor-pointer ${cat.className}`}
              data-jewelry-hover="true"
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                data-jewelry-hover="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepblack/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                <h3 className="font-heading text-3xl text-ivory drop-shadow-md">{cat.title}</h3>
                <span className="font-body text-ivory text-sm tracking-widest uppercase border-b border-transparent group-hover:border-ivory transition-colors duration-300 pb-1">
                  Discover
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
