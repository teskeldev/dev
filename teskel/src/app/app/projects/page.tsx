import Link from "next/link";
import { Plus, FolderKanban, GitFork, Clock, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  { id: "demo", name: "nextjs-saas", workspace: "Personal", status: "running", packages: 3, lastActive: "2 min ago", branch: "main" },
  { id: "2", name: "api-gateway", workspace: "Acme Inc", status: "paused", packages: 1, lastActive: "1 hour ago", branch: "develop" },
  { id: "3", name: "mobile-app", workspace: "Personal", status: "stopped", packages: 2, lastActive: "3 days ago", branch: "feature/auth" },
  { id: "4", name: "docs-site", workspace: "Acme Inc", status: "stopped", packages: 0, lastActive: "1 week ago", branch: "main" },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Projects</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            All your projects across workspaces.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 rounded-lg">
            <GitFork className="h-4 w-4" />
            Import
          </Button>
          <Button className="gap-2 rounded-lg">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {projects.map((project) => (
          <Link key={project.id} href={`/app/projects/${project.id}/workspace`}>
            <div className="flex items-center justify-between rounded-xl border border-border bg-white p-4 transition-all hover:shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                  <FolderKanban className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">
                      {project.name}
                    </span>
                    <Badge variant="secondary" className="text-[10px]">
                      {project.branch}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{project.workspace}</span>
                    <span className="flex items-center gap-1">
                      <Package className="h-3 w-3" />
                      {project.packages} packages
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
