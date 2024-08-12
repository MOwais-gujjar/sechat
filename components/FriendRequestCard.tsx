import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutationHandler } from "@/hooks/use-Mutation-Handler";
import { ConvexError } from "convex/values";
import { Handshake, X } from "lucide-react";
import React, { FC } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

interface FriendRequestCardProps {
  email: string;
  imageUrl: any;
  username: string;
  id: Id<"friend_requests">;
  key: any;
}
export const FriendRequestCard: FC<FriendRequestCardProps> = ({
  email,
  imageUrl,
  username,
  id,
}) => {
  const { useMutate: acceptRequest, state: acceptRequestState } =
    useMutationHandler(api.friend_request.accept);
  const { useMutate: declineRequest, state: declineRequestState } =
    useMutationHandler(api.friend_request.decline);

  const declineRequestHandler = async (id: string) => {
    try {
      await declineRequest({ id });
      toast.success(" Friend Request Decline ");
    } catch (error) {
      console.log(`Error decline friend request ${error}`);
      toast.error(
        error instanceof ConvexError ? error.data : " An Error Decline Request "
      );
    }
  };

  const acceptRequestHandler = async (id: string) => {
    try {
      await acceptRequest({ id });
      toast.success(" Friend Request Accept ");
    } catch (error) {
      console.log(` An Error Accept friend request ${error}`);
      toast.error(
        error instanceof ConvexError ? error.data : " An Error Accept Request "
      );
    }
  };

  return (
    <div className=" flex items-center justify-between space-x-4 rounded-md">
      <div className="flex items-center space-x-3">
        <Handshake />
        <Avatar>
          <AvatarImage src={imageUrl} />
          <AvatarFallback>{username.slice(0, 1)}</AvatarFallback>
        </Avatar>
        <div className=" flex justify-between items-center">
          <div className=" flex-1 space-y-1">
            <p className=" text-sm font-medium leading-none">{username}</p>
            <p className=" text-sm font-medium text-light-1/70">{email}</p>
          </div>
        </div>
        <div className=" flex items-center gap-x-5">
            <Switch
              disabled={
                declineRequestState === "loading" ||
                acceptRequestState === "loading"
              }
              onCheckedChange={(_) => acceptRequestHandler(id)}
            />

            <Button
              size={"icon"}
              variant={"secondary"}
              disabled={
                declineRequestState === "loading" ||
                acceptRequestState === "loading"
              }
              onClick={() => declineRequestHandler(id)}
            >
              <X />
            </Button>
          </div>
      </div>
    </div>
  );
};
