"use client";
import { Link, Search, SmileIcon } from "lucide-react";
import React, { useState } from "react";
import { InputWithButton } from "../button/InputWithButton";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const ChatFooter = () => {
  const [message, setMessage] = useState("");
  const [emojiSelected, setEmojiSelected] = useState("");
const HandleLink = () => {
    alert("Add Links")
}
const HandleEmoji = () => {
    alert("Show Emoji");
}
  const handleSend = () => {
    console.log("Sending message:", message);
    console.log("Selected Emoji:", emojiSelected);
    // Implement your logic to send the message and clear the input
    setMessage("");
    setEmojiSelected("");
  };
  return (
    <div className="flex justify-center items-center space-x-2 mx-2">
      {/* Emoji Picker 
      <select
        value={emojiSelected}
        onChange={(e) => setEmojiSelected(e.target.value)}
        className="border border-gray-600 p-1 rounded-lg text-white bg-transparent"
      >
        <option value="">Select Emoji</option>
        {/* Add your emojis here 
        <option value="😀">Grinning Face</option>
        <option value="🙂">Beaming Face With Smiling Eyes</option>
        {/* More emojis...
      </select>
      */}
      {/* Input Field */}

      {/* <InputWithButton /> */}
      <div className=" relative left-0 flex items-center w-full ">
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
        onClick={handleSend}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded"
      >
        Send
      </Button>
    </div>
  );
};

export default ChatFooter;
