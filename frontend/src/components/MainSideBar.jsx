import MainNav from "./MainNav";

export default function MainSideBar() {
  return (
    <div className=" sticky top-0">
      <div className="border-r border-[#e1e1e1] h-screen">
        <div className="flex flex-col gap-y-9 items-center justify-center pt-5 ">
          <MainNav />
        </div>
      </div>
    </div>
  );
}
