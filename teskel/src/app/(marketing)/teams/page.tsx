"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Lock, CheckCircle, Zap, FileSearch, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamFeatures } from "@/lib/mock-data";

const iconMap: Record<string, React.ElementType> = {
  Users, Lock, CheckCircle, Zap, FileSearch, Shield,
};

export default function TeamsPage() {
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
              Teskel for Teams
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Shared workspaces, private packages, role-based access, and audit
              logs for your engineering team.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" className="gap-2 rounded-full px-8">
                  Start your team
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F7F7F8] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamFeatures.map((f, i) => {
              const Icon = iconMap[f.icon] || Users;
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
                  <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Team pricing
          </h2>
          <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-teskel-accent bg-white p-6 text-center shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">Team plan</p>
            <div className="mt-2 flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold text-foreground">$39</span>
              <span className="text-sm text-muted-foreground">/user/mo</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Everything in Pro, plus shared workspaces, private packages, and audit logs.
            </p>
            <Link href="/signup">
              <Button className="mt-6 w-full rounded-full">Start Team trial</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
