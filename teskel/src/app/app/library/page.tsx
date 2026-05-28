"use client";

import { useState } from "react";
import { Package, Download, Check, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Tab = "installed" | "purchased" | "saved";

const installedPackages = [
  { name: "Next.js SaaS Pro Pack", version: "1.0.0", project: "nextjs-saas", updatedAt: "2 days ago" },
  { name: "Stripe Billing Integration", version: "1.1.0", project: "nextjs-saas", updatedAt: "1 week ago" },
  { name: "Security Review Agent", version: "2.0.0", project: "api-gateway", updatedAt: "3 days ago" },
];

const purchasedPackages = [
  { name: "Next.js SaaS Pro Pack", price: 49, purchasedAt: "2 weeks ago" },
  { name: "Stripe Billing Integration", price: 39, purchasedAt: "1 month ago" },
  { name: "SaaS Dashboard UI Kit", price: 59, purchasedAt: "1 month ago" },
];

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<Tab>("installed");

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold text-foreground">Library</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Your installed, purchased, and saved packages.
      </p>

      <div className="mt-6 flex gap-1 rounded-lg bg-muted p-1">
        {(["installed", "purchased", "saved"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-md px-4 py-2 text-sm font-medium capitalize transition-colors ${
              activeTab === tab ? "bg-white text-foreground shadow-sm" : "text-muted-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {activeTab === "installed" &&
          installedPackages.map((pkg) => (
            <div key={pkg.name} className="flex items-center justify-between rounded-xl border border-border bg-white p-4">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">{pkg.name}</p>
                  <p className="text-xs text-muted-foreground">v{pkg.version} · {pkg.project}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="gap-1 text-xs">
                  <Check className="h-3 w-3" /> Installed
                </Badge>
                <span className="text-xs text-muted-foreground">{pkg.updatedAt}</span>
              </div>
            </div>
          ))}
        {activeTab === "purchased" &&
          purchasedPackages.map((pkg) => (
            <div key={pkg.name} className="flex items-center justify-between rounded-xl border border-border bg-white p-4">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">{pkg.name}</p>
                  <p className="text-xs text-muted-foreground">${pkg.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="text-xs">Install</Button>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" /> {pkg.purchasedAt}
                </span>
              </div>
            </div>
          ))}
        {activeTab === "saved" && (
          <div className="rounded-xl border border-dashed border-border bg-white p-12 text-center">
            <Download className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-3 text-sm text-muted-foreground">No saved packages yet.</p>
            <p className="mt-1 text-xs text-muted-foreground">Save packages from the marketplace to install later.</p>
          </div>
        )}
      </div>
    </div>
  );
}
