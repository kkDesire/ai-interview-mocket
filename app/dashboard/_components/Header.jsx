"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
function Header() {
  const path = usePathname();
  return (
    <div className="flex items-center justify-between p-4 bg-secondary shadow-sm">
      <Image src="/logo.svg" width={160} height={100} alt="Logo" priority />
      <ul className="hidden md:flex gap-6">
        <li
          className={cn(
            "hover:text-primary hover:font-bold transition-all cursor-pointer",
            {
              "text-primary font-bold": path === "/dashboard",
            }
          )}
        >
          Dashboard
        </li>
        <li
          className={cn(
            "hover:text-primary hover:font-bold transition-all cursor-pointer",
            {
              "text-primary font-bold": path === "/questions",
            }
          )}
        >
          Questions
        </li>
        <li
          className={cn(
            "hover:text-primary hover:font-bold transition-all cursor-pointer",
            {
              "text-primary font-bold": path === "/upgrade",
            }
          )}
        >
          Upgrade
        </li>
        <li
          className={cn(
            "hover:text-primary hover:font-bold transition-all cursor-pointer",
            {
              "text-primary font-bold": path === "/how-it-work",
            }
          )}
        >
          How it work ?
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
