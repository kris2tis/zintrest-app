import { http } from "./httpService";

export async function useProducts(queries) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/post/list${queries ? queries : ""}`
    );

    if (!response.ok) throw new Error("faild to fetch data !");

    const products = await response.json();

    if (products.length == 0) undefined;

    return products;
  } catch (error) {
    console.error(error);
  }
}

export async function useProduct(slug) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/post/${slug}`,
   
    );
    if (!response.ok) throw new Error("faild to fetch data !");

    const product = await response.json();
    if (product.length == 0) undefined;
    return product;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllPosts(queries) {
  return http
    .get(`/post/list${queries ? `?${queries}` : ""}`)
    .then(({ data: { data } }) => data.posts);
}

export async function useCategoryies() {
  return http.get("/category/list").then(({ data }) => data);
}

export async function useCategory(queryParams) {
  return http.get(`/post/list?${queryParams}`).then(({ data }) => data);
}

export async function getAllusers(option) {
  return http
    .get("/user/list", option)
    .then(({ data: { data } }) => data.users);
}

export async function useComments() {
  return http.get("/comment/list").then(({ data: { data } }) => data);
}
