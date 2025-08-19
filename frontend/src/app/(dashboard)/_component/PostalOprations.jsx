"use client";

import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, { useActionState, useEffect, useState } from "react";
import Modal from "@/components/Modal";

import Button from "ui/button";
import { deletePost } from "action/actions";
import toast from "react-hot-toast";
const intialMessage = {
  message: "",
};
export function DeletePost({ id }) {
  const [open, setOpen] = useState(false);
  const [state, formAction, pending] = useActionState(
    deletePost,
    intialMessage
  );

  useEffect(() => {
    if (state.message) {
      toast.success(state.message);
    } else if (state.errorMessage) {
      toast.error(state.errorMessage);
    }
  }, [state]);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className={"!bg-transparent py-2 !border-gray-400"}
      >
        <TrashIcon className="size-4 text-white" />
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col items-center gap-y-5 h-full">
          <div>
            <p>مطمعنی میخوای پست رو حذف کنی ؟</p>
          </div>
          <div className="flex-row gap-x-3 w-full">
            <form
            className="flex justify-between w-full"
              action={async (formData) =>
                await formAction({ formData, postId: id })
              }
            >
              <Button onClick={() => setOpen(false)}>نه نمیخوام حذف بشه</Button>
              <Button
                className={`${pending ? "blur-sm" : ""}`}
                variant="primary"
              >
                حذف پست
              </Button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export function EditPost({ id }) {
  return (
    <Button
      variant="outline"
      className={"!bg-transparent py-2 !border-gray-400"}
    >
      <PencilIcon className="size-4 text-white" />
    </Button>
  );
}

export function CreatePost({ id, children }) {
  return (
    <Button
      variant="outline"
      className={
        "!bg-transparent flex gap-x-2 items-center text-secondary-100 py-2 !border-gray-400"
      }
    >
      {children}
      <PlusIcon className="size-4" />
    </Button>
  );
}
