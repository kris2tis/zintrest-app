"use client";
import { usePathname } from "next/navigation";
import Button from "ui/button";

export default function CategoryButton({ title, slug }) {
  const pathname = usePathname();

  return (
    <Button
      className={`${pathname.includes(slug) ? "!bg-primary-900" : ""} bg-primary-900 w-25 lg:w-max cursor-pointer px-2 py-2 rounded-md `}
    >
      <h1 className="text-secondary-900">{title}</h1>
    </Button>
  );
}
