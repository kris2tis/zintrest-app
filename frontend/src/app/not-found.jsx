import LinkPage from "ui/link";

export default function NotFound() {
  return (
      <div className="flex-row h-screen" >
          <div className="flex flex-col gap-y-3">
            <h1 className="font-bold text-2xl">صفحه ای که دنبالش بودی پیدا نشد !</h1>
            <LinkPage href="/" className="text-primary-900">
                برگشت به خانه
            </LinkPage>    
          </div>
      </div>
  );
}
