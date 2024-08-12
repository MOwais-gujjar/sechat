
import { CreateGroup } from "@/components/CreateGroup";
import { NavigationBar } from "@/components/Navigation-bar";
import Image from "next/image";

const ChatPage = () => {
  return (
      <div className=" flex w-[1320px] items-center justify-center mx-auto pr-10">
         <NavigationBar trigger={<CreateGroup />} />
         <div className="flex flex-col gap-y-3 items-center justify-center h-screen text-white">
            <Image src={'/icons/gift.gif'} alt="Chat Gif" width={300} height={300} />
            <p className=""> Select a user to start chatting</p>
          </div>
      </div>
  );
};

export default ChatPage;
