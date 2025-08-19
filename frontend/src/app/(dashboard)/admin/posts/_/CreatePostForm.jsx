"use client";

import useCategories from "@/hooks/useCategories";

import Button from "@/ui/button";
import RHFTextField from "@/ui/RHFTextField";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import RHFSelect from "@/ui/RHFSelect";
import { useEffect, useState } from "react";

import Img from "@/ui/img";
import { XMarkIcon } from "@heroicons/react/24/solid";
import DropZoneFile from "@/ui/DropZoneFile";
import { usePathname, useRouter } from "next/navigation";
import useCreatePost from "@/hooks/useCreatePost";
import { useEditPost } from "@/hooks/useEditPost";
import { convertImgeUrltoFilename } from "@/utils/convertImgeUrltoFile";

const schema = yup
  .object({
    title: yup.string().required("پر کردن این فیلد ضروری است"),
    category: yup.string().required("پر کردن این فیلد ضروری است"),
    briefText: yup.string(),
    slug: yup.string().required("پر کردن این فیلد ضروری است"),
    text: yup.string().required("پر کردن این فیلد ضروری است"),
    readingTime: yup
      .number("این فیلد باید عدد باشد")
      .integer()
      .min(1, "حداقل باید 1 دقیقه باشد")
      .required("پر کردن این فیلد ضروری است")
      .typeError("لطفا یک عدد را تایپ کنید"),
  })
  .required();
export default function CreatePostForm({ editing = {} }) {
  const {
    _id: postId,
    title,
    coverImage,
    coverImageUrl: prevCoverImage,
    briefText,
    text,
    slug: postSlog,
    category,
    readingTime,
  } = editing;

  //   کاربر درحال ویرایش پست است یا درحال ساخت پست
  const pathname = usePathname();
  let isEditing = !pathname.includes("create");

  let editValues = {};

  if (isEditing) {
    editValues = {
      postId: postId,
      title,
      coverImage,
      briefText,
      slug: postSlog,
      text,
      category: category?._id,
      readingTime,
    };
  }

  // تبدیل آدرس عکس به فایل
  useEffect(() => {
    if (isEditing) {
      async function fileFormat() {
        const formatFile = await convertImgeUrltoFilename(prevCoverImage);
        setValue("coverImage", formatFile);
      }

      fileFormat();
    }
  }, []);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: editValues,
  });

  const [coverImageUrl, setCoverImageUrl] = useState(prevCoverImage || null);
  const { createPost, isCreating } = useCreatePost();
  const { editPost, isPending } = useEditPost();

  const { categories, isLoading: categoriesLoading } = useCategories();

  const router = useRouter();

  const onSubmit = async (value) => {
    const formData = new FormData();

    for (const key in value) {
      formData.append(key, value[key]);
    }

    if (isEditing) {
      editPost(
        { id: editValues.postId, data: formData },
        { onSuccess: () => router.push("/admin/posts") }
      );
    } else {
      createPost(formData, { onSuccess: () => router.push("/admin/posts") });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full flex-col gap-y-6 border-1 border-[#afafaf] px-3 py-4 rounded-md bg-white">
        <RHFTextField
          label={"عنوان پست"}
          name={"title"}
          register={register}
          errors={errors}
          required
          inputClassName={"!py-1 !border-[#fff]"}
        />
        <RHFSelect
          label={"دسته بندی"}
          name={"category"}
          options={categories}
          register={register}
          errors={errors}
          required
        />
        <RHFTextField
          label={"متن کوتاه"}
          name={"briefText"}
          register={register}
          errors={errors}
          inputClassName={"!py-1"}
        />
        <RHFTextField
          label={"اسلاگ"}
          name={"slug"}
          register={register}
          errors={errors}
          required
          inputClassName={"!py-1"}
        />
        <RHFTextField
          label={"محتوا"}
          name={"text"}
          register={register}
          errors={errors}
          required
          inputClassName={"!py-1"}
        />
        <RHFTextField
          label={"مدت زمان خواندن"}
          name={"readingTime"}
          register={register}
          errors={errors}
          required
          inputClassName={"!py-1"}
        />
        <Controller
          name="coverImage"
          control={control}
          rules={{ required: "کاور عکس ضروری است" }}
          render={({ field: { onChange, value } }) => (
            <DropZoneFile
              name={"coverImage"}
              errors={errors}
              value={value?.fileName}
              onChange={(e) => {
                const file = e.target.files[0];
                setCoverImageUrl(URL.createObjectURL(file));

                onChange(file);
              }}
            />
          )}
        />
        {coverImageUrl && (
          <Img
            containerClassName={
              "aspect-2/2 flex-row bg-gray-300 rounded-lg overflow-hidden"
            }
            alt="cover Image"
            imageClassName={"!object-cover "}
            sourse={coverImageUrl}
          >
            <XMarkIcon
              onClick={() => {
                setCoverImageUrl(null);
                setValue("coverImage", null);
              }}
              className={
                "fill-white absolute top-1 right-1 size-5 bg-primary-900 rounded-md"
              }
            />
          </Img>
        )}
        {isEditing ? (
          <Button
            type="submit"
            className={`${isPending ? "blur-sm" : ""}mt-3 w-full mb-2`}
          >
            بروزرسانی پست
          </Button>
        ) : (
          <Button
            type="submit"
            className={`${isCreating ? "blur-sm" : ""}mt-3 w-full mb-2`}
          >
            ساخت پست جدید
          </Button>
        )}
      </div>
    </form>
  );
}
