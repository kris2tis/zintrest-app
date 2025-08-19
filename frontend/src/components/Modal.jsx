"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import useOutsideClick from "hooks/useOutsideClick";

import { createPortal } from "react-dom";
import Divider from "ui/Divider";

export default function Modal({
  open,
  title = "",
  desceription = "",
  children,
  onClose,
}) {
  const ref = useOutsideClick(onClose);

  return (
    open &&
    createPortal(
      <div className="backdrop fadeInUp-animation w-full h-full bg-red fixed z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          ref={ref}
          className="modal overflow-auto fadeInUp-animation shadow-xs w-[500px] h-max rounded-md z-80 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"
        >
          <div className="flex flex-col h-full gap-y-3 px-3 py-4">
            <div>
              <div className="flex justify-between items-center">
                <h4>{title}</h4>
                <XMarkIcon onClick={onClose} className="size-6" />
              </div>
              <p className="text-sm mt-2">{desceription}</p>
            </div>
            {(title || desceription) && <Divider />}

            <div className="h-full">{children}</div>
          </div>
        </div>
      </div>,
      document.body
    )
  );
}
