import LinkPage from "@/ui/link";
import Search from "./Search";
import { CreatePost } from "app/(dashboard)/_component/PostalOprations";
import { Suspense } from "react";
import Loading from "@/ui/Loading";

export default function PostHeader() {
  return (
    <div className="flex justify-between items-center">
      <h3 className="hidden lg:block font-bold text-sm md:text-md lg:text-2xl text-secondary-100">
        لیست پست ها
      </h3>
      <Suspense fallback={<Loading />}>
        <Search />
      </Suspense>
      <CreatePost>
        <LinkPage href="/admin/posts/create" className={"text-normal"} >ساخت پست</LinkPage>
      </CreatePost>
    </div>
  );
}
