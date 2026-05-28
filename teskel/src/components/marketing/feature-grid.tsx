"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Terminal,
  Code,
  Globe,
  Sparkles,
  Package,
  Bot,
  FileText,
  Star,
  Download,
  BadgeCheck,
  DollarSign,
  Send,
} from "lucide-react";

export function FeatureGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Feature 1: Workspace */}
        <FeatureBlock
          heading="Everything you need, one tab away"
          description="Terminal, editor, preview, packages, AI, and notes — your entire dev environment in the browser. No setup, no switching tools."
          linkText="Explore the workspace"
          linkHref="/workspace"
          demo={<WorkspaceFeatureDemo />}
        />

        {/* Feature 2: AI */}
        <FeatureBlock
          heading="AI that understands your entire project"
          description="Your AI assistant reads your files, terminal output, installed packages, and session history. It gives answers grounded in your actual project context."
          linkText="Learn about Teskel AI"
          linkHref="/ai"
          demo={<AIFeatureDemo />}
          reverse
        />

        {/* Feature 3: Marketplace */}
        <FeatureBlock
          heading="A marketplace for engineering systems"
          description="Browse, install, and sell reusable developer workflows — skill packs, agent configs, templates, recipes, and more. The app store for how engineers build."
          linkText="Browse the marketplace"
          linkHref="/marketplace"
          demo={<MarketplaceFeatureDemo />}
        />

        {/* Feature 4: Creator Economy */}
        <FeatureBlock
          heading="Turn your workflow into a product"
          description="Package your engineering knowledge — deploy pipelines, testing workflows, security reviews — and sell them on the marketplace. Keep 80% of every sale."
          linkText="Start creating"
          linkHref="/creators"
          demo={<CreatorFeatureDemo />}
          reverse
        />
      </div>
    </section>
  );
}

function FeatureBlock({
  heading,
  description,
  linkText,
  linkHref,
  demo,
  reverse,
}: {
  heading: string;
  description: string;
  linkText: string;
  linkHref: string;
  demo: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="border-t border-border/40 py-20 sm:py-28">
      <div
        className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {heading}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
          <Link
            href={linkHref}
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-teskel-accent transition-colors hover:text-teskel-accent-hover"
          >
            {linkText} <span>&rarr;</span>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {demo}
        </motion.div>
      </div>
    </div>
  );
}

function WorkspaceFeatureDemo() {
  return (
    <div className="overflow-hidden rounded-xl border border-border/60 bg-white shadow-[0_8px_40px_rgba(0,0,0,.08)]">
      <div className="flex items-center gap-1.5 border-b border-border/40 px-4 py-2">
        <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-xs text-muted-foreground">Teskel Workspace</span>
      </div>
      <div className="flex h-64">
        <div className="w-36 shrink-0 border-r border-border/40 bg-[#FAFAFA] p-3">
          <div className="space-y-1">
            {[
              { icon: Terminal, label: "Terminal", active: false },
              { icon: Code, label: "Editor", active: true },
              { icon: Globe, label: "Preview", active: false },
              { icon: Package, label: "Packages", active: false },
              { icon: Bot, label: "Agents", active: false },
              { icon: FileText, label: "Notes", active: false },
            ].map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-md px-2 py-1 text-[11px] ${
                  active
                    ? "bg-white font-medium text-foreground shadow-sm"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className="h-3 w-3" />
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="font-mono text-[11px] leading-5 text-muted-foreground">
            <div>
              <span className="text-teskel-purple">import</span>
              {" { Dashboard } "}
              <span className="text-teskel-purple">from</span>
              <span className="text-teskel-green">
                {" "}
                &quot;./components&quot;
              </span>
            </div>
            <div>
              <span className="text-teskel-purple">import</span>
              {" { fetchData } "}
              <span className="text-teskel-purple">from</span>
              <span className="text-teskel-green">
                {" "}
                &quot;./lib/api&quot;
              </span>
            </div>
            <div className="mt-2">
              <span className="text-teskel-purple">export default</span>
              <span className="text-teskel-blue"> async function</span>
              <span className="text-teskel-amber"> Page</span>
              {"() {"}
            </div>
            <div>
              {"  "}
              <span className="text-teskel-purple">const</span> data ={" "}
              <span className="text-teskel-blue">await</span>{" "}
              <span className="text-teskel-amber">fetchData</span>()
            </div>
            <div>
              {"  "}
              <span className="text-teskel-purple">return</span> {"<"}
              <span className="text-teskel-red">Dashboard</span> data={"{data}"} /
              {">"}
            </div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIFeatureDemo() {
  return (
    <div className="overflow-hidden rounded-xl border border-border/60 bg-white shadow-[0_8px_40px_rgba(0,0,0,.08)]">
      <div className="border-b border-border/40 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-teskel-accent" />
          <span className="text-xs font-semibold text-foreground">
            Teskel AI
          </span>
        </div>
      </div>
      <div className="space-y-3 p-4">
        <div className="rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
          I can see your project context — files, terminal, packages, and notes.
        </div>
        <div className="ml-8 rounded-lg bg-teskel-accent p-3 text-xs text-white">
          Why is my build failing? Check the terminal output.
        </div>
        <div className="rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
          <p className="font-medium text-foreground">Build Error Analysis:</p>
          <p className="mt-1.5">
            Your build fails because of a missing dependency. The error in your
            terminal shows <code className="rounded bg-white/80 px-1 py-0.5 text-teskel-red">Module not found: stripe</code>.
          </p>
          <p className="mt-1.5">
            Run <code className="rounded bg-white/80 px-1 py-0.5">npm install stripe</code> or install the{" "}
            <span className="font-medium text-teskel-accent">
              Stripe Billing Integration
            </span>{" "}
            package from the marketplace.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-border/40 px-3 py-2">
          <input
            type="text"
            placeholder="Ask about your project..."
            className="flex-1 bg-transparent text-xs outline-none placeholder:text-muted-foreground"
            readOnly
          />
          <Send className="h-3 w-3 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}

function MarketplaceFeatureDemo() {
  const packages = [
    {
      title: "Next.js SaaS Pro Pack",
      type: "skill-pack",
      creator: "Sarah Chen",
      price: 49,
      rating: 4.9,
      installs: 12400,
      verified: true,
    },
    {
      title: "Security Review Agent",
      type: "agent-pack",
      creator: "Alex Rivera",
      price: 29,
      rating: 4.8,
      installs: 7800,
      verified: true,
    },
    {
      title: "Stripe Billing Integration",
      type: "integration",
      creator: "Marcus Lee",
      price: 39,
      rating: 4.9,
      installs: 9100,
      verified: true,
    },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-border/60 bg-white shadow-[0_8px_40px_rgba(0,0,0,.08)]">
      <div className="border-b border-border/40 px-4 py-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground">
            Marketplace
          </span>
          <div className="flex items-center gap-1.5">
            {["All", "Skills", "Agents", "Templates"].map((cat, i) => (
              <span
                key={cat}
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${
                  i === 0
                    ? "bg-foreground text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="divide-y divide-border/40">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className="flex items-center justify-between px-4 py-3"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-foreground">
                  {pkg.title}
                </span>
                {pkg.verified && (
                  <BadgeCheck className="h-3 w-3 text-teskel-accent" />
                )}
              </div>
              <div className="mt-1 flex items-center gap-3 text-[10px] text-muted-foreground">
                <span>{pkg.type}</span>
                <span className="flex items-center gap-0.5">
                  <Star className="h-2.5 w-2.5 fill-teskel-amber text-teskel-amber" />
                  {pkg.rating}
                </span>
                <span className="flex items-center gap-0.5">
                  <Download className="h-2.5 w-2.5" />
                  {(pkg.installs / 1000).toFixed(1)}k
                </span>
                <span>by {pkg.creator}</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-foreground">
              ${pkg.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CreatorFeatureDemo() {
  return (
    <div className="overflow-hidden rounded-xl border border-border/60 bg-white shadow-[0_8px_40px_rgba(0,0,0,.08)]">
      <div className="border-b border-border/40 px-4 py-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground">
            Creator Dashboard
          </span>
          <span className="text-[10px] text-muted-foreground">This month</span>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-muted/50 p-3 text-center">
            <p className="text-xl font-bold text-foreground">$2,847</p>
            <p className="text-[10px] text-muted-foreground">Revenue</p>
          </div>
          <div className="rounded-lg bg-muted/50 p-3 text-center">
            <p className="text-xl font-bold text-foreground">1,234</p>
            <p className="text-[10px] text-muted-foreground">Installs</p>
          </div>
          <div className="rounded-lg bg-muted/50 p-3 text-center">
            <p className="text-xl font-bold text-foreground">4.9</p>
            <p className="text-[10px] text-muted-foreground">Avg Rating</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-teskel-green/20 bg-teskel-green/5 px-3 py-2">
          <DollarSign className="h-4 w-4 text-teskel-green" />
          <div>
            <span className="text-xs font-semibold text-foreground">80%</span>
            <span className="ml-1 text-xs text-muted-foreground">
              creator revenue on every sale
            </span>
          </div>
        </div>
        <div className="mt-3 space-y-1.5">
          {[
            { name: "Next.js SaaS Pro Pack", installs: 412, trend: "+18%" },
            { name: "Security Review Agent", installs: 287, trend: "+12%" },
            { name: "Stripe Billing", installs: 198, trend: "+24%" },
          ].map((pkg) => (
            <div
              key={pkg.name}
              className="flex items-center justify-between rounded-lg bg-muted/30 px-3 py-2"
            >
              <span className="text-[11px] font-medium text-foreground">
                {pkg.name}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-muted-foreground">
                  {pkg.installs} installs
                </span>
                <span className="text-[10px] font-medium text-teskel-green">
                  {pkg.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
