import Link from "next/link";
import { Users, Layers, Package, FileSearch, Shield, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamStats = [
  { label: "Members", value: "5", icon: Users },
  { label: "Workspaces", value: "3", icon: Layers },
  { label: "Private Packages", value: "8", icon: Package },
  { label: "Audit Events", value: "142", icon: FileSearch },
];

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Acme Inc</h1>
          <p className="mt-1 text-sm text-muted-foreground">Team workspace</p>
        </div>
        <Link href="/app/team/members">
          <Button className="gap-2 rounded-lg">
            <Plus className="h-4 w-4" /> Invite Member
          </Button>
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teamStats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-white p-5">
            <div className="flex items-center gap-2 text-muted-foreground">
              <stat.icon className="h-4 w-4" />
              <span className="text-xs">{stat.label}</span>
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">Team Members</h2>
            <Link href="/app/team/members" className="flex items-center gap-1 text-xs text-teskel-accent hover:underline">
              Manage <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="mt-4 space-y-2">
            {[
              { name: "Jane Smith", role: "Owner", email: "jane@acme.com" },
              { name: "Alex Rivera", role: "Admin", email: "alex@acme.com" },
              { name: "Marcus Lee", role: "Developer", email: "marcus@acme.com" },
            ].map((member) => (
              <div key={member.email} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teskel-accent-soft text-xs font-semibold text-teskel-accent">
                    {member.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.email}</p>
                  </div>
                </div>
                <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{member.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-white p-6">
          <h2 className="text-sm font-semibold text-foreground">Recent Audit Log</h2>
          <div className="mt-4 space-y-3">
            {[
              "jane@acme.com installed security-agent",
              "alex@acme.com published internal-runbook v1.0",
              "marcus@acme.com created workspace dev-env",
              "jane@acme.com updated team settings",
            ].map((event) => (
              <div key={event} className="flex items-start gap-2">
                <Shield className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
