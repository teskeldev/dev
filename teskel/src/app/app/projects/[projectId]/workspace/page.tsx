"use client";

import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Files,
  Package,
  Bot,
  FileText,
  Camera,
  Clock,
  Settings,
  Zap,
  Terminal,
  Sparkles,
  Globe,
  GitBranch,
  Search,
  Play,
  Circle,
  Send,
  Plus,
  ChevronRight,
  File,
  Folder,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type SidebarTab = "files" | "packages" | "recipes" | "agents" | "notes" | "snapshots" | "timeline" | "settings";

const sidebarItems: { id: SidebarTab; label: string; icon: React.ElementType }[] = [
  { id: "files", label: "Files", icon: Files },
  { id: "packages", label: "Packages", icon: Package },
  { id: "recipes", label: "Recipes", icon: Zap },
  { id: "agents", label: "Agents", icon: Bot },
  { id: "notes", label: "Notes", icon: FileText },
  { id: "snapshots", label: "Snapshots", icon: Camera },
  { id: "timeline", label: "Timeline", icon: Clock },
  { id: "settings", label: "Settings", icon: Settings },
];

const fileTree = [
  { name: "src", type: "folder", children: [
    { name: "app", type: "folder", children: [
      { name: "page.tsx", type: "file" },
      { name: "layout.tsx", type: "file" },
      { name: "globals.css", type: "file" },
    ]},
    { name: "components", type: "folder", children: [
      { name: "dashboard.tsx", type: "file" },
      { name: "metrics.tsx", type: "file" },
    ]},
    { name: "lib", type: "folder", children: [
      { name: "utils.ts", type: "file" },
      { name: "db.ts", type: "file" },
    ]},
  ]},
  { name: "package.json", type: "file" },
  { name: "tsconfig.json", type: "file" },
  { name: "AGENTS.md", type: "file" },
];

export default function WorkspacePage() {
  const [activeTab, setActiveTab] = useState<SidebarTab>("files");
  const [activeFile, setActiveFile] = useState("page.tsx");
  const [rightPanel, setRightPanel] = useState<"ai" | "notes">("ai");

  return (
    <div className="fixed inset-0 flex flex-col bg-white">
      {/* Topbar */}
      <div className="flex h-12 items-center justify-between border-b border-border px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-teskel-accent">
            <span className="text-[10px] font-bold text-white">T</span>
          </div>
          <span className="text-sm font-semibold text-foreground">nextjs-saas</span>
          <span className="text-xs text-muted-foreground">/</span>
          <span className="text-xs text-muted-foreground">Personal</span>
          <div className="flex items-center gap-1 rounded-md bg-muted px-2 py-0.5">
            <GitBranch className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">main</span>
          </div>
          <div className="flex items-center gap-1">
            <Circle className="h-2 w-2 fill-green-500 text-green-500" />
            <span className="text-xs text-green-600">Running</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-1 sm:flex">
            <Search className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Search or run command...</span>
            <kbd className="rounded border border-border bg-white px-1.5 py-0.5 text-[10px] text-muted-foreground">⌘K</kbd>
          </div>
          <Button size="sm" variant="ghost" className="h-7 gap-1 text-xs">
            <Play className="h-3 w-3" /> Run
          </Button>
          <Button size="sm" variant="ghost" className="h-7 gap-1 text-xs">
            <Package className="h-3 w-3" /> Install
          </Button>
          <Button size="sm" variant="ghost" className="h-7 gap-1 text-xs">
            <Camera className="h-3 w-3" /> Snapshot
          </Button>
        </div>
      </div>

      {/* Main workspace area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar icons */}
        <div className="flex w-12 shrink-0 flex-col items-center gap-1 border-r border-border bg-[#FAFAFA] py-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-teskel-accent-soft text-teskel-accent"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
              title={item.label}
            >
              <item.icon className="h-4 w-4" />
            </button>
          ))}
        </div>

        {/* Resizable panels */}
        <ResizablePanelGroup orientation="horizontal" className="flex-1">
          {/* Left panel: File tree / packages etc */}
          <ResizablePanel defaultSize={18} minSize={14} maxSize={30}>
            <div className="flex h-full flex-col border-r border-border bg-[#FAFAFA]">
              <div className="flex items-center justify-between border-b border-border px-3 py-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {activeTab}
                </span>
                <button className="text-muted-foreground hover:text-foreground">
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-2">
                {activeTab === "files" && (
                  <div className="space-y-0.5">
                    {fileTree.map((item) => (
                      <FileTreeItem
                        key={item.name}
                        item={item}
                        depth={0}
                        activeFile={activeFile}
                        onSelect={setActiveFile}
                      />
                    ))}
                  </div>
                )}
                {activeTab === "packages" && (
                  <div className="space-y-2">
                    {["Next.js SaaS Pro Pack", "Stripe Billing", "Security Agent"].map(
                      (pkg) => (
                        <div key={pkg} className="rounded-lg bg-white p-2.5 text-xs shadow-sm">
                          <p className="font-medium text-foreground">{pkg}</p>
                          <p className="mt-0.5 text-muted-foreground">v1.0.0</p>
                        </div>
                      )
                    )}
                    <div className="rounded-lg border border-dashed border-border p-2.5 text-center text-xs text-muted-foreground">
                      + Add package
                    </div>
                  </div>
                )}
                {activeTab === "recipes" && (
                  <div className="space-y-2">
                    {["Start dev", "Run tests", "Deploy preview", "Reset DB", "Seed DB", "Security scan"].map(
                      (recipe) => (
                        <div key={recipe} className="flex items-center gap-2 rounded-lg bg-white p-2.5 text-xs shadow-sm">
                          <Zap className="h-3 w-3 text-teskel-accent" />
                          <span className="font-medium text-foreground">{recipe}</span>
                        </div>
                      )
                    )}
                  </div>
                )}
                {activeTab === "agents" && (
                  <div className="space-y-2">
                    {["PR Reviewer", "Bug Fix Agent", "Test Generator"].map(
                      (agent) => (
                        <div key={agent} className="flex items-center gap-2 rounded-lg bg-white p-2.5 text-xs shadow-sm">
                          <Bot className="h-3 w-3 text-teskel-accent" />
                          <span className="font-medium text-foreground">{agent}</span>
                        </div>
                      )
                    )}
                  </div>
                )}
                {activeTab === "notes" && (
                  <div className="space-y-2">
                    {["Billing integration notes", "Deploy checklist", "Bug triage"].map(
                      (note) => (
                        <div key={note} className="rounded-lg bg-white p-2.5 text-xs shadow-sm">
                          <p className="font-medium text-foreground">{note}</p>
                          <p className="mt-0.5 text-muted-foreground">Updated 2h ago</p>
                        </div>
                      )
                    )}
                  </div>
                )}
                {activeTab === "snapshots" && (
                  <div className="space-y-2">
                    {["Before release", "After billing fix", "Initial setup"].map(
                      (snap) => (
                        <div key={snap} className="rounded-lg bg-white p-2.5 text-xs shadow-sm">
                          <p className="font-medium text-foreground">{snap}</p>
                          <p className="mt-0.5 text-muted-foreground">3 hours ago</p>
                        </div>
                      )
                    )}
                  </div>
                )}
                {activeTab === "timeline" && (
                  <div className="space-y-2">
                    {[
                      "npm run dev",
                      "AI: generated runbook",
                      "Installed stripe-billing",
                      "Snapshot: before-release",
                      "File edited: page.tsx",
                    ].map((event) => (
                      <div key={event} className="rounded-lg bg-white p-2.5 text-xs shadow-sm">
                        <p className="text-foreground">{event}</p>
                        <p className="mt-0.5 text-muted-foreground">Recent</p>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "settings" && (
                  <div className="space-y-3 p-1 text-xs text-muted-foreground">
                    <p className="font-medium text-foreground">Project Settings</p>
                    <p>Runtime: Node.js 22</p>
                    <p>AI Provider: Anthropic</p>
                    <p>Auto-snapshot: Enabled</p>
                  </div>
                )}
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Center: Editor + Terminal */}
          <ResizablePanel defaultSize={52} minSize={30}>
            <ResizablePanelGroup orientation="vertical">
              {/* Editor */}
              <ResizablePanel defaultSize={65} minSize={30}>
                <div className="flex h-full flex-col bg-white">
                  {/* Editor tabs */}
                  <div className="flex items-center border-b border-border bg-[#FAFAFA] px-2">
                    {["page.tsx", "layout.tsx", "api/route.ts"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveFile(tab)}
                        className={`border-b-2 px-3 py-2 text-xs font-medium transition-colors ${
                          activeFile === tab
                            ? "border-teskel-accent bg-white text-foreground"
                            : "border-transparent text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  {/* Editor content */}
                  <div className="flex-1 overflow-auto p-4 font-mono text-sm leading-relaxed">
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">1</span>
                      <span className="text-[#7C3AED]">import</span> {"{"} Metadata {"}"} <span className="text-[#7C3AED]">from</span> <span className="text-[#16A34A]">&quot;next&quot;</span>;
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">2</span>
                      <span className="text-[#7C3AED]">import</span> {"{"} DashboardLayout {"}"} <span className="text-[#7C3AED]">from</span> <span className="text-[#16A34A]">&quot;@/components/dashboard&quot;</span>;
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">3</span>
                      <span className="text-[#7C3AED]">import</span> {"{"} MetricsGrid {"}"} <span className="text-[#7C3AED]">from</span> <span className="text-[#16A34A]">&quot;@/components/metrics&quot;</span>;
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">4</span>
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">5</span>
                      <span className="text-[#7C3AED]">export const</span> metadata: <span className="text-[#0891B2]">Metadata</span> = {"{"}
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">6</span>
                      {"  "}title: <span className="text-[#16A34A]">&quot;Dashboard — SaaS App&quot;</span>,
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">7</span>
                      {"}"};
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">8</span>
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">9</span>
                      <span className="text-[#7C3AED]">export default</span> <span className="text-[#2563EB]">async function</span> <span className="text-[#D97706]">DashboardPage</span>() {"{"}
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">10</span>
                      {"  "}<span className="text-[#7C3AED]">const</span> data = <span className="text-[#2563EB]">await</span> <span className="text-[#D97706]">fetchMetrics</span>();
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">11</span>
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">12</span>
                      {"  "}<span className="text-[#7C3AED]">return</span> (
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">13</span>
                      {"    "}&lt;<span className="text-[#DC2626]">DashboardLayout</span>&gt;
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">14</span>
                      {"      "}&lt;<span className="text-[#DC2626]">MetricsGrid</span> <span className="text-[#0891B2]">data</span>={"{"}data{"}"} /&gt;
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">15</span>
                      {"    "}&lt;/<span className="text-[#DC2626]">DashboardLayout</span>&gt;
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">16</span>
                      {"  "});
                    </div>
                    <div className="text-muted-foreground">
                      <span className="mr-4 inline-block w-6 text-right text-xs text-muted-foreground/50">17</span>
                      {"}"}
                    </div>
                  </div>
                </div>
              </ResizablePanel>

              <ResizableHandle withHandle />

              {/* Terminal */}
              <ResizablePanel defaultSize={35} minSize={15}>
                <div className="flex h-full flex-col bg-[#0A0A0A]">
                  <div className="flex items-center justify-between border-b border-white/10 px-3 py-1.5">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <Terminal className="h-3 w-3 text-white/60" />
                        <span className="text-[10px] font-medium text-white/60">Terminal</span>
                      </div>
                      <button className="text-[10px] text-white/40 hover:text-white/60">
                        zsh
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-white/40 hover:text-white/60">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-auto p-3 font-mono text-xs leading-relaxed text-[#E5E7EB]/80">
                    <div><span className="text-green-400">~/nextjs-saas $</span> npm run dev</div>
                    <div className="text-cyan-400 mt-1">&gt; nextjs-saas@0.1.0 dev</div>
                    <div className="text-cyan-400">&gt; next dev --turbo</div>
                    <div className="mt-1 text-cyan-400">▲ Next.js 15.3.2 (Turbopack)</div>
                    <div className="text-white/60">- Local:   http://localhost:3000</div>
                    <div className="text-white/60">- Network: http://192.168.1.5:3000</div>
                    <div className="mt-1 text-green-400">✓ Ready in 1.2s</div>
                    <div className="mt-1 text-white/60">○ Compiling /dashboard ...</div>
                    <div className="text-green-400">✓ Compiled /dashboard in 340ms</div>
                    <div className="mt-2"><span className="text-green-400">~/nextjs-saas $</span> <span className="animate-pulse">▊</span></div>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Right panel: AI / Notes */}
          <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
            <div className="flex h-full flex-col border-l border-border bg-[#FAFAFA]">
              <div className="flex items-center border-b border-border bg-white">
                <button
                  onClick={() => setRightPanel("ai")}
                  className={`flex-1 border-b-2 px-3 py-2 text-xs font-medium transition-colors ${
                    rightPanel === "ai"
                      ? "border-teskel-accent text-foreground"
                      : "border-transparent text-muted-foreground"
                  }`}
                >
                  <Sparkles className="mr-1 inline h-3 w-3" />
                  AI Assistant
                </button>
                <button
                  onClick={() => setRightPanel("notes")}
                  className={`flex-1 border-b-2 px-3 py-2 text-xs font-medium transition-colors ${
                    rightPanel === "notes"
                      ? "border-teskel-accent text-foreground"
                      : "border-transparent text-muted-foreground"
                  }`}
                >
                  <FileText className="mr-1 inline h-3 w-3" />
                  Notes
                </button>
              </div>

              {rightPanel === "ai" ? (
                <div className="flex flex-1 flex-col">
                  <div className="flex flex-wrap gap-1 border-b border-border p-2">
                    {["terminal.log", "package: stripe", "repo: nextjs-saas"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-teskel-accent-soft px-1.5 py-0.5 text-[10px] font-medium text-teskel-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex-1 space-y-3 overflow-y-auto p-3">
                    <div className="rounded-lg bg-white p-3 text-xs text-muted-foreground shadow-sm">
                      I can see your project context including files, terminal output, and installed packages. How can I help?
                    </div>
                    <div className="rounded-lg bg-teskel-accent p-3 text-xs text-white">
                      Generate a deployment runbook based on my current setup.
                    </div>
                    <div className="rounded-lg bg-white p-3 text-xs text-muted-foreground shadow-sm">
                      <p className="font-medium text-foreground">Deployment Runbook</p>
                      <p className="mt-2">Based on your Next.js SaaS project with Stripe billing:</p>
                      <ol className="mt-2 list-decimal space-y-1 pl-4">
                        <li>Run tests: <code className="rounded bg-muted px-1">npm test</code></li>
                        <li>Build: <code className="rounded bg-muted px-1">npm run build</code></li>
                        <li>Verify Stripe webhooks</li>
                        <li>Deploy to Vercel</li>
                        <li>Verify health checks</li>
                      </ol>
                    </div>
                    <div className="rounded-lg border border-border bg-white p-3">
                      <p className="text-[10px] font-medium text-foreground">Suggested actions</p>
                      <div className="mt-2 space-y-1">
                        {["Save as recipe", "Create snapshot", "Review security"].map((action) => (
                          <button key={action} className="w-full rounded-md bg-muted px-2 py-1 text-left text-[10px] text-muted-foreground hover:bg-muted/80">
                            {action}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-border bg-white p-2">
                    <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2">
                      <input
                        type="text"
                        placeholder="Ask about your project..."
                        className="flex-1 bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none"
                      />
                      <Send className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-1 flex-col">
                  <div className="flex-1 overflow-y-auto p-3">
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <h3 className="text-sm font-semibold text-foreground">
                        Billing integration notes
                      </h3>
                      <div className="mt-3 text-xs leading-relaxed text-muted-foreground">
                        <p>Steps to integrate Stripe billing:</p>
                        <ul className="mt-2 list-disc space-y-1 pl-4">
                          <li>Set up Stripe webhook endpoint</li>
                          <li>Create subscription checkout flow</li>
                          <li>Handle invoice.paid event</li>
                          <li>Add customer portal link</li>
                        </ul>
                        <p className="mt-3 text-[10px] text-muted-foreground">
                          Updated 2 hours ago · Linked to snapshot &quot;before-release&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-border bg-white p-2">
                    <Button variant="ghost" size="sm" className="w-full gap-1 text-xs">
                      <Plus className="h-3 w-3" /> New note
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* Status bar */}
      <div className="flex h-6 items-center justify-between border-t border-border bg-[#FAFAFA] px-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Circle className="h-1.5 w-1.5 fill-green-500 text-green-500" />
            <span className="text-[10px] text-muted-foreground">runtime</span>
          </div>
          <span className="text-[10px] text-muted-foreground">main</span>
          <span className="text-[10px] text-muted-foreground">node 22</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-muted-foreground">3 packages</span>
          <span className="text-[10px] text-muted-foreground">Anthropic</span>
          <div className="flex items-center gap-1">
            <Globe className="h-2.5 w-2.5 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground">:3000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileTreeItem({
  item,
  depth,
  activeFile,
  onSelect,
}: {
  item: { name: string; type: string; children?: { name: string; type: string; children?: { name: string; type: string }[] }[] };
  depth: number;
  activeFile: string;
  onSelect: (name: string) => void;
}) {
  const [open, setOpen] = useState(depth < 1);

  if (item.type === "folder") {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center gap-1 rounded px-1 py-0.5 text-xs text-muted-foreground hover:bg-muted"
          style={{ paddingLeft: `${depth * 12 + 4}px` }}
        >
          <ChevronRight className={`h-3 w-3 transition-transform ${open ? "rotate-90" : ""}`} />
          <Folder className="h-3 w-3 text-teskel-accent" />
          <span>{item.name}</span>
        </button>
        {open && item.children?.map((child) => (
          <FileTreeItem key={child.name} item={child} depth={depth + 1} activeFile={activeFile} onSelect={onSelect} />
        ))}
      </div>
    );
  }

  return (
    <button
      onClick={() => onSelect(item.name)}
      className={`flex w-full items-center gap-1 rounded px-1 py-0.5 text-xs ${
        activeFile === item.name ? "bg-teskel-accent-soft text-teskel-accent" : "text-muted-foreground hover:bg-muted"
      }`}
      style={{ paddingLeft: `${depth * 12 + 4}px` }}
    >
      <File className="h-3 w-3" />
      <span>{item.name}</span>
    </button>
  );
}
