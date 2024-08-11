"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";

import {
  MessageCircleMore,
  Users,
  Settings,
  Phone,
  LogOutIcon,
} from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import DesktopMenu from "./DesktopMenu";
import { Setting } from "./settings/Setting";
const List = () => {
  const SidebarList = [
    {
      index: 0,
      label: "Chat",
      href: "/",
      icon: <MessageCircleMore size={15} />,
    },
    {
      index: 1,
      label: "Calls",
      href: "/calls",
      icon: <Phone size={15} />,
    },
  ];
  return SidebarList;
};

const Sidebar = () => {
  const root = List();
  return (
    <>
      <nav className=" sticky top-0 left-0 flex flex-col justify-between w-[100px] gap-y-2 bg-dark-2 px-2 p-2 mx-auto max-sm:hidden md:w-[60px]">
        <h1 className=" pt-2 mx-auto font-extrabold text-xl text-icon-2">CH</h1>
        <div className=" absolute top-14 h-fit flex flex-col items-center">
          {root.map((route) => (
            <div className=" py-3" key={route.index}>
              <DesktopMenu
                key={route.index}
                href={route.href}
                label={route.label}
                icons={route.icon}
              />
            </div>
          ))}
          <div className="  flex flex-col items-center gap-y-4 py-3">
            <div className=" w-10 h-1 rounded-md bg-dark-1 " />

            <Tooltip>
              <div className="md:block hidden">
                <Dialog>
                  <NavigationMenu orientation="vertical">
                    <DialogTrigger>
                      <TooltipTrigger asChild>
                        <Settings size={15} />
                      </TooltipTrigger>{" "}
                      <TooltipContent className=" bg-black opacity-70 text-light-1 ml-3 ">
                        setting
                      </TooltipContent>
                    </DialogTrigger>
                    <DialogContent>
                      <Setting />
                    </DialogContent>
                  </NavigationMenu>
                </Dialog>
              </div>
            </Tooltip>
          </div>
        </div>
        <div className=" mx-auto cursor-pointer">
          <Tooltip>
            <TooltipTrigger asChild>
              <SignOutButton>
                <LogOutIcon size={18} />
              </SignOutButton>
            </TooltipTrigger>
            <TooltipContent className=" bg-black opacity-70 text-light-1 ml-3 ">
              logout
            </TooltipContent>
          </Tooltip>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
