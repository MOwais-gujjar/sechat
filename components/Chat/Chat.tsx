import { CircleDashed } from "lucide-react";
import React from "react";
import SearchBar from "../button/SearchBar";
import Archive from "@/components/button/Archive";
import Image from "next/image";
import ChatElement from "./ChatElement";

import ChatBox from "./ChatBox";

const Chat = ({ onUserClick }: any) => {
  return (
    <section className=" relative bottom-0 w-72 h-full min-h-full bg-gray-800 rounded-s-md mx-auto text-light-2">
      <div className=" flex justify-between item-center px-5 pt-4">
        <h1 className=" text-xl font-bold  text-center">Chats</h1>
        <CircleDashed size={18} className=" mt-2" />
      </div>
      {/* Search bar */}
      <div className=" flex flex-col item-center justify-center mx-4 py-2 ">
        <SearchBar />
        {/* Archive Button */}
        <div className="flex items-center gap-x-1 mx-4 w-full text-white cursor-pointer ">
          <Image
            src={"/icons/ArchiveBox.svg"}
            alt="Archive Box"
            width={20}
            height={20}
          />
          <Archive />
        </div>
        <div className=" w-64 h-[1px] rounded-md bg-gray-600/60" />
      </div>
      {/* Message Box */}
      <ChatBox onUserClick={onUserClick} />
    </section>
  );
};

export default Chat;
