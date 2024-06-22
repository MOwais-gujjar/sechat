"use client";
import React, { useState } from "react";
import Chat from "../Chat/Chat";
import Chatheader from "../Chat/Chatheader";
import Message from "./Message";
import Footer from "./Footer";

const conversation = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
  };
  console.log(selectedUser)
  return (
    <section className=" max-h-[100vh] w-full flex bg-gray-800 text-white">
      <div className=" h-full bg-gray-800">
        <Chat onUserClick={handleUserClick} />
      </div>
      <div className=" 2xl:w-[calc(1536px-387px)] w-[calc(1320px-387px)]  bg-gray-900">
        {selectedUser ? (
          <div className="">
            <header className=" w-full h-15 text-gray-400 bg-gray-800">
              <Chatheader
                user={selectedUser}
              />
            </header>
            {/* Message */}
            <div className="grow ">
              <Message />
            </div>
            <Footer />
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen text-white">
            Select a user to start chatting
          </div>
        )}
      </div>
    </section>
  );
};

export default conversation;
