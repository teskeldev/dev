"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  Upload,
  GitBranch,
  Store,
  BarChart3,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { creatorFeatures } from "@/lib/mock-data";

const iconMap: Record<string, React.ElementType> = {
  Upload, GitBranch, Store, BarChart3, Star, DollarSign,
};

const steps = [
  { step: "1", title: "Create your package", desc: "Choose a type, add files, set pricing and permissions." },
  { step: "2", title: "Publish to the marketplace", desc: "Submit for review or publish directly as a draft." },
  { step: "3", title: "Earn from every install", desc: "Track sales, installs, and reviews from your dashboard." },
];

export default function CreatorsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-[#F7F7F8] pb-16 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Sell your engineering workflow
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Turn reusable developer workflows into products. Publish packages,
              build your reputation, and earn revenue.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" className="gap-2 rounded-full px-8">
                  Start creating
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F7F7F8] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground">
            How it works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-teskel-accent text-xl font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md rounded-2xl border border-teskel-green/20 bg-teskel-green/5 p-8 text-center">
            <DollarSign className="mx-auto h-10 w-10 text-teskel-green" />
            <p className="mt-4 text-4xl font-bold text-foreground">80%</p>
            <p className="mt-2 text-lg text-muted-foreground">
              creator revenue on every sale
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              No hidden fees. No lock-in.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F8] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Creator tools
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {creatorFeatures.map((f, i) => {
              const Icon = iconMap[f.icon] || Upload;
              return (
                <motion.div
                  key={f.title}
                  className="rounded-2xl border border-border bg-white p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <div className="mb-3 inline-flex rounded-xl bg-teskel-accent-soft p-2.5">
                    <Icon className="h-5 w-5 text-teskel-accent" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {f.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
