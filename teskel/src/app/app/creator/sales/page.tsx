import { DollarSign, Clock } from "lucide-react";

const sales = [
  { package: "Next.js SaaS Pro Pack", buyer: "dev_user_1", price: 49, date: "2 hours ago" },
  { package: "Security Review Agent", buyer: "team_acme", price: 29, date: "5 hours ago" },
  { package: "Stripe Billing Integration", buyer: "indie_dev", price: 39, date: "1 day ago" },
  { package: "Next.js SaaS Pro Pack", buyer: "startup_io", price: 49, date: "2 days ago" },
  { package: "Security Review Agent", buyer: "dev_user_2", price: 29, date: "3 days ago" },
];

export default function SalesPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold text-foreground">Sales</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Track your package sales and revenue.
      </p>

      <div className="mt-8 space-y-3">
        {sales.map((sale, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border border-border bg-white p-4">
            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-teskel-green" />
              <div>
                <p className="text-sm font-medium text-foreground">{sale.package}</p>
                <p className="text-xs text-muted-foreground">Purchased by {sale.buyer}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-foreground">${sale.price}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" /> {sale.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
