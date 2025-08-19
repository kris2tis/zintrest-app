import { http } from "./httpService";

export async function createCommentApi(data , option) {
  return await http.post("/comment/add", data , option).then(({ data }) => data.data);
}

export async function getAllComment( option) {
  return await http.get("/comment/list" , option).then(({ data }) => data.data);
}