"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Bot,
  FileSearch,
  Zap,
  Shield,
  BookOpen,
  Terminal,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const aiFeatures = [
  { title: "Context-aware Assistant", desc: "AI that reads your files, terminal, packages, and notes.", icon: Sparkles },
  { title: "AI Agents", desc: "Automated workflows: review, fix, generate, deploy — with approval.", icon: Bot },
  { title: "Explain Errors", desc: "Paste a terminal error and get project-specific explanations.", icon: Terminal },
  { title: "Generate Runbooks", desc: "Create deployment and incident runbooks from your session.", icon: BookOpen },
  { title: "Security Review", desc: "Automated security analysis with actionable fix suggestions.", icon: Shield },
  { title: "Package Adaptation", desc: "AI adapts installed packages to match your project stack.", icon: Zap },
  { title: "Code Review", desc: "Get AI-powered code review with context from your project.", icon: FileSearch },
  { title: "Approval Model", desc: "AI always asks before running commands, modifying files, or deploying.", icon: Shield },
];

export default function AIPage() {
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
              AI that understands your project
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Teskel AI reads your files, terminal output, installed packages,
              notes, and history — giving answers grounded in your actual
              project context.
            </p>
            <div className="mt-8">
              <Link href="/signup">
                <Button size="lg" className="gap-2 rounded-full px-8">
                  Try Teskel AI
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F7F7F8] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aiFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                className="rounded-2xl border border-border bg-white p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="mb-3 inline-flex rounded-xl bg-teskel-accent-soft p-2.5">
                  <f.icon className="h-5 w-5 text-teskel-accent" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Agent packs on the marketplace
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-muted-foreground">
            Install pre-built AI agent configurations from the marketplace, or
            create and sell your own.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "PR Reviewer Agent",
              "Bug Fix Agent",
              "Test Generator Agent",
              "Security Reviewer Agent",
              "Documentation Agent",
              "Release Manager Agent",
              "Database Migration Agent",
              "Onboarding Agent",
            ].map((agent) => (
              <div
                key={agent}
                className="rounded-xl border border-border bg-muted/30 p-4 text-center"
              >
                <Bot className="mx-auto h-6 w-6 text-teskel-accent" />
                <p className="mt-2 text-sm font-medium text-foreground">
                  {agent}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
