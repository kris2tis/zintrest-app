"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()

  const submitSearch = (e) => {
    e.preventDefault()
    const searchValue = e.target.search.value

    const newSearchParams = new URLSearchParams(searchParams);
    if (searchValue) {
      
      newSearchParams.set("search" , searchValue)
    }else{
      newSearchParams.delete("search")
    }

    router.push(`${pathName}?${newSearchParams}`);
  };
  return (
    <form onSubmit={submitSearch}>
      <div className="py-2 px-5 rounded-full border border-[#d5d5d5]">
        <input
        autoComplete="off"
          placeholder="جستجو در میان دریای عکس ها ..."
          type="text"
          name="search"
          className="w-full text-normal "
        />
      </div>
    </form>
  );
}
