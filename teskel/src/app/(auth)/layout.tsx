import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-sm">
          <Link href="/" className="mb-8 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5B5BD6]">
              <span className="text-sm font-bold text-white">T</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Teskel</span>
          </Link>
          {children}
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:bg-[#F7F7F8]">
        <div className="max-w-md px-8">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">All-in-one workspace</h3>
            <p className="mt-2 text-sm text-[#71717A]">
              Terminal, editor, preview, AI, packages, and marketplace — all in
              your browser.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["Terminal", "Editor", "Preview", "AI", "Packages", "Teams"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-[#F3F4F6] p-2 text-center text-xs font-medium text-[#52525B]"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
