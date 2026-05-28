import Link from "next/link";
import { Plus, Layers, Users, FolderKanban, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const workspaces = [
  { id: "1", name: "Personal", projects: 3, members: 1, lastActive: "2 min ago" },
  { id: "2", name: "Acme Inc", projects: 7, members: 5, lastActive: "1 hour ago" },
  { id: "3", name: "Side Projects", projects: 2, members: 1, lastActive: "3 days ago" },
];

export default function WorkspacesPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Workspaces</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your personal and team workspaces.
          </p>
        </div>
        <Button className="gap-2 rounded-lg">
          <Plus className="h-4 w-4" />
          New Workspace
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {workspaces.map((ws) => (
          <div
            key={ws.id}
            className="rounded-2xl border border-border bg-white p-6 transition-all hover:shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teskel-accent-soft">
                <Layers className="h-5 w-5 text-teskel-accent" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {ws.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <FolderKanban className="h-3 w-3" />
                    {ws.projects} projects
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {ws.members} members
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {ws.lastActive}
              </span>
              <Link href="/app/projects">
                <Button variant="ghost" size="sm" className="text-xs">
                  Open
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
