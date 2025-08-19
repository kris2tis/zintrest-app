import { editPostApi } from "@/services/postServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useEditPost() {
  const { mutate: editPost, isPending } = useMutation({
    mutationFn: editPostApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return {editPost , isPending}
}
