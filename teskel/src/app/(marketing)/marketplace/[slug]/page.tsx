"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  Download,
  BadgeCheck,
  ArrowLeft,
  Shield,
  FileCode,
  Check,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { marketplacePackages } from "@/lib/mock-data";

function formatInstalls(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export default function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const pkg = marketplacePackages.find((p) => p.slug === slug) ?? marketplacePackages[0];

  return (
    <section className="bg-[#F7F7F8] py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/marketplace"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Marketplace
        </Link>

        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="inline-flex rounded-2xl bg-teskel-accent-soft p-4">
                  <FileCode className="h-8 w-8 text-teskel-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-foreground">
                      {pkg.title}
                    </h1>
                    {pkg.verified && (
                      <BadgeCheck className="h-5 w-5 text-teskel-accent" />
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    by{" "}
                    <span className="font-medium text-foreground">
                      {pkg.creator}
                    </span>
                  </p>
                  <div className="mt-3 flex items-center gap-4">
                    <Badge variant="secondary">{pkg.type}</Badge>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-3.5 w-3.5 fill-teskel-amber text-teskel-amber" />
                      {pkg.rating}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Download className="h-3.5 w-3.5" />
                      {formatInstalls(pkg.installs)} installs
                    </span>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="overview" className="mt-8">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="files">Files</TabsTrigger>
                  <TabsTrigger value="changelog">Changelog</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {pkg.description}
                  </p>
                  <h3 className="mt-6 text-sm font-semibold text-foreground">
                    What&apos;s included
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {["SKILL.md", "CLAUDE.md", "AGENTS.md", "DESIGN.md", "ARCHITECTURE.md"].map(
                      (file) => (
                        <li
                          key={file}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="h-4 w-4 text-teskel-green" />
                          {file}
                        </li>
                      )
                    )}
                  </ul>
                </TabsContent>
                <TabsContent value="files" className="mt-6">
                  <div className="space-y-2">
                    {["SKILL.md", "CLAUDE.md", "AGENTS.md", "recipes/", "runbooks/"].map(
                      (f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm"
                        >
                          <FileCode className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground">{f}</span>
                        </div>
                      )
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="changelog" className="mt-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        v1.0.0
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Initial release with full skill pack, recipes, and
                        runbooks.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-4">
                    {[
                      {
                        name: "Developer A",
                        rating: 5,
                        text: "Excellent workflow package. Saved me hours of setup time.",
                      },
                      {
                        name: "Developer B",
                        rating: 4,
                        text: "Great documentation and well-structured files. Highly recommended.",
                      },
                    ].map((review) => (
                      <div
                        key={review.name}
                        className="rounded-lg border border-border p-4"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">
                            {review.name}
                          </span>
                          <div className="flex">
                            {Array.from({ length: review.rating }).map((_, j) => (
                              <Star
                                key={j}
                                className="h-3 w-3 fill-teskel-amber text-teskel-amber"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {review.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div>
            <div className="sticky top-24 rounded-2xl border border-border bg-white p-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">
                  {pkg.price === 0 ? "Free" : `$${pkg.price}`}
                </p>
              </div>

              <Button className="mt-6 w-full rounded-full" size="lg">
                {pkg.price === 0 ? "Install package" : "Buy & Install"}
              </Button>

              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Compatibility
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {pkg.compatibility.map((c) => (
                    <Badge key={c} variant="secondary" className="text-xs">
                      {c}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Permissions
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-3.5 w-3.5 text-teskel-green" />
                    Safe package
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-muted-foreground" />
                    Modifies files
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-muted-foreground" />
                    Uses AI
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Creator
                </h4>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teskel-accent-soft text-sm font-semibold text-teskel-accent">
                    {pkg.creator[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {pkg.creator}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      @{pkg.creatorHandle}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/marketplace"
                className="mt-6 flex items-center justify-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                View more packages
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
