"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#F7F7F8] pb-20 pt-16 sm:pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teskel-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="secondary"
            className="mb-6 gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium"
          >
            <Sparkles className="h-3.5 w-3.5 text-teskel-accent" />
            All-in-one workspace &amp; marketplace
          </Badge>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            The all-in-one workspace for developers and AI&nbsp;agents.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Run terminals, edit code, preview apps, save sessions, install
            packages, and sell reusable developer workflows — all from one cloud
            workspace.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <Button size="lg" className="gap-2 rounded-full px-8 text-base">
                Start building for free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-base"
              >
                Browse Marketplace
              </Button>
            </Link>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            No setup required. Import a repo and start in your browser.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
