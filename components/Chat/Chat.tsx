import { CircleDashed } from "lucide-react";
import React from "react";
import SearchBar from "../button/SearchBar";
import Archive from '@/components/button/Archive'
import Image from "next/image";
import ChatBox from "./ChatBox";

const Chat = () => {
  return (
    <section className=" relative bottom-0 w-80 bg-[#F8FAFF] shadow-slate-400">
      {/* Chats */}
      <div className=" flex justify-between item-center px-5 py-2 pt-3">
        <h1 className=" text-xl font-bold text-dark-2 text-center">Chats</h1>
        <CircleDashed size={18} className=" mt-2" />
      </div>
      {/* Search bar */}
      <div className=" flex flex-col item-center justify-center mx-4 space-y-2 ">
        <SearchBar />
        {/* Archive Button */}
        <div className="flex items-center gap-x-1 mx-4 w-full ">
          <Image src={'/icons/ArchiveBox.svg'} alt="Archive Box" width={20} height={20}/>
          <Archive />
        </div>
        <div className=" w-72 h-[1px] rounded-md bg-dark-1/60 text-center" />
      </div>  
        {/* Message Box */}
        <ChatBox />
    </section>
  );
};

export default Chat;
