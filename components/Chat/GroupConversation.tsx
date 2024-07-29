"use client";

import React, { useState } from "react";
import Chatheader from "./Chatheader";
import Message from "../conversation/Message";
import Footer from "../conversation/Footer";
import GroupChat from "./GroupChat";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import Contact from "../settings/contact";
import Image from "next/image";

const GroupConversation = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const { sidebar } = useSelector((store: any) => store.app);

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
  };
  return (
    <section className=" max-h-full w-full flex bg-gray-800 text-white">
      <div className=" h-full m-0 bg-gray-800">
        <GroupChat onUserClick={handleUserClick} />
      </div>
      <div
        className={cn(
          `bg-gray-900 mx-auto relative left-[130px]`,
          sidebar.open
            ? "   max-w-full w-[calc(100%-540px)] 2xl:w-[calc(1536px-750px)] "
            : " 2xl:w-[calc(1536px-387px)]  w-[calc(1320px-387px)]"
        )}
      >
        {selectedUser ? (
          <>
            <header
              className=" w-full h-15 text-gray-400 bg-gray-800"
              onClick={() => sidebar.open}
            >
              <Chatheader user={selectedUser} />
            </header>
            {/* Message */}
            <div className="grow ">
              <Message />
            </div>
            <Footer />
          </>
        ) : (
          <div className="flex flex-col items-center gap-y-3 justify-center h-screen text-white">
            <Image
              src={"/icons/gift.gif"}
              alt="Chat Gif"
              width={300}
              height={300}
            />
            Select a user to create group & start chatting
          </div>
        )}
      </div>
      {sidebar.open && <Contact />}
    </section>
  );
};

export default GroupConversation;
