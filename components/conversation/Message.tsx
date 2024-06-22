import { ScrollArea } from "../ui/scroll-area";
import React, { useState } from "react";
import { Chat_History } from "@/constant";
import { DocType, LinkType, MediaType, MsgType, ReplyType, Timeline } from "./MsgType";

const Message = ({ user }: any) => {
  return (
    <ScrollArea className=" w-full max-w-full snap-always h-[495px]">
      <div className="flex flex-col px-3 py-1  ">
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              //Timeline
              return <Timeline el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  // img message
                  return <MediaType el={el} />
                case "doc":
                  // doc message
                  return <DocType el={el} />
                case "link":
                  // link message
                  return <LinkType el={el} />
                case "reply":
                  // reply message
                  return <ReplyType el={el} />
                default:
                  // text message
                  return <MsgType el={el} />;
              }
              break;

            default:
              <></>;
              break;
          }
        })}
      </div>
    </ScrollArea>
  );
};

export default Message;
