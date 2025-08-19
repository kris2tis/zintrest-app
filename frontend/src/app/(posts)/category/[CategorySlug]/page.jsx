import ProductList from "@/components/ProductList";
import CategoryList from "@/ui/CategoryList";
import queryString from "query-string";
import React from "react";
import { useCategory } from "services/services";

export default async function Category({ params, searchParams }) {
  const search  = await searchParams;

  // گرفتن اسلاگ دسته بندی
  const { CategorySlug } = await params;

  const queries = `${queryString.stringify(search)}${search.search?"&?":""}categorySlug=${CategorySlug}`
  
  const {
    data: { posts },
  } = await useCategory(queries);
  
  return (
    <div className="flex flex-col gap-y-3">
      <CategoryList />
      <ProductList posts={posts}/>
    </div>
  );
}
