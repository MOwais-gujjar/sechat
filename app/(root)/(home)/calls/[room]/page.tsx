import { MeetingRoom } from "@/components/Meeting-Room";
import { NavigationBar } from "@/components/Navigation-bar";
import React, { FC } from "react";

const Calls: FC<{ params: { room: string } }> = ({ params: { room } }) => {
  if (room === null) {
    console.log("error");
  }
  return (
    <div>
      <NavigationBar trigger={null} />
      <MeetingRoom chatId={room} />
    </div>
  );
};

export default Calls;
