import React, { useState } from "react";
import { Input } from "../ui/input";
import { Link, SmileIcon } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, how can I help you?", sender: "other" },
    { id: 2, text: "I have a question about the project.", sender: "me" },
    // { id: 3, text: "Hello, how can I help you?", sender: "other" },
    // { id: 4, text: "I have a question about the project.", sender: "me" },
    // { id: 5, text: "Hello, how can I help you?", sender: "other" },
    // { id: 6, text: "I have a question about the project.", sender: "me" }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const handleSendMessage = () => {
    // if (newMessage.trim()) {
    //   setMessages([
    //     ...messages,
    //     { id: messages.length + 1, text: newMessage, sender: "me" },
    //   ]);
    //   setNewMessage("");
    // }
    alert("Msg");
  };

  const HandleLink = () => {
    alert("Add Links");
  };
  const HandleEmoji = () => {
    alert("Show Emoji");
  };
  return (
      <div className="flex justify-center items-center space-x-2 px-2 ">
        <div className=" relative left-0 flex items-center w-full ">
          <Input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className=" placeholder:absolute placeholder:left-10 placeholder:right-10 mx-auto flex-grow border border-gray-600 rounded-lg text-dark-2 pl-10 bg-transparent outline-none"
          />
          <SmileIcon
            aria-hidden="true"
            className=" absolute left-3 top-5 transform -translate-y-1/2 text-[#709CE6] hover:text-gray-700 "
            size={20}
            onClick={HandleEmoji}
          />
          <Link
            aria-hidden="true"
            className=" absolute right-5 top-5 transform -translate-y-1/2 text-[#709CE6] hover:text-gray-700 "
            size={20}
            onClick={HandleLink}
          />
        </div>
        {/* Send Button */}
        <Button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded"
        >
          Send
        </Button>
      </div>
  );
};

export default Footer;
