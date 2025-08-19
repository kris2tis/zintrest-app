import React from "react";
import Img from "ui/img";

export default function  CommenDetails({_id , user, content, createdAt , openToComment , open}) {
  return (
    <div className="flex flex-col gap-y-2">
        {/* اطلاعات , نظر کاربر */}
      <div className="flex gap-x-1.5">
        <div>
          <Img
            sourse={user?.avatarUrl}
            containerClassName={"w-4 h-4"}
            imageClassName={"rounded-full"}
          />
        </div>

        <div className="flex flex-col gap-y-1 ">
          <div className="flex gap-x-2">
            <h3 className="text-subcontent !font-medium">{user.name}</h3>
            <p className="text-subcontent text-[#525252]">{content.text}</p>
          </div>
        </div>
      </div>
      {/* اطلاعات نظر  */}
      <div className="flex gap-x-2">
        {/* تاریخ */}
        <span className="text-xs text-[#525252]">{createdAt}</span>
        {openToComment && (<span onClick={() => open(_id , user)} className="text-xs text-[#525252] cursor-pointer">پاسخ</span>)}
        </div>
    </div>
  );
}
