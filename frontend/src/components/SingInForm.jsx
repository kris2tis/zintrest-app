"use client";

import { useForm } from "react-hook-form";
import { useAuth } from "context/AuthContext";

import Button from "ui/button";
import RHFTextField from "ui/RHFTextField";
import SwitchingAuthentication from "./SwitchingAuthentication";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const signinSchema = yup
  .object({
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup
      .string()
      .min(8, "رمز عبور حداقل باید 8 کارکتر باشد")
      .max(30, "رمز عبور حداقل باید 30 کاراکتر باشد")
      .required("رمز عبور الزامی است"),
  })
  .required();

export default function SingInForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signinSchema) , mode:"onBlur" });

  const { signin } = useAuth();
  const onSubmit = async (values) => {
    await signin(values);
  };
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center gap-y-6">
        <h1 className="text-2xl font-bold">ورود</h1>
        <div className="flex flex-col gap-y-3 w-full">
          <RHFTextField
            label={"ایمیل"}
            required
            name={"email"}
            register={register}
            errors={errors}
          />
          <RHFTextField
            label={"رمز عبور"}
            required
            name={"password"}
            register={register}
            errors={errors}
          />
        </div>

        <SwitchingAuthentication
          mainText={"حساب کاربری ندارید ؟"}
          linkText={"ساخت اکانت"}
          url={"/signup"}
        />
      </div>
      <Button className={"mt-8 w-full py-3"} variant="outline">
        ورود
      </Button>
    </form>
  );
}
