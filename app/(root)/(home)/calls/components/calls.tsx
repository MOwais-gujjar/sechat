"use client";
import { ChatList } from "@/constant";
import React, { useState } from "react";
import CallsList from "./callsList";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";
import CallsDetail from "./callsDetail";

const Calls = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
  };
  return (
    <section className=" max-h-full flex text-white">
      <div className="">
        <CallsList onUserClick={handleUserClick} />
      </div>
      <div
        className={cn(
          " relative left-72 max-w-full w-[calc(100%-288px)] 2xl:w-[calc(1536px-288px)]"
        )}
      >
        {selectedUser ? (
          <CallsDetail />
        ) : (
          <div className="flex flex-col gap-y-3 items-center justify-center h-screen text-white">
            <Image
              src={"/icons/gift.gif"}
              alt="Chat Gif"
              width={300}
              height={300}
            />
            <p className=""> Select a user to start chatting</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Calls;
