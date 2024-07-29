import React from "react";
import ChatElement from "./ChatElement";
import { ChatList } from "@/constant";

import { ScrollArea } from "@/components/ui/scroll-area"


const ChatBox = ({ onUserClick }: any) => {
  return (
    <ScrollArea className=" flex flex-col max-w-[280px] gap-y-3 mx-2 px-3 max-h-[450px]">
      <div className="flex flex-col space-y-2 ">
        <h1 className=" text-[14px] font-semibold font-sans opacity-80">Pinned</h1>
        {ChatList.filter((ele) => ele.pinned).map((el) => (
          <div key={el.id} className=" flex flex-col mr-2" onClick={onUserClick}>
            <ChatElement
              imgUrl={el.img}
              person={el.name}
              msg={el.msg}
              time={el.time}
              unread={el.unread}
              online={el.online}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-2 py-2">
        <h1 className=" text-[14px] font-semibold font-sans opacity-80">All Chats</h1>
        {ChatList.filter((ele) => !ele.pinned).map((el) => (
          <div key={el.id} className=" flex flex-col gap-y-10 mr-5" onClick={onUserClick}>
            <ChatElement
              imgUrl={el.img}
              person={el.name}
              msg={el.msg}
              time={el.time}
              unread={el.unread}
              online={el.online}
            />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ChatBox;
