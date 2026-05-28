import Link from "next/link";
import {
  Terminal,
  Package,
  FileText,
  Clock,
  Camera,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectOverviewPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-foreground">nextjs-saas</h1>
            <Badge variant="secondary">main</Badge>
            <div className="flex items-center gap-1.5 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Running
            </div>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">Personal workspace</p>
        </div>
        <Link href="/app/projects/demo/workspace">
          <Button className="gap-2 rounded-lg">
            Open Workspace
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Sessions", value: "12", icon: Terminal },
          { label: "Packages", value: "3", icon: Package },
          { label: "Notes", value: "5", icon: FileText },
          { label: "Snapshots", value: "8", icon: Camera },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-white p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <stat.icon className="h-4 w-4" />
              <span className="text-xs">{stat.label}</span>
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white p-6">
          <h2 className="text-sm font-semibold text-foreground">
            Installed Packages
          </h2>
          <div className="mt-4 space-y-2">
            {["Next.js SaaS Pro Pack", "Stripe Billing", "Security Agent"].map(
              (pkg) => (
                <div
                  key={pkg}
                  className="flex items-center gap-2 rounded-lg border border-border p-3"
                >
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{pkg}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-white p-6">
          <h2 className="text-sm font-semibold text-foreground">
            Recent Timeline
          </h2>
          <div className="mt-4 space-y-3">
            {[
              { text: "npm run dev executed", time: "2 min ago", icon: Terminal },
              { text: "AI generated runbook", time: "15 min ago", icon: Sparkles },
              { text: "Snapshot created", time: "1 hour ago", icon: Camera },
              { text: "Package updated", time: "2 hours ago", icon: Package },
            ].map((event) => (
              <div key={event.text} className="flex items-start gap-3">
                <event.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-sm text-foreground">{event.text}</p>
                  <p className="text-xs text-muted-foreground">
                    <Clock className="mr-1 inline h-3 w-3" />
                    {event.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
