import { getCategoriesApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: "categories",
    queryFn: getCategoriesApi,
  });
  const { categories: rawCategories = [] } = data || {};
  const categories =  rawCategories.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  return {isLoading , categories}
}

export default useCategories;
