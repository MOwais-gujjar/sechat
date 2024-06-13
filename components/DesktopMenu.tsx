"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface DesktopMenuProps {
  label: string;
  href: string;
  icons: any;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ label, href, icons }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  return (
    <>
      <Link
        href={href}
        className={cn(
          `
        group 
        flex
        flex-col
        justify-center
        mx-auto
        px-3
        py-2
        text-center
        text-sm 
        leading-2 
        text-dark-2
        hover:text-sky-1
`,
          { "bg-blue-1 text-light-2 rounded-md py-3 px-3": isActive }
        )}
      >
        <div className=" shrink-0 w-4 h-4 px-auto py-auto">{icons}</div>
        <span className=" sr-only"> {label} </span>
      </Link>
    </>
  );
};

export default DesktopMenu;
