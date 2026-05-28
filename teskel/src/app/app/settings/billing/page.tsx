import Link from "next/link";
import { ArrowLeft, Check, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BillingSettingsPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <Link href="/app/settings" className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Settings
      </Link>

      <h1 className="text-2xl font-bold text-foreground">Billing</h1>
      <p className="mt-1 text-sm text-muted-foreground">Manage your subscription and payment.</p>

      <div className="mt-8 rounded-xl border border-teskel-accent bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-foreground">Pro Plan</h2>
              <Badge className="bg-teskel-accent text-white">Current</Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">$19/month · Renews Dec 1, 2024</p>
          </div>
          <Button variant="outline" size="sm">Manage</Button>
        </div>
        <ul className="mt-4 space-y-2">
          {["Unlimited workspaces", "Unlimited AI messages", "All packages", "Snapshots & restore"].map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-teskel-accent" /> {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-white p-6">
        <h2 className="text-sm font-semibold text-foreground">Payment Method</h2>
        <div className="mt-4 flex items-center justify-between rounded-lg border border-border p-4">
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-foreground">•••• 4242</p>
              <p className="text-xs text-muted-foreground">Expires 12/2025</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-xs">Update</Button>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-white p-6">
        <h2 className="text-sm font-semibold text-foreground">Invoices</h2>
        <div className="mt-4 space-y-2">
          {[
            { date: "Nov 1, 2024", amount: "$19.00", status: "Paid" },
            { date: "Oct 1, 2024", amount: "$19.00", status: "Paid" },
            { date: "Sep 1, 2024", amount: "$19.00", status: "Paid" },
          ].map((inv) => (
            <div key={inv.date} className="flex items-center justify-between rounded-lg border border-border p-3">
              <div className="flex items-center gap-4">
                <span className="text-sm text-foreground">{inv.date}</span>
                <span className="text-sm text-muted-foreground">{inv.amount}</span>
              </div>
              <Badge variant="secondary" className="text-xs">{inv.status}</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
