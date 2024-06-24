import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Model from "../Model";
import Input from "../Hooks-form/Input/Input";
import { ChatList } from "@/constant";
import Select from "../Hooks-form/Input/Select";

const users = [
  {
    id: 0,
    name: "Akhter",
  },
  {
    id: 1,
    name: "Tayyab",
  },
  {
    id: 2,
    name: "Salman",
  },
  {
    id: 4,
    name: "Asim",
  }
]

interface createGroupProps {
  open?: boolean;
  handleClose: () => void;
}

export default function CreateGroup({ open, handleClose }: createGroupProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      members: [],
    },
  });

  const members = watch("members");
  console.log(members)
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" space-y-12">
          <div className=" border-b border-gray-900/10 pb-12">
            <h2 className=" text-base font-semibold leading-7 text-light-1">
              Create a Group Chat
            </h2>
            <p className=" mt-1 text-sm leading-7 text-gray-200 opacity-75">
              create a chat with more than 2 people
            </p>
            <div
              className="
                    mt-10
                    flex
                    flex-col
                    gap-y-8
          "
            >
              <Input
                register={register}
                label="Name"
                id="name"
                Disabled={isLoading}
                required
                errors={errors}
              />
              <Select 
              disabled={isLoading}
              label={members}
              option={users.map((user) => ({
                value: user.id,
                label: user.name
              }))}
              onChange={(value) => setValue('members', value, {
                shouldValidate: true
              })}
              value={members}
              />
            </div>
          </div>
        </div>
        <div className="
              mt-6
              flex
              items-center
              justify-end
              gap-x-6
        ">
          <Button type="button" onClick={() => onclose} disabled={isLoading} variant={"secondary"}>Cencel</Button>
          <Button type="submit" disabled={isLoading} variant={"default"}>Create</Button>
        </div>
      </form>
    </Model>
  );
}
