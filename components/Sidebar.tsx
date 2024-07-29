"use client";
import DesktopMenu from "./DesktopMenu";
import { MessageCircleMore, Users, Settings, Phone, LogOutIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SignOutButton, SignedOut } from "@clerk/nextjs";
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
    {
      index: 2,
      label: "Groups",
      href: "/groupchat",
      icon: <Users size={15} />,
    },
  ];
  return SidebarList;
};

const Sidebar = () => {
  const setting = "/setting";
  const pathname = usePathname();
  const isActive = pathname === setting;

  const root = List();
  return (
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
          {
            <Link
              href={setting}
              className={cn(
                `
              px-3
              py-2
              cursor-pointer
             text-light-1
             hover:text-sky-1
        `,
                { "bg-dark-1 hover:bg-dark-3 text-light-1 rounded-md mx-auto": isActive }
              )}
            >
              <Settings size={15} />
            </Link>
          }
        </div>
      </div>
      <div className=" mx-auto">
      <SignOutButton>
        <LogOutIcon size={18}/>
      </SignOutButton>
      </div>
    </nav>
  );
};

export default Sidebar;
