import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div>
      <Link
        href="/login"
        className="mb-6 inline-flex items-center gap-1 text-sm text-[#71717A] hover:text-[#09090B]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to login
      </Link>

      <h1 className="text-2xl font-bold tracking-tight">Reset your password</h1>
      <p className="mt-2 text-sm text-[#71717A]">
        Enter your email and we&apos;ll send you a reset link.
      </p>

      <form className="mt-8 space-y-4">
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-1 w-full rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#5B5BD6] focus:ring-1 focus:ring-[#5B5BD6]"
          />
        </div>
        <Button className="w-full rounded-lg">Send reset link</Button>
      </form>
    </div>
  );
}
