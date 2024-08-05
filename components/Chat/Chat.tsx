"use client";

import { MessageSquareDiff } from "lucide-react";
import React, { useState } from "react";
import SearchBar from "../button/SearchBar";
import ChatBox from "./ChatBox";
import { faker } from "@faker-js/faker";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import CreateChat from "../main/createChat";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";


const Chat = ({ onUserClick }: any) => {
  const [openDialog, setOpenDialog] = useState(false);

const {user} = useUser();

const users = useQuery(api.status.get, {
  clerkId: user?.id as string
});

  const CloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      {openDialog && (
        <CreateChat
          open={openDialog}
          handleClose={() => setOpenDialog(false)}
        />
      )}
      <section className=" relative bottom-0 w-[280px] h-full min-h-full bg-dark-1/70 rounded-s-md mx-auto text-light-1">
        <div className=" flex justify-between items-center mx-5 py-2 text-light-2">
          {/* User Profile */}
          <div className=" flex items-center gap-x-2">
            <div className=" w-9 h-9 object-cover rounded-full mt-2">
              <SignInButton>
                <UserButton />
              </SignInButton>
            </div>

            <div className=" mx-auto my-auto gap-2">
              <h1 className="text-sm font-medium text-light-2 self-start">
                {users?.username}
              </h1>
              <p className=" text-[10px] text-light-1/60 font-normal ml-1 self-start">
                {users?.status}
              </p>
            </div>
          </div>
          <MessageSquareDiff size={20} className=" mt-2 text-light-1 cursor-pointer" onClick={() => setOpenDialog(true)} />
        </div>
        {/* Search bar */}
        <div className=" flex flex-col item-center justify-center mx-4 py-2 ">
          <SearchBar />
        </div>
        {/* Message Box */}
        <div className="w-[290px]">
        <ChatBox onUserClick={onUserClick}  />
        </div>
      </section>
    </>
  );
};

export default Chat;
