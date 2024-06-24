import { Bell, FileBarChart2, Phone, Video, X } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { ToggleSidebar } from "@/redux/slice/app";
import { ScrollArea } from "../ui/scroll-area";
import { faker, fakerAR } from "@faker-js/faker";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { Switch } from "@/components/ui/switch";

const Contact = () => {
  const add = "0x36Fc2C0DfBa5f7111255353C026aAA4481bF8dC4";
  const dispatch = useDispatch();
  return (
    <div className=" max-w-full w-[250px] flex flex-col item-center mx-2 text-light-1 bg-gray-900">
      <div className=" flex items-center justify-between mx-2 ">
        <h1 className=" text-sm font-medium">Chat detail</h1>
        <Button variant={"outline"} onClick={() => dispatch(ToggleSidebar())}>
          <X size={18} />
        </Button>
      </div>
      {/* User Profile Info */}
      <ScrollArea className=" flex flex-col gap-y-2 items-center">
        <div className="flex items-center justify-center mx-auto gap-x-2 py-2">
          <Avatar className=" w-14 h-14 ml-3">
            <AvatarImage src={faker.image.avatar()} alt="user Image" />
          </Avatar>
          <div className=" flex flex-col items-center gap-y-2 w-24 mt-2">
            <h1 className=" text-xs font-semibold self-start ">
              {faker.person.fullName()}
            </h1>
            <p className="text-[10px] font-normal self-start">{add.slice(0, 10)}</p>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-x-7 cursor-pointer mx-auto py-4">
          <div className=" flex flex-col items-center gap-y-2">
            <Phone size={18} />
            <p className="text-xs font-normal">VOICE</p>
          </div>
          <div className=" flex flex-col items-center gap-y-2">
            <Video size={18} />
            <p className="text-xs font-normal">VIDEO</p>
          </div>
        </div>
        <Separator className="w-full rounded-md bg-gray-800" />
        {/* Photo & Videos  */}
        <div className="flex items-center justify-between gap-x-2 px-1">
          <div className=" flex gap-2">
            <h1 className=" text-xs font-semibold "> Photos & Videos</h1>
            <p className=" text-[10px] font-light">100</p>
          </div>
          <Button variant={"outline"} className=" text-xs font-normal">
            See all
          </Button>
        </div>
        <div className=" flex items-center mx-2 gap-2 py-4">
          {[1, 2, 3].map((el) => (
            <img
              src={faker.image.avatar()}
              alt=" Media"
              width={70}
              height={90}
            />
          ))}
        </div>
        <Separator className="w-full rounded-md bg-gray-800" />
        {/* Files */}
        <div className=" flex flex-col gap-y-2 mx-2 py-2 pb-3">
          <div className="flex items-center justify-between gap-x-2 px-1">
            <div className=" flex gap-2">
              <h1 className=" text-xs font-semibold ">Files</h1>
              <p className=" text-[10px] font-light">50</p>
            </div>
            <Button variant={"outline"} className=" text-xs font-normal">
              See all
            </Button>
          </div>
          {[1, 2, 3].map((el) => (
            <div className=" flex item-center gap-x-2 mx-2">
              <FileBarChart2 size={30} />
              <h3 className=" text-start text-xs font-medium mx-2">
                Redux Toolkit fundamentals & React compatability{" "}
              </h3>
            </div>
          ))}
        </div>
        <Separator className="w-full rounded-md bg-gray-800" />
        {/* Notofication */}
        <div className=" flex items-center justify-between mx-5 py-4">
          <div className=" flex items-center gap-2">
            <Bell size={18} />
            <h1 className=" text-xs font-light">Mute Notification</h1>
          </div>
          <Switch />
        </div>
        <Separator className="w-full rounded-md bg-gray-800" />
        {/* Groups */}
        <div className="flex flex-col items-center py-4">
          <h1 className=" text-sm font-normal py-2 text-start">2 Group in Common </h1>
          <div className=" flex flex-col gap-y-3 ">
            <div className="flex items-center justify-center mx-auto gap-x-2">
              <Avatar className=" w-8 h-8 ml-3">
                <AvatarImage src={faker.image.avatar()} alt="user Image" />
              </Avatar>
              <div className=" flex flex-col items-center gap-y-2 w-44 mt-1">
                <h1 className=" text-xs font-light ">
                  Programming Fundamentals Concepts
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center mx-auto gap-x-2">
              <Avatar className=" w-8 h-8 ml-3">
                <AvatarImage src={faker.image.avatar()} alt="user Image" />
              </Avatar>
              <div className=" flex flex-col items-center gap-y-2 w-44 mt-1">
                <h1 className=" text-xs font-light ">
                  BrainX Technologies web Developer Team
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Separator className="w-full rounded-md bg-gray-800" />
        {/* Buttons */}
        <div className=" flex items-center justify-center gap-x-16 py-4">
          <Button variant={"destructive"} className=" w-16 h-10 text-xs font-normal">Block</Button>
          <Button variant={"secondary"} className=" w-16 h-10 text-xs font-normal">Delete</Button>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Contact;
