"use client";

import { useTheme } from "@emotion/react";

import { Card, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound, UserRoundSearch } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { UserButton } from "@clerk/nextjs";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const statuses = [
  "👋 Speak Freely",
  "🤐 Encrypted",
  "👍🏻 Free to chat",
  "👨🏼‍💻 Coding",
  "📴 Taking a break",
];

const SettingPage = () => {
  // const { setTheme } = useTheme();
  return (
    <div>
      <Card className=" border-0 px-4">
        <CardTitle> Profile</CardTitle>

        <div>
          <Avatar className="h-20 w-20 mx-auto">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </Card>
      <div className=" flex flex-col gap-y-6 mt-4">
        <div className="flex items-center space-x-3">
          <UserRound className=" text-dark-2" />
          <Input
            disabled
            placeholder="Name"
            value={"User Name"}
            className="border-none outline-none ring-0"
          />
        </div>
        <Separator />
        <div className='flex items-center justify-center space-x-5'>
          <p>Manage your account</p>
          <button>User Button</button>
        </div>

        <Separator />
{/* 
        <Dialog open={}>
          <DialogTrigger>
            <div className='flex items-center space-x-2'>
              <UserRoundSearch />
              <p>Send friend request</p>
            </div>
          </DialogTrigger> */}
      </div>
    </div>
  );
};

export default SettingPage;
