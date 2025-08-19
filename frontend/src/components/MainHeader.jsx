"use client";

import Button from "ui/button";
import Search from "./Search";
import LinkPage from "ui/link";
import { useAuth } from "@/context/AuthContext";
import { Suspense } from "react";
import Loading from "@/ui/Loading";

export default function MainHeader() {
  const { isAuthenticated } = useAuth();
  return (
    <header className="hidden lg:block sticky top-0 z-10 bg-white">
      <div className="grid grid-cols-12 gap-x-2 py-4 px-4">
        {/* بخش  سمت راست هدر */}
        <div className="flex items-center gap-x-2 col-span-1">
          {isAuthenticated ? (
            <LinkPage className={"w-full"} href="/profile">
              <Button className="py-2 px-3 rounded-xl w-full">پروفایل</Button>
            </LinkPage>
          ) : (
            <LinkPage className={"w-full"} href="/signin">
              <Button className="!bg-blue-600 py-2 px-3 rounded-xl w-full">
                ورود
              </Button>
            </LinkPage>
          )}
        </div>
        {/*  بخش وسط (سرچ) */}
        <div className="col-span-11">
          <Suspense fallback={<Loading />}>
            <Search />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
