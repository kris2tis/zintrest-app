import { useCategoryies } from "services/services";

import LinkPage from "ui/link";
import CategoryButton from "./CategoryButton";

export default async function CategoryList({containerClassName}) {
  const {
    data: { categories },
  } = await useCategoryies();
  
  return (
    <div className={`${containerClassName} flex-row text-normal !justify-start lg:!justify-center gap-x-3 overflow-y-scroll lg:overflow-y-hidden hide-scrollbar`}>
      {categories.map((category) => (
        <LinkPage key={category._id} href={`/category/${category.slug}`}>
          <CategoryButton title={category.title} slug={category.slug} />
        </LinkPage>
      ))}
    </div>
  );
}
