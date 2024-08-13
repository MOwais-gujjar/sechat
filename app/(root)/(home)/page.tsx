import { CreateGroup } from "@/components/CreateGroup";
import { NavigationBar } from "@/components/Navigation-bar";
import { Lock } from "lucide-react";
import Image from "next/image";

const ChatPage = () => {
  return (
    <div className=" flex w-full items-center justify-center mx-3 overflow-hidden">
      <NavigationBar trigger={<CreateGroup />} />
      <div className="flex flex-col items-center text-white">
        <Image src={"/icons/logo.png"} alt="logo" width={300} height={300} />
        <p className="text-sm text-center text-primary mx-48">
          {" "}
          Welcome to Sechat! Start a new chat or select an existing one to get
          started. The Communication End-to-End Encrypted and transfer data p2p
        </p>
        <div className=" flex items-center justify-center gap-x-2 text-xs text-primary/70 pt-12 ">
        <Lock size={14} />
          <p className=" font-normal text-center  ">
            End-to-End Encrypted
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
