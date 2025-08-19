import React from "react";
import Img from "./img";

export default function Avatar({
  user,
  className = "",
  spanClassName = "",
  ...rest
}) {
  const defaultProfilePic = user?.name.slice(0, 1);

  return user?.avatarUrl ? (
    <Img
      sourse={user?.avatarUrl}
      containerClassName={`${className}`}
      imageClassName={"rounded-full"}
      {...rest}
    />
  ) : (
    <div className={`bg-white w-6 h-6 rounded-full flex-row ${className}`}>
      <span  className={`text-subcontent ${spanClassName}`}>{defaultProfilePic}</span>
    </div>
  );
}
