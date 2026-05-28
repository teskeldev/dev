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
  Send,
} from "lucide-react";

export function WorkspaceMockup() {
  return (
    <section className="bg-white pb-8 pt-12 sm:pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="overflow-hidden rounded-2xl border border-border/60 bg-[#FAFAFA] shadow-[0_32px_100px_rgba(0,0,0,.12)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-border/40 bg-white px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <div className="h-3 w-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="ml-4 flex-1">
              <div className="mx-auto flex max-w-md items-center gap-2 rounded-lg bg-muted/50 px-3 py-1">
                <Search className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  teskel.dev/workspace/nextjs-saas
                </span>
              </div>
            </div>
          </div>

          {/* Topbar */}
          <div className="flex items-center justify-between border-b border-border/40 bg-white px-4 py-2">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">
                nextjs-saas
              </span>
              <div className="flex items-center gap-1.5 rounded-md bg-muted px-2 py-0.5">
                <GitBranch className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">main</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Circle className="h-2 w-2 fill-teskel-green text-teskel-green" />
                <span className="text-xs text-teskel-green">Running</span>
              </div>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <button className="rounded-md bg-teskel-accent px-2.5 py-1 text-xs font-medium text-white">
                <Play className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="flex h-[360px] sm:h-[440px]">
            {/* Sidebar */}
            <div className="hidden w-44 shrink-0 border-r border-border/40 bg-white p-3 sm:block">
              <div className="space-y-0.5">
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
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-border/40 pt-4">
                <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Files
                </p>
                <div className="space-y-0.5 text-xs text-muted-foreground">
                  <div className="rounded px-2 py-1 text-foreground">
                    src/
                  </div>
                  <div className="rounded px-2 py-1 pl-5">app/</div>
                  <div className="rounded bg-teskel-accent/10 px-2 py-1 pl-8 text-teskel-accent">
                    page.tsx
                  </div>
                  <div className="rounded px-2 py-1 pl-8">layout.tsx</div>
                  <div className="rounded px-2 py-1 pl-5">components/</div>
                  <div className="rounded px-2 py-1 pl-5">lib/</div>
                  <div className="rounded px-2 py-1">package.json</div>
                </div>
              </div>
            </div>

            {/* Center: Editor + Terminal */}
            <div className="flex flex-1 flex-col">
              {/* Editor */}
              <div className="flex-1 border-b border-border/40 p-4">
                <div className="mb-3 flex items-center gap-1">
                  <div className="rounded-t-md border border-b-0 border-border/40 bg-white px-3 py-1 text-xs font-medium text-foreground">
                    page.tsx
                  </div>
                  <div className="rounded-t-md px-3 py-1 text-xs text-muted-foreground">
                    layout.tsx
                  </div>
                  <div className="rounded-t-md px-3 py-1 text-xs text-muted-foreground">
                    api/route.ts
                  </div>
                </div>
                <div className="font-mono text-xs leading-6 text-muted-foreground">
                  <div>
                    <span className="mr-4 inline-block w-5 text-right text-muted-foreground/40">
                      1
                    </span>
                    <span className="text-teskel-purple">export default</span>{" "}
                    <span className="text-teskel-blue">function</span>{" "}
                    <span className="text-teskel-amber">Dashboard</span>
                    {"() {"}
                  </div>
                  <div>
                    <span className="mr-4 inline-block w-5 text-right text-muted-foreground/40">
                      2
                    </span>
                    {"  "}
                    <span className="text-teskel-purple">const</span> {"{ data }"}{" "}
                    = <span className="text-teskel-blue">await</span>{" "}
                    <span className="text-teskel-amber">fetchProjects</span>
                    {"();"}
                  </div>
                  <div>
                    <span className="mr-4 inline-block w-5 text-right text-muted-foreground/40">
                      3
                    </span>
                    {"  "}
                    <span className="text-teskel-purple">return</span> (
                  </div>
                  <div>
                    <span className="mr-4 inline-block w-5 text-right text-muted-foreground/40">
                      4
                    </span>
                    {"    "}
                    <span className="text-teskel-red">&lt;main</span>{" "}
                    <span className="text-teskel-cyan">className</span>=
                    <span className="text-teskel-green">
                      &quot;container&quot;
                    </span>
                    <span className="text-teskel-red">&gt;</span>
                  </div>
                  <div>
                    <span className="mr-4 inline-block w-5 text-right text-muted-foreground/40">
                      5
                    </span>
                    {"      "}
                    <span className="text-teskel-red">
                      &lt;ProjectGrid
                    </span>{" "}
                    <span className="text-teskel-cyan">data</span>=
                    {"{data}"}{" "}
                    <span className="text-teskel-red">/&gt;</span>
                  </div>
                  <div>
                    <span className="mr-4 inline-block w-5 text-right text-muted-foreground/40">
                      6
                    </span>
                    {"    "}
                    <span className="text-teskel-red">&lt;/main&gt;</span>
                  </div>
                  <div>
                    <span className="mr-4 inline-block w-5 text-right text-muted-foreground/40">
                      7
                    </span>
                    {"  );"}
                  </div>
                  <div>
                    <span className="mr-4 inline-block w-5 text-right text-muted-foreground/40">
                      8
                    </span>
                    {"}"}
                  </div>
                </div>
              </div>

              {/* Terminal */}
              <div className="h-28 bg-[#0A0A0A] p-3 sm:h-36">
                <div className="mb-2 flex items-center gap-2">
                  <Terminal className="h-3 w-3 text-[#71717A]" />
                  <span className="text-[10px] font-medium text-[#71717A]">
                    Terminal
                  </span>
                </div>
                <div className="font-mono text-xs leading-5">
                  <div className="text-teskel-green">
                    $ npm run dev
                  </div>
                  <div className="text-[#A1A1AA]">
                    &gt; nextjs-saas@0.1.0 dev
                  </div>
                  <div className="text-[#A1A1AA]">
                    &gt; next dev --turbopack
                  </div>
                  <div className="text-teskel-green">
                    Ready on http://localhost:3000
                  </div>
                </div>
              </div>
            </div>

            {/* Right panel: AI */}
            <div className="hidden w-64 shrink-0 border-l border-border/40 bg-white lg:flex lg:flex-col">
              <div className="border-b border-border/40 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-teskel-accent" />
                  <span className="text-xs font-semibold text-foreground">
                    Teskel AI
                  </span>
                </div>
              </div>
              <div className="flex-1 space-y-3 overflow-hidden p-3">
                <div className="rounded-lg bg-muted/50 p-2.5 text-xs text-muted-foreground">
                  I can see your project. What would you like help with?
                </div>
                <div className="rounded-lg bg-teskel-accent p-2.5 text-xs text-white">
                  Explain the fetchProjects function and suggest improvements.
                </div>
                <div className="rounded-lg bg-muted/50 p-2.5 text-xs text-muted-foreground">
                  <p className="font-medium text-foreground">
                    fetchProjects() Analysis:
                  </p>
                  <p className="mt-1">
                    This function queries your projects table. Consider adding
                    pagination and caching with unstable_cache...
                  </p>
                </div>
              </div>
              <div className="border-t border-border/40 p-3">
                <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-muted/30 px-3 py-1.5">
                  <input
                    type="text"
                    placeholder="Ask about your project..."
                    className="flex-1 bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground"
                    readOnly
                  />
                  <Send className="h-3 w-3 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Right panel: Preview (shown on medium screens) */}
            <div className="hidden w-56 shrink-0 border-l border-border/40 bg-white md:flex md:flex-col lg:hidden">
              <div className="border-b border-border/40 px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-xs font-medium text-muted-foreground">
                    localhost:3000
                  </span>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center p-4">
                <div className="text-center">
                  <div className="mx-auto mb-2 h-8 w-8 rounded-lg bg-teskel-accent/10">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-xs font-bold text-teskel-accent">
                        T
                      </span>
                    </div>
                  </div>
                  <p className="text-xs font-medium text-foreground">
                    Dashboard
                  </p>
                  <p className="mt-1 text-[10px] text-muted-foreground">
                    Live preview running
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between border-t border-border/40 bg-white px-4 py-1.5">
            <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
              <span>TypeScript</span>
              <span>UTF-8</span>
              <span>Ln 3, Col 12</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <Package className="h-2.5 w-2.5" />3 packages
              </span>
              <span className="flex items-center gap-1">
                <Bot className="h-2.5 w-2.5" />
                AI ready
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
