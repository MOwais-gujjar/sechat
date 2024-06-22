import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { Download, EllipsisVertical, MedalIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ReplyType = ({ el }: any) => {
  return (
    <div
      className={cn(
        `flex flex-col items-center content-center justify-start gap-y-2`,
        el.incoming ? " self-end " : " self-start "
      )}
    ></div>
  );
};

const DocType = ({ el }: any) => {
  return (
    <div
      className={cn(
        `flex items-center content-center w-44 gap-x-2 rounded-lg border border-gray-400 p-3`,
        el.incoming ? " self-end " : " self-start "
      )}
    >
      <MedalIcon size={20} className=" text-white mx-auto" />
      <h1 className=" text-white font-medium text-sm mx-auto">Abstract.PNG</h1>
      <Download size={15} className=" text-white font-normal mx-auto" />
    </div>
  );
};

const LinkType = ({ el }: any) => {
  return (
    <div
      className={cn(
        `flex content-center flex-col gap-y-1 border border-gray-400 m-3 rounded-lg w-fit p-3`,
        el.incoming ? " self-end " : " self-start "
      )}
    >
      <img
        src={el.preview}
        alt="el.message"
        width={200}
        height={250}
        className=" rounded-lg p-2"
      />
      <h2 className=" text-xs">Chat App</h2>
      <Link href={"https://google.com"} className=" text-blue-1 underline">
        <p className=" text-xs font-normal text-white">Google</p>
      </Link>
    </div>
  );
};

const MediaType = ({ el }: any) => {
  return (
    <div
      className={cn(
        `flex content-center gap-y-3`,
        el.incoming ? " self-end " : " self-start "
      )}
    >
      <img
        src={el.img}
        alt="Media Image"
        width={200}
        height={250}
        className=" rounded-lg"
      />
    </div>
  );
};

const MsgType = ({ el }: any) => {
  return (
    <div
      className={cn(
        `flex content-center gap-y-3`,
        el.incoming ? " self-end " : " self-start "
      )}
    >
      <div
        className={cn(
          " inline-block p-1 text-xs font-normal rounded-lg my-1 ",
          el.incoming ? "bg-blue-500 text-white" : "bg-gray-700 text-white"
        )}
      >
        {el.message}
      </div>
      <EllipsisVertical size={17} />
    </div>
  );
};

const Timeline = ({ el }: any) => {
  return (
    <div className=" flex items-center justify-between gap-3">
      <Separator
        orientation="horizontal"
        className="my-2 bg-gray-400 w-[42%] h-[1px] rounded-sm"
      />
      <h1 className=" font-medium text-xs text-gray-400">{el.text}</h1>
      <Separator
        orientation="horizontal"
        className="my-2 bg-gray-400 w-[42%] h-[1px] rounded-sm"
      />
    </div>
  );
};

export { Timeline, MsgType, MediaType, LinkType, DocType, ReplyType };
