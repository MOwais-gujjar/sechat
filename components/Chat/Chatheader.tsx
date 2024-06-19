import { faker } from "@faker-js/faker";
import { EllipsisVertical, Phone, Video } from "lucide-react";
import React from "react";

interface chatHeaderProps {
  user: any
}

const Chatheader: React.FC<chatHeaderProps> = ({ user}) => {
  console.log(user)
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Image */}
          <img
            src={faker.image.avatar()}
            alt="Image"
            className="w-10 h-10 flex-shrink-0 rounded-full"
          />
          {/* Name */}
          <div className=" flex flex-col items-start gap-y-2 px-2">
            <span className="text-sm font-semibold">{ faker.person.fullName()}</span>
            {/* Status */}
            <span className="ml-2 px-2 py-1 text-[10px] font-semibold text-green-800 bg-green-200 rounded-full">
              {user.status || "online"}
            </span>
          </div>
        </div>
        <div className=" flex items-center gap-x-5">
          {/* Voice Call */}
          <Phone size={20} />
          <Video size={20} />
          <EllipsisVertical size={20} />
        </div>
      </div>
    </>
  );
};

export default Chatheader;
