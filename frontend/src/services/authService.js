import { http } from "./httpService";

export const signupApi = async (data) => {
  return await http.post("/user/signup", data).then(({ data }) => data.data);
};

export const signinApi = async (data) => {
  return await http.post("/user/signin", data).then(({ data }) => data.data);
};

export const getUserAPi = async (option) => {
  return await http.get("/user/profile" , option).then(({ data }) => data.data);
};

export const logOutApi = async () => {
  return await http.post("/user/logout").then(({ data }) => data.data);
};

export const getAllUsers = async (option) => {
  return await http.get("/user/list", option).then(({ data }) => data.data);
};
