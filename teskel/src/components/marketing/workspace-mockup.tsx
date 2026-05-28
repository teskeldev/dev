"use client";

import { motion } from "framer-motion";
import {
  Files,
  Package,
  Bot,
  FileText,
  Camera,
  Clock,
  Terminal,
  Sparkles,
  Globe,
  GitBranch,
  Search,
  Play,
  Circle,
} from "lucide-react";

export function WorkspaceMockup() {
  return (
    <section className="bg-[#F7F7F8] py-4 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_24px_80px_rgba(15,23,42,.14)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Topbar */}
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">nextjs-saas</span>
              <div className="flex items-center gap-1.5 rounded-md bg-muted px-2 py-1">
                <GitBranch className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">main</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Circle className="h-2 w-2 fill-teskel-green text-teskel-green" />
                <span className="text-xs text-teskel-green">Running</span>
              </div>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-1.5">
                <Search className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Search or run command...</span>
              </div>
              <button className="rounded-md bg-teskel-accent px-2.5 py-1.5 text-xs font-medium text-white">
                <Play className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="flex h-[340px] sm:h-[420px]">
            {/* Left sidebar */}
            <div className="hidden w-48 shrink-0 border-r border-border bg-[#FAFAFA] p-3 sm:block">
              <div className="space-y-1">
                {[
                  { icon: Files, label: "Files", active: true },
                  { icon: Package, label: "Packages" },
                  { icon: Bot, label: "Agents" },
                  { icon: FileText, label: "Notes" },
                  { icon: Camera, label: "Snapshots" },
                  { icon: Clock, label: "Timeline" },
                ].map(({ icon: Icon, label, active }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium ${
                      active
                        ? "bg-teskel-accent-soft text-teskel-accent"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-teskel-amber/30 bg-teskel-amber/5 p-2.5">
                <p className="text-[10px] font-medium text-teskel-amber">
                  Package update available
                </p>
                <p className="mt-0.5 text-[10px] text-muted-foreground">
                  stripe-billing v1.2.0
                </p>
              </div>
            </div>

            {/* Center: Editor + Terminal */}
            <div className="flex flex-1 flex-col">
              {/* Editor */}
              <div className="flex-1 border-b border-border p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground">
                    page.tsx
                  </div>
                  <div className="rounded-md px-2.5 py-1 text-xs text-muted-foreground">
                    layout.tsx
                  </div>
                  <div className="rounded-md px-2.5 py-1 text-xs text-muted-foreground">
                    api/route.ts
                  </div>
                </div>
                <div className="font-mono text-xs leading-relaxed text-muted-foreground">
                  <div>
                    <span className="text-teskel-purple">export default</span>{" "}
                    <span className="text-teskel-blue">function</span>{" "}
                    <span className="text-teskel-amber">Dashboard</span>() {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-teskel-purple">const</span> {"{"} data {"}"} ={" "}
                    <span className="text-teskel-blue">await</span>{" "}
                    <span className="text-teskel-amber">fetchMetrics</span>();
                  </div>
                  <div className="pl-4">
                    <span className="text-teskel-purple">return</span> (
                  </div>
                  <div className="pl-8">
                    {"<"}<span className="text-teskel-red">DashboardLayout</span>{">"}
                  </div>
                  <div className="pl-12">
                    {"<"}<span className="text-teskel-red">MetricsGrid</span>{" "}
                    <span className="text-teskel-cyan">data</span>={"{"}<span className="text-foreground">data</span>{"}"} {"/>"}
                  </div>
                  <div className="pl-8">
                    {"</"}<span className="text-teskel-red">DashboardLayout</span>{">"}
                  </div>
                  <div className="pl-4">);</div>
                  <div>{"}"}</div>
                </div>
              </div>

              {/* Terminal */}
              <div className="h-28 bg-teskel-terminal p-3 sm:h-36">
                <div className="mb-2 flex items-center gap-2">
                  <Terminal className="h-3 w-3 text-teskel-terminal-text/60" />
                  <span className="text-[10px] font-medium text-teskel-terminal-text/60">
                    Terminal
                  </span>
                </div>
                <div className="font-mono text-xs leading-relaxed text-teskel-terminal-text/80">
                  <div>
                    <span className="text-teskel-green">$</span> npm run dev
                  </div>
                  <div className="text-teskel-cyan">
                    ▲ Next.js 15.3 (turbo)
                  </div>
                  <div className="text-muted-foreground">
                    - Local: http://localhost:3000
                  </div>
                  <div className="text-teskel-green">
                    ✓ Ready in 1.2s
                  </div>
                </div>
              </div>
            </div>

            {/* Right panel: AI */}
            <div className="hidden w-56 shrink-0 border-l border-border bg-[#FAFAFA] p-3 lg:block">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-teskel-accent" />
                <span className="text-xs font-semibold text-foreground">AI Assistant</span>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1">
                  {["terminal.log", "repo: nextjs-saas"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-teskel-accent-soft px-1.5 py-0.5 text-[10px] font-medium text-teskel-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="rounded-lg bg-white p-2.5 text-xs text-muted-foreground shadow-sm">
                  I see you&apos;re building a SaaS dashboard. Want me to generate a runbook
                  for your deployment workflow?
                </div>
                <div className="rounded-lg bg-teskel-accent p-2.5 text-xs text-white">
                  Yes, create a deployment runbook based on my current setup.
                </div>
                <div className="rounded-lg border border-border bg-white p-2.5">
                  <p className="text-[10px] font-medium text-foreground">
                    Suggested actions
                  </p>
                  <div className="mt-1.5 space-y-1">
                    {["Generate runbook", "Review code", "Explain error"].map((action) => (
                      <div
                        key={action}
                        className="rounded-md bg-muted px-2 py-1 text-[10px] text-muted-foreground"
                      >
                        {action}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between border-t border-border bg-[#FAFAFA] px-4 py-1.5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Circle className="h-1.5 w-1.5 fill-teskel-green text-teskel-green" />
                <span className="text-[10px] text-muted-foreground">runtime</span>
              </div>
              <span className="text-[10px] text-muted-foreground">main</span>
              <span className="text-[10px] text-muted-foreground">node 22</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-muted-foreground">3 packages</span>
              <div className="flex items-center gap-1">
                <Globe className="h-2.5 w-2.5 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">:3000</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
