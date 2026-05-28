"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Package, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    heading: "AI agents that work for you",
    description:
      "Automated workflows that review code, generate runbooks, and fix issues — all with your approval and full project context.",
    linkText: "Explore AI agents",
    linkHref: "/ai",
  },
  {
    icon: Package,
    heading: "Complete package ecosystem",
    description:
      "Skills, agents, templates, recipes, UI kits, and more. Install tested workflows instantly or build and sell your own.",
    linkText: "Browse marketplace",
    linkHref: "/marketplace",
  },
  {
    icon: Shield,
    heading: "Built for teams at scale",
    description:
      "SSO, audit logs, role-based access, private registries, and policy controls. Trusted by teams that build critical software.",
    linkText: "Explore enterprise",
    linkHref: "/enterprise",
  },
];

export function FrontierSection() {
  return (
    <section className="border-t border-border/40 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Build with confidence
        </motion.h2>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <feature.icon className="h-6 w-6 text-foreground" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <Link
                href={feature.linkHref}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teskel-accent transition-colors hover:text-teskel-accent-hover"
              >
                {feature.linkText}{" "}
                <span className="text-xs">&nearr;</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
