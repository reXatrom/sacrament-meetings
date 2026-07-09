// 8. Client-side navigation links component.
// It highlights the active route so the user can clearly see which section they are in.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "Meetings" },
  { href: "/meetings/current", label: "Current" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="flex flex-wrap gap-2">
      {links.map((link) => {
        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              isActive ? "bg-emerald-600 text-white" : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
