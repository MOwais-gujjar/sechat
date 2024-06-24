import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CallList, Message_options } from "@/constant";
import { cn } from "@/lib/utils";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className=" cursor-pointer">
        <EllipsisVertical size={17} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" relative left-[70px] top-3 w-40 ">
        <DropdownMenuGroup>
          {Message_options.map((el) => (
            <DropdownMenuItem className=" text-xs">{el.title}</DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
