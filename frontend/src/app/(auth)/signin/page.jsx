import SingInForm from '@/components/SingInForm'

export const metadata = {
  title:"ورود به سایت",
  description:"صفحه ورود به فضایی جدید از اینترنت"
}

export default function SignInPage() {
  return (
      <div className='container sm:max-w-[450px] flex h-screen items-center'>
      <SingInForm />
    </div>
  )
}
