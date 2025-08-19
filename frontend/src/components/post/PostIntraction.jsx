// icons
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import {
  ChatBubbleBottomCenterIcon as ChatBubbleBottomCenterIconOutline,
  HeartIcon as HeartIconOutline,
} from "@heroicons/react/24/outline";
// ui component
import Button from "ui/button";
import toast from "react-hot-toast";

import { bookmarkApi, likeApi } from "services/postServices";

import { useRouter } from "next/navigation";

export default function PostIntraction({
  likesCount,
  commentsCount,
  isLiked,
  isBookmarked,
  id,
}) {
  const router = useRouter();
  const likeHandler = async () => {
    try {
      router.refresh();

      const { message } = await likeApi(id);
      toast.success(message, {
        duration: 5000,
      });
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage, {
        duration: 5000,
      });
    }
  };

  const bookmarkHandler = async () => {
    try {
      router.refresh();
      const { message } = await bookmarkApi(id);
      toast.success(message, {
        duration: 5000,
      });
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage, {
        duration: 5000,
      });
    }
  };
  return (
    <div className="flex-row !justify-between">
      <div className="flex items-center gap-x-5">
        {/* Like */}
        <div onClick={likeHandler} className="flex items-center gap-x-1">
          {isLiked ? (
            <HeartIconSolid className="size-6 text-secondary-100" />
          ) : (
            <HeartIconOutline className="size-6 text-secondary-100" />
          )}
          <span className="font-bold text-xs">{likesCount}</span>
        </div>
        {/* Comment */}
        <div className="flex items-center gap-x-2">
          <ChatBubbleBottomCenterIconOutline className="size-6 text-secondary-100" />
          <span className="font-bold text-sm">{commentsCount}</span>
        </div>
      </div>
      {/* Save */}
      <div onClick={bookmarkHandler} className="flex items-center gap-x-2">
        <Button
          className="py-4 rounded-2xl text-sm font-bold md:text-md lg:text-lg"
          variant={`${isBookmarked ? "secondary" : "primary"}`}
        >
          {isBookmarked ? "ذخیره شده" : "ذخیره سازی"}
        </Button>
      </div>
    </div>
  );
}
