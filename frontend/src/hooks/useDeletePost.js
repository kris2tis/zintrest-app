import { deleteApi } from "@/services/postServices";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeletePost() {
  const { mutate: deletePost, isPending } = useMutation({
    mutationFn: deleteApi,
    onSuccess: (data) => {
      toast.success(data.message)
  
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return { deletePost, isPending };
}
