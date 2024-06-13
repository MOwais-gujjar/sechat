import React from "react";
import ChatElement from "./ChatElement";
import { ChatList } from "@/constant";

const ChatBox = () => {
  return (
    <div className=" flex flex-col gap-y-2 mx-2 my-2 overflow-y-scroll max-h-[430px]">
      <div className="flex flex-col gap-y-2 ">
        <h1 className=" text-[16px] font-semibold font-sans opacity-70">Pinned</h1>
        {ChatList.filter((ele) => ele.pinned).map((el) => (
          <div key={el.id} className=" flex flex-col gap-y-10 mx-2">
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
      <div className="flex flex-col gap-y-2">
        <h1 className=" text-[16px] font-semibold font-sans opacity-70">All Chats</h1>
        {ChatList.filter((ele) => !ele.pinned).map((el) => (
          <div key={el.id} className=" flex flex-col gap-y-10 mx-2">
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
    </div>
  );
};

export default ChatBox;
