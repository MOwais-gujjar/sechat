"use client";

import { LogOutIcon, LucideMessageCircleMore, LucideMessageSquareMore, MessageCircle, Phone, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { FC, ReactNode, useMemo } from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn, isRouteActivePath } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Setting } from "./Setting";
import { SignOutButton } from "@clerk/nextjs";
import { Separator } from "./ui/separator";

type NavigationBarProps = {
  trigger: ReactNode;
};

export const NavigationBar: FC<NavigationBarProps> = ({ trigger }) => {
  const pathname = usePathname();

  const menuItems = useMemo(
    () => [
      { icon: LucideMessageCircleMore, label: "Chat", path: "/" },
      { icon: Phone, label: "Call", path: "/calls" },
    ],
    []
  );

  return (
    <>
      <div className="md:w-24 w-full md:h-screen h-20 bg-white dark:bg-slate-950 border-r md:border-r-gray-400 md:dark:border-r-gray-800 py-5 fixed z-10 flex md:flex-col items-center justify-between bottom-0 md:top-0 left-0">
        <div className="md:pt-10">
          <NavigationMenu orientation="vertical">
            <NavigationMenuList className="!w-svw md:!w-fit px-5 md:px-0 flex items-center justify-between md:flex-col md:space-y-7">
              {menuItems.map(({ icon: Icon, label, path }) => {
                const isActive = isRouteActivePath(pathname, path);
                return (
                  <Tooltip key={path}>
                    <TooltipTrigger>
                      <Link href={path}>
                        <NavigationMenuItem
                          className={cn("px-5 py-2 cursor-pointer rounded-lg", {
                            "dark:bg-gray-700 bg-gray-300": isActive,
                            "hover:dark:bg-gray-600 hover:bg-gray-200":
                              !isActive,
                          })}
                        >
                          <Icon
                            size={18}
                            fill={isActive ? "#000000" : "none"}
                          />
                        </NavigationMenuItem>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="bg-gray-500 dark:bg-gray-700 rounded-xl"
                    >
                      <p>{label}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
              <Separator className=" bg-gray-500" />
              <Tooltip>
                <div className="md:block hidden">
                  <Dialog>
                    <NavigationMenu orientation="vertical">
                      <DialogTrigger>
                        <TooltipTrigger asChild>
                          <div className=" hover:bg-gray-700 px-5 py-2 rounded-lg">
                            <Settings size={15} />
                          </div>
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
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="md:block hidden">
          <div className="hover:bg-gray-700 px-5 py-2 rounded-lg">
            <SignOutButton>
              <LogOutIcon size={18} />
            </SignOutButton>
          </div>
        </div>
      </div>
    </>
  );
};
