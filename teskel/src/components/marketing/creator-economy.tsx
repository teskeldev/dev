"use client";

import { motion } from "framer-motion";
import {
  Upload,
  GitBranch,
  Store,
  BarChart3,
  Star,
  DollarSign,
} from "lucide-react";
import { creatorFeatures } from "@/lib/mock-data";

const iconMap: Record<string, React.ElementType> = {
  Upload,
  GitBranch,
  Store,
  BarChart3,
  Star,
  DollarSign,
};

export function CreatorEconomySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Turn your engineering workflow into a product.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Publish reusable packages, sell premium workflows, and help other
              developers build faster.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-teskel-green/20 bg-teskel-green/5 px-6 py-4">
              <DollarSign className="h-8 w-8 text-teskel-green" />
              <div>
                <p className="text-2xl font-bold text-foreground">80%</p>
                <p className="text-sm text-muted-foreground">
                  creator revenue on every sale
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,.04),0_8px_24px_rgba(0,0,0,.05)]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">
                Creator Dashboard
              </h3>
              <span className="text-xs text-muted-foreground">This month</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-muted p-3">
                <p className="text-xl font-bold text-foreground">$2,847</p>
                <p className="text-xs text-muted-foreground">Revenue</p>
              </div>
              <div className="rounded-xl bg-muted p-3">
                <p className="text-xl font-bold text-foreground">1,234</p>
                <p className="text-xs text-muted-foreground">Installs</p>
              </div>
              <div className="rounded-xl bg-muted p-3">
                <p className="text-xl font-bold text-foreground">4.9</p>
                <p className="text-xs text-muted-foreground">Avg Rating</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {["Next.js SaaS Pro Pack", "Security Review Agent", "Stripe Billing"].map(
                (pkg, i) => (
                  <div
                    key={pkg}
                    className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2"
                  >
                    <span className="text-xs font-medium text-foreground">{pkg}</span>
                    <span className="text-xs text-muted-foreground">
                      {[412, 287, 198][i]} installs
                    </span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {creatorFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Upload;
            return (
              <motion.div
                key={feature.title}
                className="rounded-2xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(0,0,0,.04),0_8px_24px_rgba(0,0,0,.05)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="mb-3 inline-flex rounded-xl bg-teskel-accent-soft p-2.5">
                  <Icon className="h-5 w-5 text-teskel-accent" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
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
