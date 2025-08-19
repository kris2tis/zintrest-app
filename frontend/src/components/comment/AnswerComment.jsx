import React from "react";
import Img from "ui/img";

export default function AnswerComment({ answers }) {
  return (
    <div className="flex flex-col gap-y-2 pr-10">
      {answers?.map((answer) => (
        <div key={answer._id} className="flex flex-col gap-y-2">
          {/* اطلاعات , نظر کاربر */}
          <div className="flex gap-x-1.5">
            <div>
              <Img
                sourse={answer.user?.avatarUrl}
                containerClassName={"w-4 h-4"}
                imageClassName={"rounded-full"}
              />
            </div>

            <div className="flex flex-col gap-y-1 ">
              <div className="flex gap-x-2">
                <h3 className="text-subcontent font-medium">{answer.user.name}</h3>
                <p className="text-subcontent text-gray-600">{answer.content.text}</p>
              </div>
            </div>
          </div>
          {/* اطلاعات نظر  */}
          <div>
            {/* تاریخ */}
            <span className="text-xs text-[#525252]">{answer.createdAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
