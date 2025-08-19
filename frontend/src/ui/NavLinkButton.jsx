"use client"

import { usePathname } from "next/navigation";
import LinkPage from "./link";

export default function NavLinkButton({ slug,className="" , solidIcon ,outlineIcon , name}) {
  const pathName = usePathname()
 
  return (
    <LinkPage className={`${className} flex justify-center`} href={`${slug}/`}>
      <div className="flex-column gap-y-2 hover:bg-[#fcffde] w-max px-2 py-2 rounded-full  active:scale-90 transition-all duration-200">
          {pathName === slug ? outlineIcon :solidIcon}
          <span className="text-xs text-[#555555]  lg:hidden">{name}</span>
      </div>
    </LinkPage>
  );
}
