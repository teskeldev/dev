import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfileSettingsPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <Link href="/app/settings" className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Settings
      </Link>

      <h1 className="text-2xl font-bold text-foreground">Profile</h1>
      <p className="mt-1 text-sm text-muted-foreground">Manage your profile information.</p>

      <div className="mt-8 rounded-xl border border-border bg-white p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teskel-accent text-xl font-bold text-white">
            U
          </div>
          <Button variant="outline" size="sm">Change avatar</Button>
        </div>
        <form className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Display name</label>
            <input defaultValue="User" className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-teskel-accent" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input defaultValue="user@example.com" className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-teskel-accent" />
          </div>
          <div>
            <label className="text-sm font-medium">Bio</label>
            <textarea rows={3} placeholder="Tell us about yourself..." className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-teskel-accent" />
          </div>
          <Button>Save changes</Button>
        </form>
      </div>
    </div>
  );
}
