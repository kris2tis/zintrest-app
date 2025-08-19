import React from "react";
import LinkPage from "./link";

export default function DashboardNavItem({
  slug,
  name,
  containerClassName = "",
  icon,
  onClick
}) {
  return slug ? (
    <LinkPage className="w-full" href={`${slug}`}>
      <div
        className={` ${containerClassName} flex w-full items-center gap-x-3 text-secondary-900 hover:text-primary-900 transition-all duration-500`}
      >
        {icon}
        <span>{name}</span>
      </div>
    </LinkPage>
  ) : (
    <div
      className={` ${containerClassName} flex w-full items-center gap-x-3 text-secondary-900 hover:text-primary-900 transition-all duration-500`}
      onClick={onClick}
    >
      {icon}
      <span>{name}</span>
    </div>
  );
}
