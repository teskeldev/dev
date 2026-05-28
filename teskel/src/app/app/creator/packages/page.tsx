import Link from "next/link";
import { Plus, Package, Star, Download, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const packages = [
  { id: "1", name: "Next.js SaaS Pro Pack", type: "skill-pack", status: "published", installs: 1240, rating: 4.9, price: 49, updated: "2 days ago" },
  { id: "2", name: "Security Review Agent", type: "agent-pack", status: "published", installs: 780, rating: 4.8, price: 29, updated: "1 week ago" },
  { id: "3", name: "Stripe Billing Integration", type: "integration-pack", status: "published", installs: 510, rating: 4.9, price: 39, updated: "3 days ago" },
  { id: "4", name: "Deployment Runbook", type: "runbook-pack", status: "draft", installs: 0, rating: 0, price: 0, updated: "1 hour ago" },
];

export default function CreatorPackagesPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Packages</h1>
          <p className="mt-1 text-sm text-muted-foreground">{packages.length} packages</p>
        </div>
        <Link href="/app/creator/packages/new">
          <Button className="gap-2 rounded-lg">
            <Plus className="h-4 w-4" /> New Package
          </Button>
        </Link>
      </div>

      <div className="mt-8 space-y-3">
        {packages.map((pkg) => (
          <div key={pkg.id} className="flex items-center justify-between rounded-xl border border-border bg-white p-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teskel-accent-soft">
                <Package className="h-5 w-5 text-teskel-accent" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">{pkg.name}</span>
                  <Badge variant={pkg.status === "published" ? "default" : "secondary"} className="text-[10px]">
                    {pkg.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{pkg.type}</span>
                  <span>{pkg.price === 0 ? "Free" : `$${pkg.price}`}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {pkg.installs > 0 && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Download className="h-3 w-3" /> {pkg.installs}
                </span>
              )}
              {pkg.rating > 0 && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 fill-teskel-amber text-teskel-amber" /> {pkg.rating}
                </span>
              )}
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" /> {pkg.updated}
              </span>
              <Button variant="ghost" size="sm" className="text-xs">Edit</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
