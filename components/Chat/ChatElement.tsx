import React, { FC } from "react";

interface ChatElementPrps {
  imgUrl: string;
  person: string;
  msg: string;
  unread: number;
  online: boolean;
  time: string;
}
const ChatElement: React.FC<ChatElementPrps> = ({
  imgUrl,
  person,
  msg,
  unread,
  online,
  time,
}) => {
  return (
    <div className=" flex items-center gap-x-2 mx-2 rounded-md w-full h-14 border border-gray-700 hover:bg-gray-700 cursor-pointer">
      <div className="flex item-center relative">
        {online ? (
          <>
            <div className=" mr-1 ml-2 border p-1 border-light-1 rounded-full">
              <img
                src={imgUrl}
                alt={person}
                className=" flex-shrink-0 w-9 h-8 rounded-full  object-cover"
              />
            </div>
            <span
              className={` absolute top-0 right-0 left-9 inline-block w-fit h-fit p-[6px] rounded-full ml-0 my-auto bg-green-700`}
              aria-hidden="true"
            />
          </>
        ) : (
          <div className=" mr-1 ml-2 border p-1 border-light-1 rounded-full">
            <img
              src={imgUrl}
              alt={person}
              className=" flex-shrink-0 w-9 h-8 rounded-full  object-cover"
            />
          </div>
        )}
      </div>

      <div className=" flex flex-col items-start mx-1 py-3 w-32">
        <h1 className=" font-medium text-sm text-gray-400">{person}</h1>
        <p className="mt-1 text-[10px] text-gray-400"> {msg.slice(0, 13)}</p>
      </div>
      <div className="flex flex-col items-center gap-y-2 mr-2 my-2 w-10">
        <p className=" text-[8px] font-light rounded">{time}</p>
        <p className=" flex items-center justify-center text-[9px] bg-blue-400 px-1 font-light rounded-full">
          {unread}
        </p>
      </div>
    </div>
  );
};

export default ChatElement;
