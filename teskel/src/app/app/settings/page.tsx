import Link from "next/link";
import { User, CreditCard, Key, Bot, Shield, ArrowRight } from "lucide-react";

const settingsItems = [
  { title: "Profile", desc: "Manage your name, avatar, and bio.", icon: User, href: "/app/settings/profile" },
  { title: "Billing", desc: "Manage subscription, payment methods, and invoices.", icon: CreditCard, href: "/app/settings/billing" },
  { title: "API Keys", desc: "Generate and manage API keys.", icon: Key, href: "#" },
  { title: "AI Providers", desc: "Configure AI provider keys and preferences.", icon: Bot, href: "#" },
  { title: "Security", desc: "Password, two-factor authentication, and sessions.", icon: Shield, href: "#" },
];

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Manage your account and preferences.
      </p>

      <div className="mt-8 space-y-3">
        {settingsItems.map((item) => (
          <Link key={item.title} href={item.href}>
            <div className="flex items-center justify-between rounded-xl border border-border bg-white p-5 transition-all hover:shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
