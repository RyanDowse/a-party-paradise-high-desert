"use client";

import { useState } from "react";
import NavLink from "./NavLink";

type Item = { label: string; href: string };

export default function MobileNav({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#1E2A3A] transition hover:bg-[#1E2A3A]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-t border-[#1E2A3A]/10 bg-[#FAFAF8] shadow-lg"
        >
          <nav aria-label="Mobile primary" className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            <ul>
              {items.map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    label={item.label}
                    variant="mobile"
                    onClick={() => setOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
