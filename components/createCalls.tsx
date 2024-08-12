import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Model from "../Model";
import Input from "../Hooks-form/Input/Input";
import { Phone, Search, UserRound, UserRoundPlus, Video } from "lucide-react";
import { ConversationList } from "@/constant";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

interface createCallsProps {
  open?: boolean;
  handleClose: () => void;
}

export default function CreateCalls({ open, handleClose }: createCallsProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    // API Routes
    try {
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Model open={open} onClose={handleClose}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-96 flex flex-col justify-center items-center"
      >
        <div className=" space-y-6">
          <div className=" border-b border-gray-900/10 pb-12">
            <h2 className=" text-base font-semibold leading-7 text-light-1">
              Let's Start calls
            </h2>
            <p className=" mt-1 text-sm leading-7 text-gray-200 opacity-75">
              create a Call with 2 or more people
            </p>
            <div
              className="
                    relative
                    mt-1
                    flex
                    flex-col
                    gap-y-8
          "
            >
              <Input
                register={register}
                label=""
                id="Search"
                Disabled={isLoading}
                required
                errors={errors}
                placeHolder="Search"
              />
              <Search
                aria-hidden="true"
                className="absolute w-5 h-5 text-gray-400 right-3 top-4 "
                onClick={() => alert("Search User")}
                size={15}
              />
            </div>
            <ScrollArea className=" flex flex-col max-h-[280px] my-3">
              {ConversationList.map((el) => (
                <div className=" flex flex-col gap-y-5 my-2">
                  <div
                    key={el.id}
                    className=" flex items-center justify-around gap-x-2 rounded-md w-64 h-12 border border-gray-500 duration-300 hover:bg-icon-1 active:bg-icon-1/90"
                  >
                    <img
                      src={el.img}
                      alt={el.name}
                      className=" flex-shrink-0 w-9 h-9 rounded-full mr-1 ml-2 object-cover"
                    />
                    <h1 className=" font-medium text-sm text-light-2 ">
                      {el.name}
                    </h1>
                    <div className=" flex gap-x-4 text-green-400/70 cursor-pointer">
                      <Video size={22} onClick={() => alert("Video Calls")} className=" hover:bg-icon-1 p-1 duration-300 rounded-sm "/>
                      <Phone size={22} onClick={() => alert("Audio Calls")} className=" hover:bg-icon-1 p-1 duration-300 rounded-sm "/>
                    </div>
                  </div>
                </div>
              ))}
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>
        </div>
      </form>
    </Model>
  );
}
