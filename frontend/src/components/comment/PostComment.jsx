"use client";

import { useState, useActionState, useEffect } from "react";
import { useAuth } from "context/AuthContext";

import CommenDetails from "./Comment";
import AnswerComment from "./AnswerComment";
import Button from "ui/button";
import toast from "react-hot-toast";
import TextArea from "ui/TextArea";
import Modal from "../Modal";
import SubmitButton from "ui/SubmitButton";

import { createComment } from "action/actions";

const initiallMessage = {
  message: "",
};

export default function PostComment({ postComments, postId }) {
  const [open, setOpen] = useState(false);
  const [parent, setParent] = useState();
  const { isAuthenticated } = useAuth();
  const [state, formAction] = useActionState(createComment, initiallMessage);

  const addnewComment = (parent) => {
    if (!isAuthenticated) {
      toast.error("ابتدا باید ثبت نام | وارد سایت شوید", {
        duration: 3000,
      });
      return;
    }

    setParent(parent);
    onOpen();
  };

  const onOpen = () => {
    setOpen(true);

    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const onClose = () => {
    setOpen(false);

    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    } else if (state?.errorMessage) {
      toast.error(state?.errorMessage);
    }
  }, [state]);

  return (
    <div className="flex-column gap-y-3 !items-start px-2 lg:px-0">
      <Modal
        title={parent ? "ثبت پاسخ" : "ثبت نظر"}
        desceription={
          parent ? `ثبت پاسخ برای ${parent.user.name}` : "ثبت نظر جدید"
        }
        open={open}
        onClose={onClose}
      >
        <form
          className="flex flex-col h-full justify-between"
          action={async (formData) => {
            await formAction({ formData, parentId: parent?.parent, postId });
          }}
        >
          <TextArea />

          <SubmitButton classNameButton={"mt-2"}>ثبت نظر</SubmitButton>
        </form>
      </Modal>

      <div className="w-full flex justify-between items-center">
        {postComments.length > 0 ? (
          <span className="!font-medium text-normal">{postComments.length} نظر</span>
        ) : (
          <span className="font-medium">نظری وجود ندارد</span>
        )}
        <Button onClick={() => addnewComment(null)}>ثبت نظر</Button>
      </div>
      <div className="flex-column !items-start gap-y-3 w-full">
        {postComments?.map((comment) => (
          <div
            key={comment._id}
            className="flex-column w-full !items-start gap-y-4"
          >
            <CommenDetails
              open={(parent, user) => addnewComment({ parent, user, postId })}
              {...comment}
            />
            <AnswerComment {...comment} />
          </div>
        ))}
      </div>
    </div>
  );
}
