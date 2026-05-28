"use client";

import { motion } from "framer-motion";

const logos = [
  "Vercel",
  "Supabase",
  "Stripe",
  "Linear",
  "Resend",
  "Neon",
  "Turso",
  "Clerk",
];

export function SocialProof() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-sm font-medium text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted every day by teams that build world-class software
        </motion.h2>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-xl font-semibold tracking-tight text-muted-foreground/30"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
