"use client";
import { Ellipsis, MessageSquareDiff } from "lucide-react";
import React, { useState } from "react";
import SearchBar from "../button/SearchBar";
import ChatBox from "./ChatBox";
import { faker } from "@faker-js/faker";
import { SignInButton, UserButton } from "@clerk/nextjs";
import CreateChat from "../main/createChat";
import { api } from "@/convex/_generated/api";
import { useQuery } from 'convex/react'
const Chat = ({ onUserClick }: any) => {
  const [openDialog, setOpenDialog] = useState(false);

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
            <div className=" w-9 h-9 object-cover rounded-full">
              <SignInButton>
                <UserButton />
              </SignInButton>
            </div>

            <div className=" flex flex-col items-center">
              <h1 className="text-sm font-medium text-light-2 self-start">
                Name
              </h1>
              <p className=" text-[10px] text-light-1/60 font-normal ml-1 self-start">
                {faker.person.jobTitle()}
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
