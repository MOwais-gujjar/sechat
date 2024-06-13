import React from "react";
import { SunMoon } from "lucide-react";
import { Toggle } from "../ui/toggle";
const Switch = () => {
  return (
    <Toggle variant="outline" aria-label="Toggle bold" size={"sm"}>
      <SunMoon className=" w-5 h-5" size={15} />
    </Toggle>
  );
};

export default Switch;
