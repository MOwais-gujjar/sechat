"use client";
import { Ellipsis } from "lucide-react";
import React, { useState } from "react";
import SearchBar from "../button/SearchBar";
import ChatBox from "./ChatBox";
import { faker } from "@faker-js/faker";
import { SignInButton, UserButton } from "@clerk/nextjs";
import CreateChat from "../main/createChat";

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
            <div className=" w-9 h-9 object-cover border border-light-1 p-1 rounded-full">
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
          <Ellipsis size={15} className=" mt-2 text-icon-1" />
        </div>
        <div className=" flex justify-between item-center px-5 pt-4 py-2">
          <h1 className=" text-base font-medium text-light-1/60">Message</h1>
          <div className=" cursor-pointer" onClick={() => setOpenDialog(true)}>
            <Ellipsis size={15} className=" mt-2 text-icon-1" />
          </div>
        </div>
        {/* Search bar */}
        <div className=" flex flex-col item-center justify-center mx-4 py-2 ">
          <SearchBar />
        </div>
        {/* Message Box */}
        <ChatBox onUserClick={onUserClick} />
      </section>
    </>
  );
};

export default Chat;
