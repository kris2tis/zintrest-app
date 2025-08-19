import { cookies } from "next/headers";

import { getUserAPi } from "@/services/authService";
import { setCookiesToRequest } from "@/utils/setCookiesToRequest";

import { InboxIcon } from "@heroicons/react/24/solid";

import Avatar from "@/ui/Avatar";
import Likes from "./_components/likes";
import { Suspense } from "react";
import Loading from "@/ui/Loading";
import Bokmarks from "./_components/Bokmarks";

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const option = setCookiesToRequest(cookieStore);
  const { user } = await getUserAPi(option);

  return (
    <div className="flex flex-col gap-y-3">
      <div>
        <div className="bg-black w-full h-45 lg:hidden"></div>
        {/* User Profile */}
        <div className="flex flex-col -mt-12 px-3 lg:bg-black lg:mt-0 lg:items-start justify-center lg:py-8" >
          <div className="flex flex-col gap-y-3 items-center lg:flex-row lg:gap-x-8">
            {/* Avatar */}
            <Avatar
              className={"w-20 h-20 lg:w-40 lg:h-40"}
              spanClassName="!text-2xl"
              user={user}
            />
            {/* User info  */}
            <div className="text-center">
              <InfoUser fullname={user?.name} userName={user?.name} />
            </div>
          </div>
          {/* User on Socialmedia */}
          <div className="flex flex-col gap-y-3 lg:hidden">
            <p className="text-normal">ارتباطات</p>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center gap-x-2">
                <SocialUser
                  userName={user?.email}
                  icon={<InboxIcon className="size-6 fill-secondary-100/40" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Posts Liked By User */}
      <div className="px-3 flex flex-col gap-y-3">
        <Suspense fallback={<Loading />}>
          <Likes LikesPosts={user.likedPosts} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Bokmarks bookMarks={user.bookmarkedPosts} />
        </Suspense>
      </div>
    </div>
  );
}

function InfoUser({ fullname, userName }) {
  return (
    <>
      <span className="text-subcontent  text-secondary-100/40 lg:text-secondary-900">{userName}</span>
      <h5 className="font-semibold text-2xl lg:text-secondary-900">{fullname}</h5>
    </>
  );
}

function SocialUser({ userName, icon }) {
  return (
    <>
      {icon}
      <span className="text-secondary-100/40 text-normal">{userName}</span>
    </>
  );
}
