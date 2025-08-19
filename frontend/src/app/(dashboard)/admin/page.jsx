export const metadat = {
  title: "پروفایل",
  description: "صفحه پروفایل سایت زینترست",
};

export const metadata = {
  title: "داشبورد",
  description: "دسترسی و مدیریت حساب کاربری خود در زینترست",
};

import CountPUC from "app/(dashboard)/_component/DashboardData";
import { Suspense } from "react";
import Loading from "ui/Loading";
import TablePosts from "../_component/TablePosts";

export default async function page({ searchParams }) {
  const { page } = await searchParams;
  const queris = `?sort=asc&page=${page}`;

  return (
    <div className="flex flex-col gap-y-4">
      <h3 className="text-heading text-secondary-100 ">
        داشبورد
      </h3>
      <CountPUC />
      <h3 className="text-heading text-secondary-100">
        آخرین پست ها
      </h3>
      <Suspense fallback={<Loading />}>
        <TablePosts queris={queris} />
      </Suspense>
    </div>
  );
}
