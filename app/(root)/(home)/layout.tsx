import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from "react";

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className=" relative">
      <div className=" flex">
        <Sidebar />
        <section className=" flex min-h-screen flex-1">
          <div className=" w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Rootlayout;
