import { useProduct } from "@/services/services";
import CreatePostForm from "../_/CreatePostForm";

export async function generateMetadata({ params }) {
  const { PostSlug } = await params;
  const {
    data: { post },
  } = await useProduct(PostSlug);

  return {
    title: `پست ${post.title}`,
    description: post.briefText,
  };
}

export default async function EditPage({ params }) {
  const { PostSlug } = await params;

  const {
    data: { post },
  } = await useProduct(PostSlug);
  return <CreatePostForm editing={post} />;
}
