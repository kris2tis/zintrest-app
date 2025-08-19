import React from "react";
import Button from "./button";

export default function TextArea() {
  return (
    <textarea
      className="w-full h-2/3 px-2 py-3 border border-primary-900 rounded-xs outline-none"
      name="commentContent"
    ></textarea>
  );
}
