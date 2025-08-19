import Pagination from "@/components/Pagination";
import { useProducts } from "@/services/services";
import LinkPage from "@/ui/link";
import TrPost from "ui/TrPost";
import { DeletePost, EditPost } from "./PostalOprations";

export default async function TablePosts({ queris }) {
  const { data } = await useProducts(queris);
  return (
    <div className="h-max">
      <div className="overflow-y-scroll lg:overflow-y-hidden hide-scrollbar">
        {data?.posts.length ? (
          <table className="min-w-[640px]">
            <thead>
              <tr className="text-sm lg:text-md">
                {[
                  "#",
                  "عنوان",
                  "دسته بندی",
                  "نویسنده",
                  "تاریخ ",
                  "عملیات",
                ].map((tableHead, index) => (
                  <th key={index + 1}>{tableHead}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.posts.map((post, index) => (
                <tr className="text-subcontent text-secondary-900" key={post._id}>
                  <TrPost {...post} index={index + 1} />
                  <td>
                    <div className="flex gap-x-2 justify-center">
                      <LinkPage href={`/admin/posts/${post._id}`}>
                        <EditPost id={post._id} />
                      </LinkPage>
                      <DeletePost id={post._id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="mt-10">
            <span className="text-bold">پستی یافت نشد !</span>
          </div>
        )}
      </div>

      <Pagination pageCount={data?.totalPages} />
    </div>
  );
}
