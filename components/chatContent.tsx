"use client"

import React, { FC, useEffect } from "react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutationHandler } from "@/hooks/use-Mutation-Handler";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";

import { ChatHeader } from "@/components/chatHeader";
import { MessageItem } from "@/components/Message-Item";
import { ChatFooter } from "@/components/Chat-footer";
import { ScrollArea } from "./ui/scroll-area";

export const ChatContent: FC<{ chatId: Id<"conversations"> }> = ({
  chatId,
}) => {
  const conversation = useQuery(api.conversation.get, { id: chatId });

  const messages = useQuery(api.messages.get, {
    id: chatId as Id<"conversations">,
  });

  const members = conversation?.isGroup
    ? conversation?.otherMembers ?? []
    : conversation?.otherMember
      ? [conversation.otherMember]
      : [];

  const { useMutate: markAsRead, state: _ } = useMutationHandler(
    api.conversation.markAsRead
  );

  useEffect(() => {
    if (messages && messages.length > 0) {
      markAsRead({ conversationId: chatId, messageId: messages[0]._id });
    }
  }, [chatId, markAsRead, messages]);

  const getSeenMessage = (messageId: Id<"messages">) => {
    const seenUsers = members
      .filter((member) => member.lastSeenMessageId === messageId)
      .map((member) => member.username?.split(" ")[0]);

    if (seenUsers.length === 0) return undefined;

    return formatSeenBy(seenUsers);
  };

  const formatSeenBy = (seenUsers: (string | undefined)[]) => {
    switch (seenUsers.length) {
      case 1:
        return `${seenUsers[0]} seen`;
      case 2:
        return `${seenUsers[0]} and ${seenUsers[1]} seen`;
      default:
        return `${seenUsers[0]}, ${seenUsers[1]} and ${
          seenUsers.length - 2
        } others seen`;
    }
  };

  const { user } = useUser();
  if (!conversation) return null;

  const chatAvatar = conversation.otherMember?.imageUrl || "";

  const name = conversation.isGroup
    ? conversation.name
    : conversation.otherMember?.username;

  const status = conversation.otherMember?.status || "";
  const groupImage = conversation.groupImage || "";

  const admin = conversation.admin || "test";

  return (
    <>
      <div className=" h-full flex">
        <ChatHeader
          chatAvatar={chatAvatar}
          username={name!}
          status={status}
          isGroup={conversation.isGroup}
          chatId={chatId}
          groupImage={groupImage!}
          admin={admin}
        />

        
        <ScrollArea className="p-3 flex flex-1 ">
          <div className="p-3 flex flex-col-reverse gap-2 ">
          {messages?.map((message, index) => (
            <MessageItem
              key={message._id}
              content={message.content}
              createdAt={message._creationTime}
              lastByUser={messages[index - 1]?.senderId === message.senderId}
              fromCurrentUser={message.isCurrentUser}
              senderImage={message.senderImage}
              senderName={message.senderName}
              type={message.type}
              seen={
                message.isCurrentUser ? getSeenMessage(message._id) : undefined
              }
            />
          ))}
          </div>
        </ScrollArea>

        <ChatFooter chatId={chatId} currentUserId={user?.id!} />
      </div>
    </>
  );
};
