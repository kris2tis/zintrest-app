import { cookies } from "next/headers";
import { getAllPosts, getAllusers } from "@/services/services";
import { setCookiesToRequest } from "@/utils/setCookiesToRequest";
import { getAllComment } from "@/services/commentService";

export default async function dashboardData() {
  const cookiesStore = await cookies();
  const option = setCookiesToRequest(cookiesStore);

  try {
    const [comments, posts, users] = await Promise.all([
      await getAllComment(),
      await getAllPosts(),
      await getAllusers(option),
    ]);

    const commentsCount = comments.commentsCount 
    const postsCount = posts.length !=undefined ? posts.length : "0"
    const usersCount = users.length !=undefined ? users.length : "0"

    return { commentsCount, postsCount, usersCount };
  } catch (error) {
    console.error(error)
  }
}
