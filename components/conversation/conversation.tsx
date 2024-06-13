import React from "react";
import Chatheader from "../Chat/Chatheader";
import ChatFooter from "../Chat/ChatFooter";
import Message from "./Message";

const conversation = () => {
  return (
    <section className=" h-full max-h-[100vh] flex flex-col">
      {/* Header */}
      <header className=" h-20 w-full bg-[#F8FAFF] shadow-inner text-dark-2 p-4">
         <Chatheader  />
         </header>
      {/* Message */}
      <div className="flex flex-grow w-full "> 
        <Message />
      </div>
      {/* Footer */}
      <footer className=" w-full p-2 shadow-inner"> 
        <ChatFooter />
      </footer>
    </section>
  );
};

export default conversation;
