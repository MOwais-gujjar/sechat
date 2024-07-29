"use client";

import { useState } from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { MessageSquareDiff, Scaling } from "lucide-react";

import { ChatList } from "@/constant";
import SearchBar from "../button/SearchBar";
import GroupChatElement from "./GroupChatElement";
import CreateGroup from "@/components/main/CreateGroup";

<<<<<<< HEAD
const GroupChat = ({ onUserClick }: any) => {
=======
const GroupChat = ({onUserClick}: any) => {
>>>>>>> 64128c0cc990f297636df45721804704d4b9dadc
  const [openDialog, setOpenDialog] = useState(false);

  const CloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      {openDialog && (
        <CreateGroup
          open={openDialog}
          handleClose={() => setOpenDialog(false)}
        />
      )}
      <div className=" fixed top-0 w-72 h-full bg-dark-1/70 flex flex-col items-center border-r border-gray-700">
        <div className=" flex  items-center gap-x-36 py-2">
          <h1 className=" text-base font-medium">Group</h1>
          <div
            className=" text-[10px] font-light cursor-pointer"
            onClick={() => setOpenDialog(true)}
          >
            <MessageSquareDiff size={20} className=" text-light-1" />
          </div>
        </div>
        <div className=" py-2">
          <SearchBar />
        </div>
        <Separator className="w-full rounded-md bg-gray-500" />
<<<<<<< HEAD
        <div className=" flex flex-col mx-2 py-3">
          <h1 className=" text-sm font-medium"> All Groups </h1>
          <ScrollArea className=" max-h-[460px]">
            <div className=" felx flex-col gap-y-4 my-2 items-start ">
              {ChatList.filter((ele) => !ele.pinned).map((el) => (
                <div
                  key={el.id}
                  className=" flex flex-col gap-y-10 mx-5 my-2"
                  onClick={onUserClick}
                >
                  <GroupChatElement
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
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </div>
=======
        <ScrollArea>
          {/* Pinned groups */}
          <div className=" felx flex-col gap-y-4 my-2 items-start ">
            <h1 className=" text-sm font-medium mx-3"> Pinned Group </h1>
            {ChatList.filter((ele) => ele.pinned).map((el) => (
              <div key={el.id} className=" flex flex-col gap-y-10 mx-5 my-2" onClick={onUserClick}>
                <GroupChatElement
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
          {/* UnPinned Groups */}
          <div className=" felx flex-col gap-y-4 my-2 items-start ">
            <h1 className=" text-sm font-medium mx-3"> All Groups </h1>
            {ChatList.filter((ele) => !ele.pinned).map((el) => (
              <div key={el.id} className=" flex flex-col gap-y-10 mx-5 my-2" onClick={onUserClick}>
                <GroupChatElement
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
          <ScrollBar orientation="vertical" />
        </ScrollArea>
>>>>>>> 64128c0cc990f297636df45721804704d4b9dadc
      </div>
    </>
  );
};

export default GroupChat;
