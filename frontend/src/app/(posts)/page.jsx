import { Suspense } from "react";
import ProductList from "../../components/ProductList";

import { useProducts } from "services/services";
import NotFound from "@/components/not-found";
import CategoryList from "@/ui/CategoryList";

export const metadata = {
  title: "یافتن کمیاب ترین عکس ها تاریخ",
  description: "",  
};

export default async function Home({ searchParams }) {
  const { search } = await searchParams;
  const queryParams = search ? `?search=${search}` : "";

  const {
    data: { posts },
  } = await useProducts(queryParams);

  return (
    <Suspense fallback={<NotFound />}>
      <CategoryList />
      <ProductList posts={posts} />
    </Suspense>
  );
}
