import ProductList from "./ProductList";
import NotFound from "./not-found";

import { Suspense } from "react";

export default async function RelatedPost({ relatedPost }) {
  return (
    <div className="container flex flex-col gap-y-5 py-5">
      <h3 className="font-medium">پست های مشابه</h3>
      <Suspense>
        <ProductList posts={relatedPost} />
      </Suspense>
    </div>
  );
}
