import Chat from "@/components/Chat/Chat";
import Conversation from "@/components/conversation/conversation";
import React from "react";

const ChatPage = () => {
  return (
    <div className=" flex w-full h-full ">
      <Chat />
      <div className=" h-screen w-[calc(1320px-420px)]">
        <Conversation />
      </div>
    </div>
  );
};

export default ChatPage;
