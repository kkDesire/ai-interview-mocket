"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Header() {
  const path = usePathname();
  return (
    <div className="flex items-center justify-between p-4 bg-secondary shadow-sm">
      <Link href="/">
        <Image
          style={{ width: "160px", height: "auto" }}
          src="/logo.svg"
          width={0}
          height={0}
          alt="Logo"
          priority
        />
      </Link>
      <ul className="hidden md:flex gap-6">
        <li
          className={cn(
            "hover:text-primary hover:font-bold transition-all cursor-pointer",
            {
              "text-primary font-bold": path === "/dashboard",
            }
          )}
        >
          <Link href={"/dashboard"}>Dashboard</Link>
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
