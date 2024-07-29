import { Separator } from "@/components/ui/separator";
import { faker } from "@faker-js/faker";
import { Phone, Video } from "lucide-react";
import React from "react";

const CallsDetail = ({ selectUser }: any) => {
  const index = 0;
  const date = new Date().toLocaleDateString();
  return (
    <div className="min-h-screen">
      <div className=" flex flex-col items-center gap-y-2 w-full">
        <div className=" flex items-center gap-x-3 justify-between w-full bg-dark-1/60 py-2 border-b border-gray-400 ">
          <div className=" flex items-center gap-x-3 py-2 px-3 ">
            <img
              src={faker.image.avatar()}
              alt={faker.person.fullName()}
              width={40}
              height={40}
              className=" rounded-full p-1 border border-gray-300"
            />
            <h1 className=" font-medium text-sm text-light-1"> {faker.person.fullName()}</h1>
          </div>
          <div className=" flex items-center gap-x-4 text-green-400/70 mx-3">
            <Phone
              size={35}
              className=" hover:bg-icon-1/70 bg-icon-1/30 p-2 rounded-sm"
            />
            <Video
              size={35}
              className=" hover:bg-icon-1/70 bg-icon-1/30 p-2 rounded-sm"
            />
          </div>
        </div>
        <div className="  flex flex-col gap-y-3 w-full bg-dark-1/60 border-b border-gray-400/60">
          <div className=" flex item-center justify-between gap-x-4 mx-3 py-2">
            <strong className=" font-medium text-sm text-light-1 p-2 mt-6">
              Call {index + 1}
            </strong>
            <div className=" flex flex-col items-center justify-around gap-y-2">
              <p className=" font-light text-light-1 text-xs bg-icon-1/60 p-1 rounded-sm mt-2">
                00:50
              </p>
              <p className=" font-light text-light-1 text-[10px] bg-icon-1/60 p-1 rounded-sm mt-2">
                {date}
              </p>
            </div>
          </div>
          <Separator className="w-full rounded-md bg-gray-500" />
          <div className=" flex item-center justify-between gap-x-4 mx-3 py-2">
            <strong className=" font-medium text-sm text-light-1 p-2 mt-6">
              Call {index + 2}
            </strong>
            <div className=" flex flex-col items-center justify-around gap-y-2">
              <p className=" font-light text-light-1 text-xs bg-icon-1/60 p-1 rounded-sm mt-2">
                01:30
              </p>
              <p className=" font-light text-light-1 text-[10px] bg-icon-1/60 p-1 rounded-sm mt-2">
                {date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallsDetail;
