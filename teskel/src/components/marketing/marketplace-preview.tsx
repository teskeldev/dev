"use client";

import { motion } from "framer-motion";
import {
  Star,
  Download,
  BadgeCheck,
  Layers,
  Shield,
  CreditCard,
  LayoutDashboard,
  BookOpen,
  TestTube,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { marketplacePackages, packageCategories } from "@/lib/mock-data";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Shield,
  CreditCard,
  LayoutDashboard,
  BookOpen,
  TestTube,
};

function formatInstalls(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export function MarketplacePreview() {
  return (
    <section className="bg-[#F7F7F8] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Marketplace for developer workflows
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Browse, install, and sell reusable packages — skills, agents,
            templates, recipes, and more.
          </p>
        </motion.div>

        <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-2">
          {packageCategories.map((cat) => (
            <Badge
              key={cat}
              variant="secondary"
              className="cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:bg-teskel-accent-soft hover:text-teskel-accent"
            >
              {cat}
            </Badge>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {marketplacePackages.map((pkg, i) => {
            const Icon = iconMap[pkg.icon] || Layers;
            return (
              <motion.div
                key={pkg.slug}
                className="group rounded-2xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-teskel-accent/30 hover:shadow-[0_1px_2px_rgba(0,0,0,.04),0_8px_24px_rgba(0,0,0,.05)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex rounded-xl bg-teskel-accent-soft p-2.5">
                    <Icon className="h-5 w-5 text-teskel-accent" />
                  </div>
                  <span className="text-lg font-bold text-foreground">
                    {pkg.price === 0 ? "Free" : `$${pkg.price}`}
                  </span>
                </div>

                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {pkg.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {pkg.description}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <Badge variant="secondary" className="text-xs">
                    {pkg.type}
                  </Badge>
                  {pkg.verified && (
                    <div className="flex items-center gap-1">
                      <BadgeCheck className="h-3.5 w-3.5 text-teskel-accent" />
                      <span className="text-xs text-teskel-accent">Verified</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-teskel-amber text-teskel-amber" />
                      {pkg.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      {formatInstalls(pkg.installs)}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    by {pkg.creator}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
