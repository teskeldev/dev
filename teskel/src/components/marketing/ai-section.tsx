"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, FileCode, Terminal, Package, BookOpen, FileText } from "lucide-react";

const prompts = [
  "Explain this terminal error using my project context.",
  "Generate AGENTS.md for this repo.",
  "Install a Stripe billing workflow and adapt it to my stack.",
  "Create a runbook from this session.",
  "Review this project for security issues.",
];

const contextTags = [
  { label: "terminal.log", icon: Terminal },
  { label: "package: stripe-billing", icon: Package },
  { label: "repo: nextjs-saas", icon: FileCode },
  { label: "snapshot: before-release", icon: BookOpen },
  { label: "notes: billing-bug", icon: FileText },
];

export function AISection() {
  const [currentPrompt, setCurrentPrompt] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrompt((p) => (p + 1) % prompts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F7F7F8] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              AI that understands your entire project.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your AI assistant reads your files, terminal output, installed
              packages, notes, and history. It gives answers grounded in your
              actual project context.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {contextTags.map((tag) => (
                <div
                  key={tag.label}
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5"
                >
                  <tag.icon className="h-3 w-3 text-teskel-accent" />
                  <span className="text-xs font-medium text-muted-foreground">
                    {tag.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-border bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,.04),0_8px_24px_rgba(0,0,0,.05)]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-teskel-accent" />
              <span className="text-sm font-semibold text-foreground">
                Teskel AI
              </span>
            </div>

            <div className="space-y-3">
              <div className="rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
                I can see your project context. What would you like help with?
              </div>

              <div className="h-12 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPrompt}
                    className="rounded-lg bg-teskel-accent p-3 text-sm text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {prompts[currentPrompt]}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="rounded-lg bg-muted/50 p-3">
                <p className="text-sm text-muted-foreground">
                  Analyzing your project files and terminal history...
                </p>
                <div className="mt-2 flex gap-1">
                  {[0, 1, 2].map((dot) => (
                    <motion.div
                      key={dot}
                      className="h-1.5 w-1.5 rounded-full bg-teskel-accent"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: dot * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2">
              <input
                type="text"
                placeholder="Ask about your project..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                readOnly
              />
              <Send className="h-4 w-4 text-muted-foreground" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
