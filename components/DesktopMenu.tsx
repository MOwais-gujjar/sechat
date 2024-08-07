"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";


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
      <Tooltip>
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
            <TooltipTrigger asChild>
                {icons}
            </TooltipTrigger>
            <TooltipContent className=" bg-black opacity-70 text-light-1 ml-3 ">
              {label}
            </TooltipContent>
        </Link>
      </Tooltip>
    </>
  );
};

export default DesktopMenu;
