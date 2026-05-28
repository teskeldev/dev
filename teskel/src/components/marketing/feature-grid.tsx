"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Code,
  Globe,
  FileText,
  RotateCcw,
  Camera,
  Sparkles,
  Bot,
  Package,
  Zap,
  Clock,
  Users,
} from "lucide-react";
import { workspaceFeatures } from "@/lib/mock-data";

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  Code,
  Globe,
  FileText,
  RotateCcw,
  Camera,
  Sparkles,
  Bot,
  Package,
  Zap,
  Clock,
  Users,
};

export function FeatureGrid() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need in one workspace
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Terminal, editor, preview, AI, packages, and more — without
            switching tools.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {workspaceFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Package;
            return (
              <motion.div
                key={feature.title}
                className="group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(0,0,0,.04),0_8px_24px_rgba(0,0,0,.05)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="mb-4 inline-flex rounded-xl bg-teskel-accent-soft p-2.5">
                  <Icon className="h-5 w-5 text-teskel-accent" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
