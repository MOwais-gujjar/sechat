"use client";

import { ChatContent } from "@/components/chatContent";
import { CreateGroup } from "@/components/CreateGroup";
import { NavigationBar } from "@/components/Navigation-bar";
import { Id } from "@/convex/_generated/dataModel";

const ChatId = ({
  params: { chatId },
}: {
  params: { chatId: Id<'conversations'> };
}) => {
  return (
    <>
      <div className='hidden md:block'>
        <NavigationBar trigger={<CreateGroup />} />
      </div>
      <ChatContent chatId={chatId} />
    </>
  );
};

export default ChatId;
