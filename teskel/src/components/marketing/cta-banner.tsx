"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="bg-[#F7F7F8] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-teskel-accent to-teskel-purple p-12 text-center sm:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to build in one workspace?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Start with a project, install your first package, and let Teskel
            remember how you build.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <Button
                size="lg"
                className="gap-2 rounded-full bg-white px-8 text-base text-teskel-accent hover:bg-white/90"
              >
                Start building for free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 px-8 text-base text-white hover:bg-white/10"
              >
                Browse Marketplace
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
