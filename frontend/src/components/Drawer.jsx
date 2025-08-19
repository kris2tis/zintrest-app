import React from "react";

export default function Drawer({ open , ref , children }) {
  return (
    <div
      ref={ref}
      className={`lg:hidden z-20 fixed ${open ? "translate-x-0" : "translate-x-full"} transition-transform inset-0 duration-500 ease-in-out py-8 px-5 top-0 w-3/4 h-screen bg-secondary-100`}
    >
     {children}
    </div>
  );
}
