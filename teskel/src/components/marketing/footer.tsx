import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Workspace", href: "/workspace" },
      { label: "Marketplace", href: "/marketplace" },
      { label: "Packages", href: "/marketplace" },
      { label: "AI Agents", href: "/ai" },
      { label: "Teams", href: "/teams" },
    ],
  },
  {
    title: "Marketplace",
    links: [
      { label: "Browse packages", href: "/marketplace" },
      { label: "Skill packs", href: "/marketplace" },
      { label: "Agent packs", href: "/marketplace" },
      { label: "Templates", href: "/marketplace" },
      { label: "UI kits", href: "/marketplace" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Creators", href: "/creators" },
      { label: "Pricing", href: "/pricing" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Changelog", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "API", href: "/docs" },
      { label: "CLI", href: "/docs" },
      { label: "Security", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "Marketplace Policy", href: "#" },
      { label: "DPA", href: "#" },
    ],
  },
];

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teskel-accent">
              <span className="text-xs font-bold text-white">T</span>
            </div>
            <span className="text-sm font-semibold text-foreground">
              Teskel
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Teskel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
