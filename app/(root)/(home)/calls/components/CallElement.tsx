import React from "react";

interface ChatElementProps {
    id: number,
  imgUrl: string;
  name: string;
  online: boolean;
  incoming: boolean;
  missed: boolean
}

const CallElement: React.FC<ChatElementProps> = ({
  imgUrl,
  name,
  online,
  incoming,
  missed,
  id
}) => {
  return (
    <div className=" flex items-center gap-x-2 mx-2 rounded-md w-full h-14 border border-gray-700 hover:bg-gray-700 cursor-pointer">
      <div className="flex item-center relative">
        {online ? (
          <>
            <img
              src={imgUrl}
              alt={name}
              className=" flex-shrink-0 w-9 h-9 rounded-full mr-1 ml-2 object-cover"
            />
            <span
              className={` absolute top-0 right-0 left-9 inline-block w-fit h-fit p-[6px] rounded-full ml-0 my-auto bg-green-700`}
              aria-hidden="true"
             />
          </>
        ) : (
          <img
            src={imgUrl}
            alt={name}
            className=" flex-shrink-0 w-9 h-9 rounded-full mr-1 ml-2 object-cover"
          />
        )}
      </div>

      <div className=" flex flex-col items-start mx-1 py-3 w-32">
        <h1 className=" font-medium text-sm text-gray-400">{name}</h1>
        <p className="mt-1 text-[10px] text-gray-400"> {incoming}</p>
      </div>
      <div className="flex flex-col items-center gap-y-2 mr-2 my-2 w-10">
        <p className=" text-[8px] font-light rounded">{missed}</p>
        <p className=" flex items-center justify-center text-[9px] bg-blue-400 px-1 font-light rounded-full">
          {id}
        </p>
      </div>
    </div>
  )
};

export default CallElement;
