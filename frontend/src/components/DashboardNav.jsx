"use client";

import {
  DocumentMinusIcon,
  TableCellsIcon,
  ChatBubbleLeftIcon,
  UsersIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

import DashboardNavItem from "ui/DashboardNavItem";
import Modal from "./Modal";
import { useState } from "react";
import Button from "@/ui/button";
import { useAuth } from "@/context/AuthContext";
const dashboardNavLinks = [
  {
    id: 1,
    slug: "/admin",
    name: "داشبورد",
    icon: <TableCellsIcon className="size-6" />,
  },
  {
    id: 2,
    slug: "/admin/posts",
    name: "پست ها",
    icon: <DocumentMinusIcon className="size-6" />,
  },
  {
    id: 3,
    slug: "/admin/comments/",
    name: "کامنت ها",
    icon: <ChatBubbleLeftIcon className="size-6" />,
  },
  {
    id: 4,
    slug: "/admin/users/",
    name: "کاربران",
    icon: <UsersIcon className="size-6" />,
  },
];
export default function DashboardNav() {
  return (
    <>
      {dashboardNavLinks.map((DNL) => (
        <DashboardNavItem key={DNL.id} {...DNL} />
      ))}
      <Logout />
    </>
  );
}

function Logout() {
  const [open, setOpen] = useState(false);
  const { logOut } = useAuth();

  const onClose = () => setOpen(false);
  return (
    <>
      <DashboardNavItem
       containerClassName="cursor-pointer"
        name={"خروج از حساب"}
        icon={<ArrowLeftEndOnRectangleIcon className="size-6" />}
        onClick={() => setOpen(true)}
      />
      <Modal
        title="آیا میخواهید از حساب خود خارج شوید ؟"
        desceription=""
        onClose={onClose}
        open={open}
      >
        <div className="w-full flex justify-between py-3">
          <Button onClick={() => logOut()}>بله</Button>
          <Button onClick={onClose} variant="primary">
            نه نمیخوام
          </Button>
        </div>
      </Modal>
    </>
  );
}
