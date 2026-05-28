"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Layers,
  Store,
  Library,
  Palette,
  Users,
  Settings,
  Plus,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/app", icon: LayoutDashboard },
  { label: "Workspaces", href: "/app/workspaces", icon: Layers },
  { label: "Projects", href: "/app/projects", icon: FolderKanban },
  { label: "Marketplace", href: "/app/marketplace", icon: Store },
  { label: "Library", href: "/app/library", icon: Library },
  { label: "Creator", href: "/app/creator", icon: Palette },
  { label: "Team", href: "/app/team", icon: Users },
  { label: "Settings", href: "/app/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-56 shrink-0 border-r border-border bg-white md:block">
      <div className="flex h-16 items-center gap-2 border-b border-border px-4">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teskel-accent">
          <span className="text-xs font-bold text-white">T</span>
        </div>
        <span className="text-sm font-semibold tracking-tight text-foreground">
          Teskel
        </span>
      </div>

      <div className="p-3">
        <Link
          href="/app/projects"
          className="flex items-center gap-2 rounded-lg bg-teskel-accent px-3 py-2 text-sm font-medium text-white"
        >
          <Plus className="h-4 w-4" />
          New Project
        </Link>
      </div>

      <nav className="space-y-0.5 px-3">
        {navItems.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/app" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-teskel-accent-soft text-teskel-accent"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
