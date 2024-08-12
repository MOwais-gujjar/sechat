import { cn, getFormattedTimestamp} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Badge } from "@/components/ui/badge";

type ChatElementPrps = {
  name: string;
  AvatarUrl: string;
  lastMessageContent: string | undefined;
  lastMessageSender: string | undefined;
  timestamp: number | undefined;
  isActive: boolean;
  chatId: string;
  unSeenMessageCount: number | undefined;
};
export const ChatElement: FC<ChatElementPrps> = ({
  name,
  AvatarUrl,
  lastMessageContent,
  lastMessageSender,
  timestamp,
  isActive,
  chatId,
  unSeenMessageCount,
}) => {
  return (
    <>
      <Link
        href={`/${chatId}`}
        className={cn(
          `flex items-center m-2 rounded-md w-[235px] h-[70px] border border-gray-700 hover:bg-gray-700 duration-300 scale-105 cursor-pointer`,
          { "bg-dark-1 dark:bg-gray-800 ": isActive }
        )}
      >
        <div className="flex item-center relative">
          {isActive ? (
            <>
              <div className="border p-1 border-light-1 rounded-full">
                <Image
                  src={AvatarUrl}
                  alt={name}
                  width={55}
                  height={55}
                  className=" flex-shrink-0 rounded-full  object-cover"
                />
              </div>
              <span
                className={` absolute top-0 right-0 left-9 inline-block w-fit h-fit p-[6px] rounded-full ml-0 my-auto bg-green-700`}
                aria-hidden="true"
              />
            </>
          ) : (
            <div className=" mr-1 ml-2 border-2 border-light-1 rounded-full">
              <Image
                src={AvatarUrl}
                alt={name}
                width={40}
                height={40}
                className=" rounded-full object-cover"
              />
            </div>
          )}
        </div>

        <div className=" flex flex-col items-start mx-1 py-1 w-36">
          <h1 className=" font-medium text-[12px] text-gray-400">
            {name.slice(0, 10)}
          </h1>
          <p className="mt-1 text-[10px] text-gray-400">
            {lastMessageContent || "Unset"}
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-2 mr-2 my-2 w-10">
          <Badge
            variant={"default"}
            className=" text-[10px] font-light bg-icon-1/30 text-light-1 rounded"
          >
            {timestamp && getFormattedTimestamp(timestamp)}
          </Badge>
          <Badge
            className=" text-light-1 rounded-full px-2 py-1 opacity-70 bg-blue-1"
            variant={"default"}
          >
            {unSeenMessageCount}
          </Badge>
        </div>
      </Link>
    </>
  );
};

