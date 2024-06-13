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
    <div className=" flex items-center gap-x-2 mx-2 border-dark-1 rounded-md bg-white w-full h-16">
      <div className="flex item-center relative">
        {online ? (
          <>
            <img
              src={imgUrl}
              alt={person}
              width={45}
              height={45}
              className=" rounded-full object-cover ml-4 mr-1 border-dark-1"
            />
            <span
              className={` absolute top-0right-0 left-12 inline-block w-fit h-fit p-[6px] rounded-full ml-0 my-auto bg-green-700`}
              aria-hidden="true"
            ></span>
          </>
        ) : (
          <img
            src={imgUrl}
            alt={person}
            width={45}
            height={45}
            className=" rounded-full object-cover ml-4 mr-1 border-dark-1"
          />
        )}
      </div>

      <div className=" flex flex-col items-start gap-y-1 mx-1 py-3 w-36">
        <h1 className=" font-semibold text-sm font-sans">{person}</h1>
        <p className="mt-1 text-sm"> {msg.slice(0, 15)}</p>
      </div>
      <div className="flex flex-col items-center gap-y-2 mr-2 my-2">
        <p className=" text-sm bg-light-1/20 font-light p-1 rounded">{time}</p>
        <p className="text-[10px] bg-blue-400 px-1 font-light rounded-full">
          {unread}
        </p>
      </div>
    </div>
  );
};

export default ChatElement;
