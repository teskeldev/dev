"use client";

import { useState } from "react";
import Link from "next/link";
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { marketplacePackages, packageCategories } from "@/lib/mock-data";

const iconMap: Record<string, React.ElementType> = {
  Layers, Shield, CreditCard, LayoutDashboard, BookOpen, TestTube,
};

function formatInstalls(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export default function AppMarketplacePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const filtered = activeCategory
    ? marketplacePackages.filter((p) => p.category === activeCategory)
    : marketplacePackages;

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Marketplace</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Browse and install packages for your projects.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search packages..."
            className="bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <Badge
          variant={activeCategory === null ? "default" : "secondary"}
          className="cursor-pointer rounded-full px-3 py-1 text-xs"
          onClick={() => setActiveCategory(null)}
        >
          All
        </Badge>
        {packageCategories.map((cat) => (
          <Badge
            key={cat}
            variant={activeCategory === cat ? "default" : "secondary"}
            className="cursor-pointer rounded-full px-3 py-1 text-xs"
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Badge>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((pkg) => {
          const Icon = iconMap[pkg.icon] || Layers;
          return (
            <Link key={pkg.slug} href={`/app/marketplace/${pkg.slug}`}>
              <div className="group h-full rounded-xl border border-border bg-white p-5 transition-all hover:shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="inline-flex rounded-xl bg-teskel-accent-soft p-2.5">
                    <Icon className="h-5 w-5 text-teskel-accent" />
                  </div>
                  <span className="text-lg font-bold text-foreground">
                    {pkg.price === 0 ? "Free" : `$${pkg.price}`}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-foreground">{pkg.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{pkg.description}</p>
                <div className="mt-3 flex items-center gap-2">
                  <Badge variant="secondary" className="text-[10px]">{pkg.type}</Badge>
                  {pkg.verified && (
                    <BadgeCheck className="h-3.5 w-3.5 text-teskel-accent" />
                  )}
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-teskel-amber text-teskel-amber" /> {pkg.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="h-3 w-3" /> {formatInstalls(pkg.installs)}
                    </span>
                  </div>
                  <span>by {pkg.creator}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
