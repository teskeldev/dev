import Link from "next/link";
import {
  Plus,
  GitFork,
  Store,
  Package,
  Users,
  FolderKanban,
  Layers,
  Sparkles,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const quickActions = [
  { label: "New workspace", icon: Plus, href: "/app/workspaces" },
  { label: "Import repo", icon: GitFork, href: "/app/projects" },
  { label: "Browse marketplace", icon: Store, href: "/app/marketplace" },
  { label: "Create package", icon: Package, href: "/app/creator/packages/new" },
  { label: "Invite team", icon: Users, href: "/app/team/members" },
];

const recentProjects = [
  { name: "nextjs-saas", workspace: "Personal", status: "running", lastActive: "2 minutes ago" },
  { name: "api-gateway", workspace: "Acme Inc", status: "paused", lastActive: "1 hour ago" },
  { name: "mobile-app", workspace: "Personal", status: "stopped", lastActive: "3 days ago" },
];

const installedPackages = [
  { name: "Next.js SaaS Pro Pack", version: "1.0.0", updates: false },
  { name: "Stripe Billing Integration", version: "1.1.0", updates: true },
  { name: "Security Review Agent", version: "2.0.0", updates: false },
];

export default function AppDashboard() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Here&apos;s what&apos;s happening in your workspace.
        </p>
      </div>

      {/* Quick actions */}
      <div className="mb-8 flex flex-wrap gap-3">
        {quickActions.map((action) => (
          <Link key={action.label} href={action.href}>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-lg border-border bg-white"
            >
              <action.icon className="h-4 w-4" />
              {action.label}
            </Button>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent projects */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-border bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">
                Recent Projects
              </h2>
              <Link
                href="/app/projects"
                className="flex items-center gap-1 text-xs text-teskel-accent hover:underline"
              >
                View all <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="mt-4 space-y-2">
              {recentProjects.map((project) => (
                <Link
                  key={project.name}
                  href="/app/projects/demo/workspace"
                  className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-3">
                    <FolderKanban className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {project.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {project.workspace}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${
                        project.status === "running"
                          ? "bg-green-50 text-green-600"
                          : project.status === "paused"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          project.status === "running"
                            ? "bg-green-500"
                            : project.status === "paused"
                            ? "bg-amber-500"
                            : "bg-gray-400"
                        }`}
                      />
                      {project.status}
                    </div>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {project.lastActive}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent workspaces */}
          <div className="mt-6 rounded-2xl border border-border bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">
                Workspaces
              </h2>
              <Link
                href="/app/workspaces"
                className="flex items-center gap-1 text-xs text-teskel-accent hover:underline"
              >
                View all <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { name: "Personal", projects: 3, members: 1 },
                { name: "Acme Inc", projects: 7, members: 5 },
              ].map((ws) => (
                <div
                  key={ws.name}
                  className="rounded-lg border border-border p-4"
                >
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-teskel-accent" />
                    <span className="text-sm font-medium text-foreground">
                      {ws.name}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{ws.projects} projects</span>
                    <span>{ws.members} members</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Installed packages */}
          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="text-sm font-semibold text-foreground">
              Installed Packages
            </h2>
            <div className="mt-4 space-y-2">
              {installedPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="flex items-center justify-between rounded-lg border border-border p-3"
                >
                  <div className="flex items-center gap-2">
                    <Package className="h-3.5 w-3.5 text-muted-foreground" />
                    <div>
                      <p className="text-xs font-medium text-foreground">
                        {pkg.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        v{pkg.version}
                      </p>
                    </div>
                  </div>
                  {pkg.updates && (
                    <span className="rounded-full bg-teskel-amber/10 px-2 py-0.5 text-[10px] font-medium text-teskel-amber">
                      Update
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* AI activity */}
          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="text-sm font-semibold text-foreground">
              AI Activity
            </h2>
            <div className="mt-4 space-y-3">
              {[
                "Generated runbook for deployment",
                "Reviewed pull request #42",
                "Explained terminal error",
              ].map((activity) => (
                <div
                  key={activity}
                  className="flex items-start gap-2"
                >
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teskel-accent" />
                  <p className="text-xs text-muted-foreground">{activity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended */}
          <div className="rounded-2xl border border-border bg-white p-6">
            <h2 className="text-sm font-semibold text-foreground">
              Recommended
            </h2>
            <div className="mt-4 space-y-2">
              {["Playwright E2E Testing", "SaaS Dashboard UI Kit"].map((pkg) => (
                <div
                  key={pkg}
                  className="flex items-center justify-between rounded-lg bg-muted/50 p-3"
                >
                  <span className="text-xs font-medium text-foreground">
                    {pkg}
                  </span>
                  <Button variant="ghost" size="sm" className="h-6 text-xs">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
