"use client";

import { use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  Download,
  BadgeCheck,
  Shield,
  Check,
  FileCode,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { marketplacePackages } from "@/lib/mock-data";

function formatInstalls(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export default function AppPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const pkg = marketplacePackages.find((p) => p.slug === slug) ?? marketplacePackages[0];

  return (
    <div className="mx-auto max-w-4xl">
      <Link
        href="/app/marketplace"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-border bg-white p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-teskel-accent-soft p-3">
              <FileCode className="h-6 w-6 text-teskel-accent" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-foreground">{pkg.title}</h1>
                {pkg.verified && <BadgeCheck className="h-4 w-4 text-teskel-accent" />}
              </div>
              <p className="text-sm text-muted-foreground">by {pkg.creator}</p>
              <div className="mt-2 flex items-center gap-3">
                <Badge variant="secondary">{pkg.type}</Badge>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-3.5 w-3.5 fill-teskel-amber text-teskel-amber" /> {pkg.rating}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Download className="h-3.5 w-3.5" /> {formatInstalls(pkg.installs)}
                </span>
              </div>
            </div>
          </div>
          <Tabs defaultValue="overview" className="mt-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="files">Files</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4 text-sm text-muted-foreground">
              {pkg.description}
              <h3 className="mt-4 font-semibold text-foreground">Included files</h3>
              <ul className="mt-2 space-y-1">
                {["SKILL.md", "CLAUDE.md", "AGENTS.md", "DESIGN.md"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-teskel-green" /> {f}
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="files" className="mt-4 space-y-2">
              {["SKILL.md", "CLAUDE.md", "AGENTS.md", "recipes/"].map((f) => (
                <div key={f} className="flex items-center gap-2 rounded-lg border border-border p-2 text-sm">
                  <FileCode className="h-4 w-4 text-muted-foreground" /> {f}
                </div>
              ))}
            </TabsContent>
            <TabsContent value="reviews" className="mt-4 space-y-3">
              <div className="rounded-lg border border-border p-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Developer A</span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-teskel-amber text-teskel-amber" />
                    ))}
                  </div>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Excellent package.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="rounded-xl border border-border bg-white p-6">
          <p className="text-center text-2xl font-bold">{pkg.price === 0 ? "Free" : `$${pkg.price}`}</p>
          <Button className="mt-4 w-full rounded-full">
            {pkg.price === 0 ? "Install" : "Buy & Install"}
          </Button>
          <div className="mt-4 space-y-2">
            <p className="text-xs font-semibold uppercase text-muted-foreground">Compatibility</p>
            <div className="flex flex-wrap gap-1">
              {pkg.compatibility.map((c) => (
                <Badge key={c} variant="secondary" className="text-xs">{c}</Badge>
              ))}
            </div>
          </div>
          <div className="mt-4 space-y-1">
            <p className="text-xs font-semibold uppercase text-muted-foreground">Permissions</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-3 w-3 text-teskel-green" /> Safe package
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
