"use client";

import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AppTopbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-white px-6">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-1.5">
          <Search className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            Search or run command...
          </span>
          <kbd className="ml-4 rounded border border-border bg-white px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
            ⌘K
          </kbd>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Bell className="h-4 w-4 text-muted-foreground" />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-teskel-accent text-xs text-white">
            U
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
