import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  Camera,
  File,
  Image,
  Link,
  SmileIcon,
  Sticker,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import { Theme } from "emoji-picker-react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: "-80px",
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: "-125px",
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: "-170px",
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: "-215px",
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: "-260px",
    title: "Contact",
  },
];

const yToClassMap: any = {
  "-80px": "top-[-80px]",
  "-125px": "top-[-125px]",
  "-170px": "top-[-170px]",
  "-215px": "top-[-215px]",
  "-260px": "top-[-260px]",
};
const bgColorClasses: any = {
  "#4da5fe": "bg-blue-500",
  "#1b8cfe": "bg-cyan-500",
  "#0172e4": "bg-indigo-500",
  "#0159b2": "bg-purple-500",
  "#013f7f": "bg-gray-500",
};

const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);

const Footer = () => {
  const [openPicker, setOpenPicker] = useState(false);
  const [openLink, setOpenLink] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, how can I help you?", sender: "other" },
    { id: 2, text: "I have a question about the project.", sender: "me" },
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
    setOpenLink((li) => !li);
  };
  const HandleEmoji = () => {
    setOpenPicker((prev) => !prev);
  };
  return (
    <div className="flex items-center space-x-2 px-2 py-3 h-12 bg-gray-800">
      <div className=" relative left-0 flex items-center w-full ">
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="  mx-auto flex-grow border placeholder:text-light-2 border-gray-600 rounded-lg text-light-2 pl-10 bg-transparent outline-none"
        />
        <div
          className={cn(
            `z-10 fixed bottom-[46px]`,
            openPicker ? "inline" : "hidden"
          )}
        >
          <Picker
            width={300}
            height={300}
            theme={Theme.DARK}
            skinTonesDisabled
            searchDisabled
          />
        </div>

        <SmileIcon
          aria-hidden="true"
          className=" absolute left-3 top-5 transform -translate-y-1/2 text-[#709CE6] hover:text-gray-700 "
          size={20}
          onClick={HandleEmoji}
        />
        <div className={cn(" relative ", openLink ? "inline" : "hidden")}>
          {Actions.map((el) => (
            <TooltipProvider key={el.color}>
              <Tooltip>
                <TooltipTrigger
                  className={`absolute right-4 ${yToClassMap[el.y] || ""} ${
                    bgColorClasses[el.color] || ""
                  } p-2 rounded-full duration-300 cursor-pointer hover:bg-gray-400`}
                >
                  {el.icon}
                </TooltipTrigger>
                <TooltipContent className=" bg-gray-700 absolute left-7 top-3">
                  <p className=" text-[10px] font-normal text-gray-400">{el.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

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
