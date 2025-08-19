import Carousel from "@/components/Carousel";
import CarouselCard from "@/components/CarouselCard";
import { likedPosts } from "@/services/postServices";
import Img from "@/ui/img";

import Link from "next/link";

export default async function Bokmarks({ bookMarks }) {
  const posts = await likedPosts(bookMarks);

  return posts.length ? (
    <div>
      <h4 className="text-heading">پست های ذخیره شده</h4>

      <Carousel className="mt-3">
        {posts.map((bookmarkPost) => (
          <CarouselCard key={bookmarkPost.id}>
            <Link href={`/post/${bookmarkPost.id}`}>
              <div className="flex flex-col gap-y-3">
                <Img
                  sourse={bookmarkPost.coverImageUrl}
                  containerClassName="w-[200px] h-50"
                  imageClassName={"rounded-md"}
                />
                <div>
                   <p className="text-subcontent">{bookmarkPost?.author?.name}</p>
                  <p className="text-normal !font-medium mt-1">{bookmarkPost?.title}</p>
                </div>
              </div>
            </Link>
          </CarouselCard>
        ))}
      </Carousel>
    </div>
  ) : (
    <span>پستی ذخیره نشده است</span>
  );
}
