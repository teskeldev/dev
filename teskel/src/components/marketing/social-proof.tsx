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
    <section className="bg-[#F7F7F8] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-sm font-medium text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by developers building with
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-lg font-semibold tracking-tight text-muted-foreground/40"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
