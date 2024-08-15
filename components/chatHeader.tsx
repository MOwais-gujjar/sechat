"use client";

import { ChevronLeft, Phone, Video } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { useIsDesktop } from "@/hooks/isDesktop";
import { api } from "@/convex/_generated/api";
import { useSidebarWidth } from "@/hooks/side-Bar-Width";
import { ProfileSheet } from "./profile-sheet";
import { GroupSheet } from "./Group-Sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type ChatHeaderProps = {
  chatAvatar: string;
  username: string;
  isGroup: boolean;
  chatId: string;
  status: string;
  groupImage: string;
  admin: string;
};

export const ChatHeader: FC<ChatHeaderProps> = ({
  chatAvatar,
  chatId,
  isGroup,
  status,
  username,
  groupImage,
  admin,
}) => {
  const { sidebarWidth } = useSidebarWidth();
  const isDesktop = useIsDesktop();
  const router = useRouter();
  const conversations = useQuery(api.conversations.get);

  const groupsInCommon = conversations?.filter(
    ({ conversation }: any) => conversation.isGroup
  );

  const videoCall = () => router.push(`/calls/${chatId}`);

  return (
    <div
      className={cn(
        "fixed bg-dark-1 dark:bg-gray-800 px-10 pr-10 flex items-center justify-between space-x-3 z-30  top-0 w-full h-20"
      )}
      style={isDesktop ? { width: `calc(100% - ${sidebarWidth + 4}%)` } : {}}
    >
      <div className="flex space-x-3">
        <div className="md:hidden">
          <Button asChild variant="outline" size="icon">
            <Link href="/">
              <ChevronLeft />
            </Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger className="flex items-center cursor-pointer space-x-4">
            {isGroup && isGroup ? (
              <>
                <Avatar>
                  <AvatarImage src={groupImage} />
                  <AvatarFallback>{username[0]}</AvatarFallback>
                </Avatar>
                <h2 className="font-bold text-lg">{username}</h2>
              </>
            ) : (
              <>
                <Avatar>
                  <AvatarImage src={chatAvatar} />
                  <AvatarFallback>{""}</AvatarFallback>
                </Avatar>
                <h2 className="font-bold text-lg">{username}</h2>
              </>
            )}
          </SheetTrigger>
          <SheetContent className="bg-dark-1 dark:bg-black dark:text-white w-80 md:w-96">
            {isGroup ? (
              <GroupSheet
                chatId={chatId}
                groupName={username}
                groupImage={groupImage}
                admin={admin}
              />
            ) : (
              <ProfileSheet
                username={username}
                status={status}
                chatId={chatId}
                groupsInCommon={groupsInCommon}
                chatAvatar={chatAvatar}
                groupImage={groupImage}
              />
            )}
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex items-center space-x-6">
        <Tooltip>
          <TooltipTrigger>
            <Video className="cursor-pointer" onClick={() => videoCall} />
          </TooltipTrigger>
          <TooltipContent>Video Call</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Phone className="cursor-pointer" onClick={videoCall} />
          </TooltipTrigger>
          <TooltipContent>Audeo Call</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};
