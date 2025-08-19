import {
  UsersIcon,
  ClipboardDocumentListIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";

const iconType ={
  users : UsersIcon,
  posts : ClipboardDocumentListIcon,
  comments:ChatBubbleBottomCenterIcon
}

export default function Count({ type, name, count }) {
    const Icon = iconType[type]
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-secondary-100/100 p-4 rounded-md md:rounded-lg lg:rounded-2xl ">
      <div className="flex items-center gap-x-3 text-[#d0d0d0]">
        <Icon className="size-4" />
        <span className="text-normal">{name}</span>
      </div>
      <div className="flex-row p-6 mt-5 border-t-[1px] border-secondary-900">
        <h3 className="text-secondary-900 text-heading">{count}</h3>
      </div>
    </div>
  );
}
