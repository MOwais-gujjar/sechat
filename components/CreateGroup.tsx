"use client"

import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useMutationHandler } from "@/hooks/use-Mutation-Handler";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConvexError } from "convex/values";

import { ImageIcon, Users, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const createGroupSchema = z.object({
  name: z.string().min(2, {
    message: "Group name must be at least 2 characters long",
  }),
  members: z.array(z.string()).min(1, {
    message: "Group must have at least 1 member",
  }),
});
export const CreateGroup = () => {
  const imgRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [renderedImage, setRenderedImage] = useState("");
  const [createGroupModal, setCreateGroupModal] = useState(false);

  const contact = useQuery(api.contacts.get);

  const user = useQuery(api.users.getMe || "skip")

  const generateUploadUrl = useMutation(api.conversations.generateUploadUrl);

  const conversations = useQuery(api.conversations.get);

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
      const postUrl = await generateUploadUrl();

      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": selectedImage?.type! },
        body: selectedImage,
      });

      const { storageId } = await result.json();

      const group = await createGroup({ name, members, groupImage: storageId, admin: user?._id });
      form.reset();
      toast.success("Group create Successful");
      return group;
    } catch (error) {
      console.log(error);
      toast.error(
        error instanceof ConvexError
          ? error.data
          : " An error for creating group"
      );
    }
  };

  const members = form.watch("members", []);

  const unSelectedContacts = useMemo(() => {
    return contact ? contact.filter((con) => !members.includes(con._id)) : [];
  }, [contact, members]);

  return (
    <div>
      <Dialog
        open={createGroupModal}
        onOpenChange={() => setCreateGroupModal(!createGroupModal)}
      >
        <DialogTrigger className='w-full'>
          <Users size={20} className='cursor-pointer' />
        </DialogTrigger>
        <DialogContent>
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
                        <FormLabel>Contacts</FormLabel>
                        <FormControl>
                          <DropdownMenu>
                            <DropdownMenuTrigger
                              asChild
                              disabled={unSelectedContacts.length === 0}
                            >
                              <Button className="ml-4" variant="outline">
                                Select contacts
                              </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-full">
                              <DropdownMenuLabel>Contacts</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              {unSelectedContacts.map((contact) => (
                                <DropdownMenuCheckboxItem
                                  key={contact._id}
                                  className="flex items-center gap-2 w-full p-2"
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      form.setValue("members", [
                                        ...members,
                                        contact._id,
                                      ]);
                                    }
                                  }}
                                >
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src={contact.imageUrl} />
                                    <AvatarFallback>
                                      {contact.username.slice(0, 2)}
                                    </AvatarFallback>
                                  </Avatar>
                                  <h4 className="truncate">
                                    {contact.username}
                                  </h4>
                                </DropdownMenuCheckboxItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </FormControl>
                      </FormItem>

                      /*
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
                      */
                    )}
                  />
                </fieldset>
              </div>
              {members.length ? (
                <Card className="flex items-center gap-3 overflow-x-auto w-full h-24 p-2">
                  {contact
                    ?.filter((contact) => members.includes(contact._id))
                    .map((friend) => (
                      <div
                        key={friend._id}
                        className="flex flex-col items-center gap-1"
                      >
                        <div className="relative">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={friend.imageUrl} />
                            <AvatarFallback>
                              {friend.username.slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <X
                            onClick={() =>
                              form.setValue("members", [
                                ...members.filter((id) => id !== friend._id),
                              ])
                            }
                            className="text-muted-foreground h-4 w-4 absolute bottom-8 left-7 bg-muted rounded-full cursor-pointer"
                          />
                        </div>
                      </div>
                    ))}
                </Card>
              ) : null}
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
            <DialogFooter>
              <Button type="submit" disabled={createGroupState === "loading"}>
                Create group
              </Button>
            </DialogFooter>
          </div>
        </form>
      </Form>
      </DialogContent>
      </Dialog>
      </div>
  );
}
