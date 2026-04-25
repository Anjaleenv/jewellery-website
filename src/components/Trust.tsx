"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Gem, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Trust() {
  const features = [
    {
      icon: <Award className="w-10 h-10 text-gold mb-6" />,
      title: "Heritage & Craftsmanship",
      description: "Over five decades of mastering the art of fine jewellery, passed down through generations."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-gold mb-6" />,
      title: "BIS Hallmarked",
      description: "100% certified and BIS Hallmarked gold, ensuring the highest standards of purity."
    },
    {
      icon: <Gem className="w-10 h-10 text-gold mb-6" />,
      title: "Ethically Sourced",
      description: "Conflict-free diamonds and ethically sourced materials for peace of mind."
    }
  ];

  return (
    <section id="heritage" className="py-24 bg-deepblack text-ivory">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-gold mb-4">The Navaratna Promise</h2>
          <div className="w-16 h-0.5 bg-ivory/20 mx-auto mb-6"></div>
          <p className="font-body text-ivory/70 max-w-2xl mx-auto tracking-wide">
            A legacy built on trust, transparency, and unparalleled artistry.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center p-8 border border-ivory/10 hover:border-gold/30 transition-colors duration-500"
            >
              {feature.icon}
              <h3 className="font-heading text-2xl mb-4">{feature.title}</h3>
              <p className="font-body text-ivory/60 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
