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
        py-3
        text-center
        text-sm 
        leading-2 
        text-white
        rounded-md
        hover:bg-dark-3
        hover:text-light-1
`,
          { "bg-dark-1 text-icon-2 rounded-md py-3 px-3": isActive }
        )}
      >
        <div className=" shrink-0 w-4 h-4 px-auto py-auto text-icon-2">{icons}</div>
        <span className=" sr-only"> {label} </span>
      </Link>
    </>
  );
};

export default DesktopMenu;
