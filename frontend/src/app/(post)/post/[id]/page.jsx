import React from "react";
// hook fetch data
import { useProduct } from "services/services";
import NotFound from "app/not-found";
// component
import PostDetails from "@/components/post/PostDetails";
import MoveBackUrl from "@/components/post/moveBackUrl";

import { cookies } from "next/headers";

import { setCookiesToRequest } from "utils/setCookiesToRequest";
import RelatedPost from "@/components/RelatedPost";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const {
    data: { post },
  } = await useProduct(id);

  return {
    title: ` پست ${post.title}`,
    description: post.briefText,
  };
}

export default async function PostPage({ params }) {
  const { id } = await params;

  const {
    data: { post },
  } = await useProduct(id);

  return (
    <>
      {post ? (
        <div className="flex flex-col relative lg:static lg:px-5 lg:container">
          <div className="flex flex-col lg:flex-row lg:gap-x-3 py-2 lg:py-4">
            {/* دکمه برگشت */}
            <div className="z-10 fixed right-3 top-3 lg:static h-max lg:w-1/12 lg:h-screen">
              <MoveBackUrl />
            </div>
            {/* عکس , اطلاعات محصول*/}
            <div className="w-full lg:w-7/12 lg:border lg:py-5 lg:px-3 lg:rounded-4xl lg:border-[#bdbdbd]">
              <PostDetails {...post} />
            </div>
          </div>
          {/* محصولات مرتبط */}
          {post.related.length > 0 && (
            <RelatedPost relatedPost={post.related} />
          )}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
