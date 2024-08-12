import React from "react";

import { usePathname } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatElement } from "@/components/ChatElement";

export const ChatBox = ({ onUserClick }: any) => {
  const pathName = usePathname();
  const chatId = pathName.split("/").pop();

  const conversation = useQuery(api.conversations.get);
  const groupMessages = conversation?.filter((msg) => msg.conversation);

  const directMessages = conversation?.filter(
    (msg) => !msg.conversation.isGroup
  );

  const hasConversation =
    (groupMessages && groupMessages.length > 0) ||
    (directMessages && directMessages.length > 0);

  return (
    <ScrollArea className=" flex flex-col px-8 gap-y-3 max-h-[450px]">
      <div className="flex flex-col gap-y-2 py-2">
        {hasConversation && (
          <>
            {directMessages && directMessages.length > 0
              ? directMessages.map(
                  ({ conversation, otherMember, unseenCount, lastMessage }) => (
                    <div
                      key={conversation._id}
                      className=" flex flex-col gap-y-10 mr-5"
                      onClick={onUserClick}
                    >
                      <ChatElement
                        name={otherMember?.username || ""}
                        AvatarUrl={otherMember?.imageUrl || ""}
                        lastMessageContent={lastMessage?.lastMessageContent}
                        lastMessageSender={lastMessage?.lastMessageSender}
                        timestamp={
                          lastMessage?.lastMessageTimestamp || undefined
                        }
                        chatId={conversation._id}
                        isActive={chatId === conversation._id}
                        unSeenMessageCount={unseenCount}
                      />
                    </div>
                  )
                )
              : null}
            {groupMessages && groupMessages.length > 0
              ? groupMessages.map(
                  ({ conversation, otherMember, unseenCount, lastMessage }) => (
                    <div
                      key={conversation._id}
                      className=" flex flex-col gap-y-10 mr-5"
                      onClick={onUserClick}
                    >
                      <ChatElement
                        name={conversation.name || ""}
                        AvatarUrl={conversation.groupImage || ""}
                        lastMessageContent={lastMessage?.lastMessageContent}
                        lastMessageSender={lastMessage?.lastMessageSender}
                        timestamp={
                          lastMessage?.lastMessageTimestamp || undefined
                        }
                        chatId={conversation._id}
                        isActive={chatId === conversation._id}
                        unSeenMessageCount={unseenCount}
                      />
                    </div>
                  )
                )
              : null}
          </>
        )}
      </div>
    </ScrollArea>
  );
};

