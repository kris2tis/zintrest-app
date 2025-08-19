import Search from "@/components/Search";
import React, { Suspense } from "react";
import Loading from "@/ui/Loading";
import ProductList from "@/components/ProductList";
import { useProducts } from "@/services/services";
import CategoryList from "@/ui/CategoryList";

export default async function SearchPage({ searchParams }) {
  const { search } = await searchParams;
  const queries = search ? `?search=${search}&sort=asc` : "";
  const {
    data: { posts },
  } = await useProducts(queries);

  return (
    <div className="flex flex-col gap-y-6">
      <Suspense fallback={<Loading />}>
        <Search />
      </Suspense>
      <CategoryList />
      <Suspense fallback={<Loading />}>
        <ProductList posts={posts} />
      </Suspense>
    </div>
  );
}
