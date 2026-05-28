import Link from "next/link";
import {
  DollarSign,
  Download,
  Package,
  Star,
  ArrowRight,
  TrendingUp,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Total Revenue", value: "$2,847", icon: DollarSign, trend: "+12%" },
  { label: "Monthly Revenue", value: "$892", icon: TrendingUp, trend: "+8%" },
  { label: "Packages", value: "5", icon: Package, trend: "" },
  { label: "Total Installs", value: "3,421", icon: Download, trend: "+24%" },
  { label: "Avg Rating", value: "4.9", icon: Star, trend: "" },
  { label: "Pending Payout", value: "$456", icon: DollarSign, trend: "" },
];

const topPackages = [
  { name: "Next.js SaaS Pro Pack", installs: 1240, revenue: "$1,420" },
  { name: "Security Review Agent", installs: 780, revenue: "$892" },
  { name: "Stripe Billing Integration", installs: 510, revenue: "$535" },
];

export default function CreatorDashboardPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Creator Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Track your packages, revenue, and installs.
          </p>
        </div>
        <Link href="/app/creator/packages/new">
          <Button className="gap-2 rounded-lg">
            <Plus className="h-4 w-4" /> New Package
          </Button>
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-white p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <stat.icon className="h-4 w-4" />
                <span className="text-xs">{stat.label}</span>
              </div>
              {stat.trend && (
                <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-600">
                  {stat.trend}
                </span>
              )}
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">Top Packages</h2>
            <Link href="/app/creator/packages/new" className="flex items-center gap-1 text-xs text-teskel-accent hover:underline">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="mt-4 space-y-3">
            {topPackages.map((pkg) => (
              <div key={pkg.name} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{pkg.name}</p>
                  <p className="text-xs text-muted-foreground">{pkg.installs} installs</p>
                </div>
                <span className="text-sm font-semibold text-foreground">{pkg.revenue}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-white p-6">
          <h2 className="text-sm font-semibold text-foreground">Revenue Over Time</h2>
          <div className="mt-4 flex h-48 items-end justify-between gap-2">
            {[45, 62, 38, 71, 55, 89, 92, 78, 85, 95, 88, 110].map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-t bg-teskel-accent/80"
                  style={{ height: `${(h / 110) * 100}%` }}
                />
                <span className="text-[8px] text-muted-foreground">
                  {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
