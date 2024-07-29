"use client";

import React, { useState } from "react";
import { Plus, Scaling } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CallList } from "@/constant";
import SearchBar from "@/components/button/SearchBar";
import CallElement from "./CallElement";
import CreateCalls from "@/components/main/createCalls";

interface CallsListProps {
  onUserClick: any
}
const CallsList: React.FC<CallsListProps> = ( { onUserClick }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const CloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      {openDialog && (
        <CreateCalls
          open={openDialog}
          handleClose={() => setOpenDialog(false)}
        />
      )}
      <div className=" fixed top-0 w-72 left-15 h-full bg-dark-1/70 flex flex-col items-center border-r border-gray-700">
      <h1 className=" text-lg font-medium self-start mx-2 my-2">Calls Log</h1>
        <div className=" py-2 mx-1">
          <SearchBar />
        </div>
        <div className=" flex items-center justify-between py-4 mx-2 gap-x-20">
        <h1 className=" text-xs font-normal">Start Conversation</h1>
          <div
            className=" text-[10px] font-light bg-gray-500 text-light-1 rounded-full p-1 "
            onClick={() => setOpenDialog(true)}
          >
            <Plus size={15} />
          </div>
        </div>
        <Separator className="w-full rounded-md bg-gray-500" />
        <ScrollArea>
          {/* Pinned groups */}
          <div className=" felx flex-col gap-y-4 my-2 items-start ">
            <h1 className=" text-sm font-medium mx-3">Call history</h1>
            {CallList.map((el) => (
              <div key={el.id} className=" flex flex-col gap-y-10 mx-5 my-2" onClick={onUserClick}>
                <CallElement
                  id={el.id}
                  imgUrl={el.img}
                  name={el.name}
                  incoming={el.incoming}
                  online={el.online}
                  missed={el.missed}
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </>
  );
};

export default CallsList;
