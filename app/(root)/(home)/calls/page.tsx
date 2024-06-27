import React from "react";
import Calls from "./components/calls";
import CallsDetail from "./components/callsDetail";

const CallsPage = () => {
  return (
    <div className=" relative w-full h-full flex items-center space-x-3 m-0">
      {/* Left Side */}
      <Calls />

      {/* Right Side */}
      <CallsDetail />
    </div>
  );
};

export default CallsPage;
