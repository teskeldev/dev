"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Star,
  Download,
  BadgeCheck,
  Layers,
  Shield,
  CreditCard,
  LayoutDashboard,
  BookOpen,
  TestTube,
  SlidersHorizontal,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { marketplacePackages, packageCategories } from "@/lib/mock-data";

const iconMap: Record<string, React.ElementType> = {
  Layers, Shield, CreditCard, LayoutDashboard, BookOpen, TestTube,
};

function formatInstalls(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? marketplacePackages.filter((p) => p.category === activeCategory)
    : marketplacePackages;

  return (
    <>
      <section className="bg-gradient-to-b from-white to-[#F7F7F8] pb-12 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Marketplace
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover and install developer workflows, AI agents, templates,
              and more.
            </p>
          </motion.div>

          <div className="mx-auto mt-8 max-w-xl">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-3 shadow-sm">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search packages..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F8] pb-24 pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant={activeCategory === null ? "default" : "secondary"}
              className="cursor-pointer rounded-full px-4 py-1.5 text-sm"
              onClick={() => setActiveCategory(null)}
            >
              All
            </Badge>
            {packageCategories.map((cat) => (
              <Badge
                key={cat}
                variant={activeCategory === cat ? "default" : "secondary"}
                className="cursor-pointer rounded-full px-4 py-1.5 text-sm"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((pkg, i) => {
              const Icon = iconMap[pkg.icon] || Layers;
              return (
                <Link key={pkg.slug} href={`/marketplace/${pkg.slug}`}>
                  <motion.div
                    className="group h-full rounded-2xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-teskel-accent/30 hover:shadow-[0_1px_2px_rgba(0,0,0,.04),0_8px_24px_rgba(0,0,0,.05)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
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
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Load more packages
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
