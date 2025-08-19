"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import {
  getUserAPi,
  logOutApi,
  signinApi,
  signupApi,
} from "services/authService";

export const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "signin":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case "signup":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout":
      return {
        isLoading: false,
        isAuthenticated: false,
      };
    case "user/loaded":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    default:
      throw new Error("cant find this action type");
  }
};

export default function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isLoading }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  const router = useRouter();

  async function signin(values) {
    dispatch({ type: "loading" });
    try {
      const { message, user } = await signinApi(values);

      dispatch({ type: "signin", payload: user });
      toast.success(message, {
        duration: 4000,
      });

      router.push("/");
    } catch (error) {
      console.log(error);
      const errorMessage = error.response.data?.message;
      dispatch({
        type: "rejected",
        payload: errorMessage,
      });

      toast.error(errorMessage, {
        duration: 5000,
      });
    }
  }

  async function signup(values) {
    dispatch({ type: "loading" });
    try {
      const { message, user } = await signupApi(values);

      dispatch({ type: "signup", payload: user });

      toast.success(message, {
        duration: 5000,
      });
      router.push("/");
    } catch (error) {
      const errorMessage = error.response.data?.message;

      dispatch({ type: "rejected", payload: errorMessage });

      toast.error(errorMessage, {
        duration: 5000,
        style: { color: "#ff4757" },
      });
    }
  }

  async function logOut() {
    dispatch({ type: "loading" });
    try {
      await logOutApi();
      dispatch({ type: "logout" });
      router.push("/");
      return { message: "از حساب خارج شدید" };
    } catch (error) {
      return { message: "مشکلی پیش آمده است" };
    }
  }

  async function getUser() {
    dispatch({ type: "loading" });
    try {
      const { user } = await getUserAPi();

      dispatch({ type: "user/loaded", payload: user });
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMessage });

      return errorMessage;
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getUser();
    }

    fetchData();
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, signin, signup, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context) {
    return context;
  } else throw new Error("مشکلی پیش آمده است");
}
