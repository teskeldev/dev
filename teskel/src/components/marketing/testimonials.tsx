"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Teskel replaced three tools for us. Terminal, editor, and deployment preview — all in one browser tab. Our onboarding time dropped from days to minutes.",
    name: "Sarah Chen",
    title: "CTO, Stackbase",
  },
  {
    quote:
      "The marketplace is the killer feature. We packaged our deployment workflow and now every team ships the same way. Consistency at scale without meetings.",
    name: "Marcus Lee",
    title: "VP Engineering, Flowdeck",
  },
  {
    quote:
      "I sold my first package in the first week. $2,800 in passive revenue from a CI/CD workflow I was already using. The creator economy for engineering is real.",
    name: "Alex Rivera",
    title: "Independent Creator",
  },
  {
    quote:
      "The AI assistant actually understands our codebase. It reads our terminal errors, knows which packages we have installed, and gives contextual answers. Nothing else does that.",
    name: "Emma Wilson",
    title: "Lead Developer, Buildcore",
  },
  {
    quote:
      "We moved our entire engineering team to Teskel in a week. Private packages, audit logs, shared workspaces — it's everything we needed without the enterprise overhead.",
    name: "James Park",
    title: "Engineering Manager, Synthwave",
  },
  {
    quote:
      "As someone who builds tools for developers, Teskel's approach is refreshing. It's not trying to be an IDE — it's a complete environment where everything just connects.",
    name: "Nina Patel",
    title: "Creator of TestKit",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          The new way to build software.
        </motion.h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              className="rounded-2xl border border-border/40 bg-white p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <blockquote className="text-sm leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
