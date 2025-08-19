import BottomNavigationBar from "@/components/BottomNavigationBar";
import MainHeader from "@/components/MainHeader";
import MainSideBar from "@/components/MainSideBar";
import { Toaster } from "react-hot-toast";

export default function HomeLayout({ children }) {
  return (
    <div className="grid grid-cols-12">
      {/* بخش محتوا و هدر */}
      <div className="col-span-12 lg:col-span-11">
        <MainHeader />
        <main className="flex flex-col gap-y-4 px-2 py-2 lg:px-4">
    
          {children}
          <BottomNavigationBar />
        </main>
      </div>
      {/* ساید بار */}
      <div className="hidden lg:block col-span-1">
        <MainSideBar />
      </div>
      <Toaster />
    </div>
  );
}
