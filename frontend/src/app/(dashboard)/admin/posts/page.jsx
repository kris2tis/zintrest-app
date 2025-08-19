export const metadata = {
  title: "پست ها",
  description: "مدریت پست های سایت",
};

import { Suspense } from "react";

import Loading from "ui/Loading";
import TablePosts from "app/(dashboard)/_component/TablePosts";

import PostHeader from "@/components/PostHeader";

export default async function page({ searchParams }) {
  // گرفتن کوعری پارمتر جستجو
  const { search, page } = await searchParams;
  // تطبیق کوعری سرچ با سورت
  const queris = search
    ? `?search=${search}&sort=asc&page=${page}`
    : `?page=${page}&sort=asc`;

  return (
    <div className="flex flex-col gap-y-5 py-5 h-screen !lg:h-full">
      <PostHeader />

      <Suspense fallback={<Loading />} key={queris}>
        <TablePosts queris={queris} />
      </Suspense>
    </div>
  );
}
