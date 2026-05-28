"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Terminal,
  Package,
  Store,
  Users,
  Bot,
  Shield,
  Code,
  Zap,
  ArrowRight,
} from "lucide-react";

const categories = [
  { title: "Getting Started", desc: "Set up your first workspace and project.", icon: BookOpen, href: "#" },
  { title: "Workspaces", desc: "Terminal, editor, preview, notes, and sessions.", icon: Terminal, href: "#" },
  { title: "Packages", desc: "Install, manage, and create packages.", icon: Package, href: "#" },
  { title: "Marketplace", desc: "Browse, buy, and sell developer packages.", icon: Store, href: "#" },
  { title: "Creators", desc: "Publish packages and earn revenue.", icon: Code, href: "#" },
  { title: "Teams", desc: "Shared workspaces and private packages.", icon: Users, href: "#" },
  { title: "AI Agents", desc: "Configure and use AI agents in your projects.", icon: Bot, href: "#" },
  { title: "Security", desc: "Permissions, approvals, and safety model.", icon: Shield, href: "#" },
  { title: "API", desc: "REST API reference for integrations.", icon: Code, href: "#" },
  { title: "CLI", desc: "Command-line interface for publish and install.", icon: Zap, href: "#" },
];

export default function DocsPage() {
  return (
    <section className="bg-[#F7F7F8] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Documentation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn how to build, install, and sell with Teskel.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Link key={cat.title} href={cat.href}>
              <motion.div
                className="group h-full rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="mb-3 inline-flex rounded-xl bg-teskel-accent-soft p-2.5">
                  <cat.icon className="h-5 w-5 text-teskel-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{cat.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-teskel-accent">
                  Read docs
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
