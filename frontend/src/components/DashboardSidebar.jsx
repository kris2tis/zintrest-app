import { BuildingLibraryIcon } from "@heroicons/react/24/solid";

import Divider from "ui/Divider";
import DashboardNav from "./DashboardNav";

export default function DashboardSidebar() {
  return (
    <div className="bg-transparent lg:sticky top-0  lg:bg-secondary-100/100 px-8 py-5 h-screen">
      <div className="flex justify-center items-center text-secondary-900 gap-x-2 mb-3">
        <BuildingLibraryIcon className="size-7" />
        <h3>زینترست</h3>
      </div>
      <Divider />
      <div className="flex-column !items-start w-full gap-y-7  py-5 mt-12">
        <DashboardNav />
      </div>
    </div>
  );
}
