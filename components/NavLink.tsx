"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
  variant?: "desktop" | "mobile";
  onClick?: () => void;
};

export default function NavLink({
  href,
  label,
  variant = "desktop",
  onClick,
}: Props) {
  const pathname = usePathname();
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  if (variant === "mobile") {
    return (
      <Link
        href={href}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
        className={`block border-b border-[#1E2A3A]/5 py-3 text-base font-medium transition ${
          isActive
            ? "text-[#F97316]"
            : "text-[#1E2A3A] hover:text-[#F97316]"
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`relative text-sm font-medium transition ${
        isActive
          ? "text-[#F97316]"
          : "text-[#1E2A3A] hover:text-[#F97316]"
      }`}
    >
      {label}
      {isActive && (
        <span
          aria-hidden
          className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#F97316]"
        />
      )}
    </Link>
  );
}
