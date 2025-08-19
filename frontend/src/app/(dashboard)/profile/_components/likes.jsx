import { likedPosts } from "@/services/postServices";

import Carousel from "@/components/Carousel";
import CarouselCard from "@/components/CarouselCard";
import Img from "@/ui/img";
import Link from "next/link";

export default async function Likes({ LikesPosts }) {
  const posts = await likedPosts(LikesPosts);
  return posts.length ? (
    <div>
      <h4 className="text-heading">پست های لایک شده</h4>

      <Carousel className="mt-3">
        {posts.map((likedPost) => (
          <CarouselCard  key={likedPost.id}>
            <Link href={`/post/${likedPost.id}`}>
              <div className="flex flex-col gap-y-3">
                <Img
                  sourse={likedPost.coverImageUrl}
                  containerClassName="w-[200px] h-50"
                  imageClassName={"rounded-md"}
                />
                <div>
                  <p className="text-subcontent">{likedPost?.author?.name}</p>
                  <p className="text-normal !font-medium mt-1">{likedPost?.title}</p>
                </div>
              </div>
            </Link>
          </CarouselCard>
        ))}
      </Carousel>
    </div>
  ) : (
    <span>پستی لایک نشده است</span>
  );
}
