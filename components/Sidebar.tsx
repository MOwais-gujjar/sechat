"use client";
import React, { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import { MessageCircleMore, User, Users, Settings, Phone, LogOut } from "lucide-react";
import Switch from "./button/Switch";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { faker } from "@faker-js/faker";
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
      label: "People",
      href: "/people",
      icon: <User size={15} />,
    },
    {
      index: 2,
      label: "Calls",
      href: "/calls",
      icon: <Phone size={15} />,
    },
    {
      index: 3,
      label: "Groups",
      href: "/groupchat",
      icon: <Users size={15} />,
    },
  ];
  return SidebarList;
};

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Settings />,
  },
  {
    title: "Sign Out",
    icon: <LogOut />,
  },
];

const Sidebar = () => {
  const setting = "/setting";
  const pathname = usePathname();
  const isActive = pathname === setting;

  const root = List();
  return (
    <nav className=" sticky top-0 left-0 h-screen flex flex-col justify-between w-[100px] gap-y-2 bg-gray-900 px-2 p-2 mx-auto max-sm:hidden lg:w-[60px]">
      <h1 className=" pt-2 mx-auto font-extrabold text-xl text-white">CH</h1>
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
                { "bg-gray-600 text-light-1 rounded-md mx-auto": isActive }
              )}
            >
              <Settings size={15} />
            </Link>
          }
        </div>
      </div>
      <div className=" flex flex-col items-center text-white">
        {/* User Profile */}
        <img src={faker.image.avatar()} alt="login" className=" w-9 h-9 rounded-full object-cover" />
      </div>
    </nav>
  );
};

export default Sidebar;
