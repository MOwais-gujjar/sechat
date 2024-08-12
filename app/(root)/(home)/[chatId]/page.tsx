"use client";

import { ChatContent } from "@/components/chatContent";
import { NavigationBar } from "@/components/Navigation-bar";
import { Id } from "@/convex/_generated/dataModel";

const ChatId = ({
  params: { chatId },
}: {
  params: { chatId: Id<'conversations'> };
}) => {
  return (
    <>
      <div className=" hidden md:block">
        <NavigationBar trigger />
      </div>
      <ChatContent chatId={chatId} />
    </>
  );
};

export default ChatId;
