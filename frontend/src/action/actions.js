"use server";

import { deleteApi } from "@/services/postServices";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { createCommentApi } from "services/commentService";
import { setCookiesToRequest } from "utils/setCookiesToRequest";

export async function createComment(prevState, { formData, parentId, postId }) {
  const commentFields = {
    postId: postId,
    parentId: parentId || null,
    text: formData.get("commentContent"),
  };

  const cookiesStore = await cookies();
  const option = setCookiesToRequest(cookiesStore);

  try {
    const { message } = await createCommentApi(commentFields, option);
    revalidatePath(`blogs/${postId}`);

    return { message };
  } catch (err) {
    const errorMessage = err?.response?.data?.message;

    return { errorMessage };
  }
}

export async function deletePost(prevState , {formData , postId}) {
  const cookiesStore = await cookies();
  const option = setCookiesToRequest(cookiesStore);
  try {
    const { message } = await deleteApi(postId, option);
    revalidatePath("/profile/posts")

    return { message };

  } catch (error) {
    const errorMessage = error?.response?.data?.message;

    return { errorMessage };
  }
}
