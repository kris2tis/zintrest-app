import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12 w-full h-screen">
      {/* ساید بار */}
      <div className="hidden lg:block col-span-0 lg:col-span-2">
        <DashboardSidebar />
      </div>
      {/* هدر و محتوا */}
      <div className="col-span-12 lg:col-span-10 bg-secondary-900">
        <div className="flex flex-col">
          <DashboardHeader />
          <div className="h-full">
            <div className=" w-full h-full rounded-[0px_10px_0px_0px_] px-5 py-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
