import SignUpForm from "@/components/SignUpForm";

export const metadata = {
  title:"ثبت نام",
  description:"صفحه ثبت نام در فضایی جدید از اینترنت"
}

export default function SignUp() {
    return (
        <div className="px-5 sm:max-w-[450px] h-screen flex items-center mx-auto">
            <SignUpForm />
        </div>
    );
}