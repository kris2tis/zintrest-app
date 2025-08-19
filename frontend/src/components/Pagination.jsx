"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "ui/button";
import LinkPage from "ui/link";

export default function Pagination({ pageCount }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // ساخت یک آرایه به حداکثر طول پراپس pageCount
  let totalPage = Array.from({ length: pageCount }, (_, i) => i + 1);

  let [showedPages, setShowedPages] = useState([]);
  let currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    // حداقل تعداد صفحه برای ساخت صفحات pagination
    if (totalPage.length >= 3) {
      setShowedPages([
        totalPage[currentPage - 1],
        totalPage[currentPage],
        totalPage[currentPage + 1],
      ]);
    } else {
      setShowedPages(totalPage);
    }
  }, []);

  useEffect(() => {
    // جلوگیری از نمایش صفحات بیشتر از حد
    if (
      currentPage < totalPage[totalPage.length - 1] &&
      currentPage > totalPage[0]
    ) {
      // چک میشه اگر روی اخرین عدد یا اولین عدد از آرایه صفحات نمایش داده شده کلیک شد صفحات بعدی را نمایش دهد
      if (
        currentPage === showedPages[showedPages.length - 1] ||
        currentPage === showedPages[0]
      ) {
        setShowedPages([
          totalPage[currentPage - 2],
          totalPage[currentPage - 1],
          totalPage[currentPage],
        ]);
      }
      return;
    }
    return;
  }, [currentPage]);

  return (
    <div className="flex-row mt-10 gap-x-2">
      <ArrowPagination
        href={`page=${currentPage - 1}`}
        disabled={currentPage == totalPage[0]}
      >
        <ArrowRightIcon className="size-4" />
      </ArrowPagination>

      <div className="flex items-center gap-x-2">
        {showedPages.map((pageNumber) => (
          <LinkPage key={pageNumber} href={`${pathname}?page=${pageNumber}`}>
            <div
              className={`${pageNumber == currentPage ? "!bg-red-600" : ""} px-3 py-1 rounded-md bg-secondary-100 text-secondary-900`}
            >
              {pageNumber}
            </div>
          </LinkPage>
        ))}
      </div>
      <ArrowPagination
        href={`page=${currentPage + 1}`}
        disabled={currentPage == totalPage[totalPage.length - 1]}
      >
        <ArrowLeftIcon className="size-4" />
      </ArrowPagination>
    </div>
  );
}

function ArrowPagination({
  children,
  disabled,
  href,
  className,
  onClick,
  ...rest
}) {
  const pathname = usePathname();
  return disabled ? (
    <Button
      className={`${className} opacity-30 !scale-none`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  ) : (
    <LinkPage href={`${pathname}?${href}`} className={"flex items-center"}>
      <Button className={`${className}`} onClick={onClick} {...rest}>
        {children}
      </Button>
    </LinkPage>
  );
}
