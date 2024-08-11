import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Model from "../Model";
// import Input from "../Hooks-form/Input/Input";
import { Input } from "../ui/input";
import Select from "../Hooks-form/Input/Select";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { el } from "@faker-js/faker";
import { useMutationHandler } from "@/hooks/use-Mutation-Handler";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { toast } from "sonner";
import { ConvexError } from "convex/values";

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
  },
];

interface createGroupProps {
  open?: boolean;
  handleClose: () => void;
}

const createGroupSchema = z.object({
  name: z.string().min(2, {
    message: "Group name must be at least 2 characters long",
  }),
  members: z.array(z.string()).min(1, {
    message: "Group must have at least 1 member",
  }),
});

export default function CreateGroup({ open, handleClose }: createGroupProps) {
  const imgRef = useRef<HTMLInputElement>(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [renderedImage, setRenderedImage] = useState("");

  const contact = useQuery(api.contacts.get);

  const { useMutate: createGroup, state: createGroupState } =
    useMutationHandler(api.contacts.createGroup);

  useEffect(() => {
    if (!selectedImage) return setRenderedImage("");
    const reader = new FileReader();
    reader.onload = (e) => setRenderedImage(e.target?.result as string);
    reader.readAsDataURL(selectedImage);
  }, [selectedImage]);

  const form = useForm<z.infer<typeof createGroupSchema>>({
    resolver: zodResolver(createGroupSchema),
    defaultValues: {
      name: "",
      members: [],
    },
  });

  const createGroupHandler = async ({
    name,
    members,
  }: z.infer<typeof createGroupSchema>) => {
    try {
      await createGroup({name, members});
      form.reset();
      toast.success("Group create Successful")
    } catch (error) {
      console.log(error)
      toast.error(
        error instanceof ConvexError? error.data : " An error for creating group"
      )
    }
  };

  const members = form.watch("members", []);

  const unSelectedContacts = useMemo(() => {
    return contact ? contact.filter((con) => !members.includes(con._id)) : [];
  }, [contact, members]);

  return (
    <Model open={open} onClose={handleClose}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(createGroupHandler)}>
          <div className=" space-y-12">
            <div className=" border-b border-gray-900/10 pb-8">
              <h2 className=" text-base font-semibold leading-7 text-light-1">
                Create a Group Chat
              </h2>
              <p className=" mt-1 text-sm leading-7 text-gray-200 opacity-75">
                create a chat with more than 2 people
              </p>
              <div className=" mt-5 flex flex-col gap-y-8">
                {renderedImage && (
                  <div className="w-16 h-16 relative mx-auto">
                    <Image
                      src={renderedImage}
                      fill
                      alt="user image"
                      className="rounded-full object-cover"
                    />
                  </div>
                )}
                <div className=" flex flex-col items-center justify-center">
                  <input
                    type="file"
                    accept="image/*"
                    ref={imgRef}
                    hidden
                    onChange={(e) => setSelectedImage(e.target.files![0])}
                  />
                  <Button
                    className="flex gap-2"
                    onClick={() => imgRef.current?.click()}
                  >
                    <ImageIcon size={20} />
                    Group Image
                  </Button>
                  {createGroup.length > 1 && (
                    <>
                      <Button
                        className="flex gap-2"
                        onClick={() => imgRef.current?.click()}
                      >
                        <ImageIcon size={20} />
                        Group Image
                      </Button>
                    </>
                  )}
                </div>

                <fieldset>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="onboarding" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is the name of group
                        </FormDescription>
                        <FormMessage {...field} />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="members"
                    render={(_) => (
                      <FormItem>
                        <Select
                          disabled={createGroupState === "loading"}
                          label={members}
                          option={unSelectedContacts.map((el) => ({
                            value: el._id,
                            label: el.username,
                          }))}
                          onChange={(value) => {
                            const updatedMembers = unSelectedContacts.filter(
                              (contact) => value.includes(contact._id)
                            );
                            form.setValue(
                              "members",
                              updatedMembers.map((contact) => contact._id)
                            );
                          }}
                        />
                      </FormItem>
                    )}
                  />
                </fieldset>
              </div>
            </div>
          </div>
          <div
            className="
              mt-6
              flex
              items-center
              justify-end
              gap-x-6
        "
          >
            <Button
              type="submit"
              disabled={createGroupState === "loading"}
              variant={"secondary"}
              onClick={() => createGroupHandler}
            >
              Create
            </Button>
          </div>
        </form>
      </Form>
    </Model>
  );
}
