// Outline Icon
import {
  BellAlertIcon,
  ChatBubbleBottomCenterIcon,
  PlusIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

// Solid Icon

import {
  BellAlertIcon as BellAlertIconOutline,
  ChatBubbleBottomCenterIcon as ChatBubbleBottomCenterIconOutline,
  PlusIcon as PlusIconOutline,
  HomeIcon as HomeIconOutline,
  MagnifyingGlassIcon as MagnifyingGlassIconOutline,
  UserGroupIcon as UserGroupIconOutline,
} from "@heroicons/react/24/solid";

import NavLinkButton from "ui/NavLinkButton";

const links = [
  {
    id: 1,
    slug: "/",
    name: "خانه",
    solidIcon: <HomeIcon className="size-6" />,
    outlineIcon: <HomeIconOutline className="size-6" />,
  },
  {
    id: 2,
    slug: "/search",
    name: "جستجو",
    className: "lg:hidden",
    solidIcon: <MagnifyingGlassIcon className="size-6" />,
    outlineIcon: <MagnifyingGlassIconOutline className="size-6" />,
  },
  {
    id: 3,
    slug: "/profile/posts/create",
    name: "ایجاد",
    className: "hidden lg:block",
    solidIcon: <PlusIcon className="size-6 " />,
    outlineIcon: <PlusIconOutline className="size-6" />,
  },
  {
    id: 4,
    slug: "/profile/posts/update",
    name: "بروزرسانی",
    className: "hidden lg:block",
    solidIcon: <BellAlertIcon className="size-6" />,
    outlineIcon: <ChatBubbleBottomCenterIconOutline className="size-6" />,
  },
  {
    id: 5,
    slug: "/profile/comments",
    name: "پیغام ",
    solidIcon: <ChatBubbleBottomCenterIcon className="size-6" />,
    outlineIcon: <BellAlertIconOutline className="size-6" />,
  },
  {
    id: 6,
    slug: "/profile",
    name: "حساب",
    className: "lg:hidden",
    solidIcon: <UserIcon className="size-6" />,
    outlineIcon: <UserGroupIconOutline className="size-6" />,
  },
];

export default function MainNav() {
  return links.map((link) => (
    <NavLinkButton className={link.className} key={link.id} {...link} />
  ));
}
