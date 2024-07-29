'use client'
import { ToggleSidebar } from "@/redux/slice/app";
import { faker } from "@faker-js/faker";
import { EllipsisVertical, Phone, Video } from "lucide-react";
import { useDispatch } from "react-redux";

interface chatHeaderProps {
  user: any
}

const Chatheader: React.FC<chatHeaderProps> = ({ user}) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="flex justify-between items-center px-3">
        <div className="flex items-center space-x-1 cursor-pointer" onClick={() => dispatch(ToggleSidebar())}>
          {/* Image */}
          <div className=" border border-light-1 p-1 rounded-full">
          <img
            src={faker.image.avatar()}
            alt="Image"
            className="w-8 h-8 flex-shrink-0 rounded-full"
          />
          </div>
          {/* Name */}
          <div className=" flex flex-col items-start py-2 px-2">
            <span className="text-xs font-medium">{ faker.person.fullName()}</span>
            {/* Status */}
            <span className="ml-1 text-[10px] font-normal text-green-800">
              {user.status || "online"}
            </span>
          </div>
        </div>
        <div className=" flex items-center gap-x-5">
          {/* Voice Call */}
          <Phone size={22} className=" text-green-400/70 cursor-pointer duration-300 hover:bg-icon-1/70 bg-icon-1 p-1 rounded-sm" />
          <Video size={22} className=" text-green-400/70 cursor-pointer duration-300 hover:bg-icon-1/70 bg-icon-1 p-1 rounded-sm" />
          <EllipsisVertical size={17} />
        </div>
      </div>
    </>
  );
};

export default Chatheader;
