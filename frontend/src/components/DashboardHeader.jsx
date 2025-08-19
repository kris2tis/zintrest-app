"use client";

import { useAuth } from "context/AuthContext";
import { useState } from "react";

import Avatar from "ui/Avatar";
import Drawer from "./Drawer";

import { Bars2Icon } from "@heroicons/react/24/solid";
import useOutsideClick from "hooks/useOutsideClick";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardHeader() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  
  const onClose = () => {
    setOpen(false);
  };
  
  const ref = useOutsideClick(onClose);
  return (
    <div className="flex justify-between items-center bg-secondary-100/100 py-5 px-3">
      <div className="text-normal">
        <h1 className="hidden lg:block text-[#7a7a7a]">
          سلام
          <span className="text-secondary-900"> {user?.name}</span>
        </h1>
        <Bars2Icon
          onClick={() => setOpen((prev) => !prev)}
          className="size-6 text-white lg:hidden"
        />
      </div>

      <div>
        <Avatar user={user || null} className={"w-4 h-4"} />
      </div>
      {/* BackDrop */}
      <div className={`${open ? "block" : "hidden"} lg:hidden  fadeInUp-animation absolute top-0 right-0 z-10 w-full h-screen backdrop:blur-2xl backdrop-blur-[5px] bg-[rgba(0,0,0,0.7)]`}></div>
      {/* Mobile Menu */}
      <Drawer ref={ref}  open={open} onClose={onClose} >
        <DashboardSidebar />
      </Drawer>
    </div>
  );
}
