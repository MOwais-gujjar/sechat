"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

import Chat from "../Chat/Chat";
import Chatheader from "../Chat/Chatheader";
import Message from "./Message";
import Footer from "./Footer";
import Contact from "../settings/contact";


const conversation = () => {
  const { sidebar } = useSelector((store: any) => store.app);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
  };
  console.log(selectedUser);
  return (
    <section className=" max-h-[100vh] w-full flex bg-gray-800 text-white">
      <div className=" h-full m-0 bg-gray-800">
        <Chat onUserClick={handleUserClick} />
      </div>
      <div
        className={cn(
          `bg-gray-900 mx-auto`,
          sidebar.open
            ? " max-w-full w-[calc(100%-540px)] 2xl:w-[calc(1536px-750px)] "
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
          <div className="flex items-center justify-center h-screen text-white">
            Select a user to start chatting
          </div>
        )}
      </div>
      {sidebar.open && <Contact />}
    </section>
  );
};

export default conversation;
