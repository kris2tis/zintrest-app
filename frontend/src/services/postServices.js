import { http } from "./httpService";

export const likeApi = async (id) => {
  return await http.post(`/post/like/${id}`).then(({ data }) => data.data);
};

export const bookmarkApi = async (id) => {
  return await http.post(`/post/bookmark/${id}`).then(({ data }) => data.data);
};

export const deleteApi = async (id, option) => {
  return await http
    .delete(`/post/remove/${id}`, option)
    .then(({ data }) => data.data);
};

export const createApi = async (value) => {
  return await http.post(`/post/create`, value).then(({ data }) => data.data);
};

export const editPostApi = async ({ id, data }) => {
  return await http
    .patch(`/post/update/${id}`, data)
    .then(({ data }) => data.data);
};

export async function likedPosts(urls) {
  const likes = await Promise.all(
    urls.map(async (url) => {
      const posts = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/${url}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .catch((err) => err?.response?.data?.message);
      return posts?.data?.post || {};
    })
  );

  return likes;
}


