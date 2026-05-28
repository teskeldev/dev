import Link from "next/link";
import { ArrowLeft, Plus, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const members = [
  { name: "Jane Smith", email: "jane@acme.com", role: "Owner", joined: "Jan 2024" },
  { name: "Alex Rivera", email: "alex@acme.com", role: "Admin", joined: "Feb 2024" },
  { name: "Marcus Lee", email: "marcus@acme.com", role: "Developer", joined: "Mar 2024" },
  { name: "Emma Wilson", email: "emma@acme.com", role: "Developer", joined: "Apr 2024" },
  { name: "Nina Patel", email: "nina@acme.com", role: "Viewer", joined: "May 2024" },
];

export default function TeamMembersPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <Link href="/app/team" className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Team Members</h1>
          <p className="mt-1 text-sm text-muted-foreground">{members.length} members</p>
        </div>
        <Button className="gap-2 rounded-lg">
          <Plus className="h-4 w-4" /> Invite
        </Button>
      </div>

      <div className="mt-8 space-y-2">
        {members.map((member) => (
          <div key={member.email} className="flex items-center justify-between rounded-xl border border-border bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teskel-accent-soft text-sm font-semibold text-teskel-accent">
                {member.name[0]}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-xs">{member.role}</Badge>
              <span className="text-xs text-muted-foreground">Joined {member.joined}</span>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
