"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";


import Button from "ui/button";
import RHFTextField from "ui/RHFTextField";

import SwitchingAuthentication from "./SwitchingAuthentication";
import { useAuth } from "context/AuthContext";

const schema = yup
    .object({
        name: yup
            .string()
            .min(5, "تعداد کاراکتر باید بیشتر از 5 تا باشه")
            .max(30, "تعداد کاراکتر ها باید کمتر از 30 تا باشه")
            .required("نام و نام خانوادگی الزامی است"),
        email: yup
            .string()
            .email("ایمیل نامعتبر است")
            .required("ایمیل الزامی است"),
        password: yup
            .string()
            .min(8, "رمز عبور حداقل باید 8 کارکتر باشد")
            .max(30, "رمز عبور حداقل باید 30 کاراکتر باشد")
            .required("رمز عبور الزامی است"),
    })
    .required();

export default function SignUpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const { signup } = useAuth();
    const submit = async (values) => {
        signup(values);
    };
    return (
        <form className="w-full" onSubmit={handleSubmit(submit)}>
            <div className="flex flex-col justify-center gap-y-6">
                <h1 className="text-2xl font-bold">ثبت نام</h1>
                <div className="flex flex-col gap-y-3 w-full">
                    <RHFTextField
                        label={"نام و نام خانوادگی"}
                        required
                        name={"name"}
                        register={register}
                        errors={errors}
                    />
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
                    mainText={"حساب کاربری دارید ؟"}
                    linkText={"وارد شوید"}
                    url={"/signin"}
                />
            </div>
            <Button className={"mt-8 w-full"} variant="outline">
                ثبت نام
            </Button>
        </form>
    );
}
