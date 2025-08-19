"use client";

import Button from "@/ui/button";
import Img from "@/ui/img";
import LinkPage from "@/ui/link";
import Toltip from "@/ui/Toltip";
import {
  ArrowDownTrayIcon,
  EyeSlashIcon,
  FlagIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

export default function PostCard({ _id, coverImageUrl }) {
  let [targeted, setTargeted] = useState(false);
  let [optionToltip, setOptionToltip] = useState(false);
  let [textOptionToltip, setTextOptionToltip] = useState(false);

  return (
    <div
      className={`relative`}
      onMouseEnter={() => {
        setTargeted(true);
      }}
      onMouseLeave={() => {
        setTargeted((prev) => (!optionToltip ? (prev = false) : (prev = true)));
      }}
    >
      {/* اورلی هنگام هاور روی کارد ها */}
      <div
        className={`${targeted ? "!block" : "hidden"} pointer-events-none hidden absolute top-0 right-0 bg-black/40 w-full h-full z-10  rounded-xl `}
      >
        <div className="z-20">
          <Button
            variant="primary"
            className={
              "absolute top-2 pointer-events-auto cursor-pointer left-2 py-3 rounded-xl"
            }
          >
            ذخیره سازی{" "}
          </Button>
          <Button
            className={
              "!bg-white pointer-events-auto cursor-pointer !text-black absolute  bottom-2 left-2 rounded-xl"
            }
          >
            <div
              onClick={() => {
                setOptionToltip((prev) => !prev);
                setTextOptionToltip((prev) =>
                  optionToltip ? (prev = false) : (prev = true)
                );
              }}
              onMouseEnter={() => {
                setTextOptionToltip(true);
              }}
              onMouseLeave={() => {
                setTextOptionToltip(false);
              }}
              className="relative"
            >
              ...
              {/* تولتیپ متن قابلیت */}
              <Toltip className="bg-black" open={textOptionToltip}>
                <div className="px-2 py-1 w-max">
                  <span className="text-xs text-white">قابلیت ها</span>
                </div>
              </Toltip>
              {/* تولتیپ قابلیت ها */}
              <Toltip
                className="!bg-white !shadow-2xl !z-40"
                open={optionToltip}
              >
                <div className="flex flex-col gap-y-3 px-3 py-5 w-max">
                  <span className="text-sm px-2">
                    این پست توسط فعالیت های اخیر شما نمایش داده میشود
                  </span>
                  <div>
                    <div className="flex  gap-x-5 w-full hover:bg-amber-100/50 py-1 px-2 rounded-xs">
                      <ShareIcon className="size-6" />
                      <span className="text-md">ارسال</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex  gap-x-5 w-full hover:bg-amber-100/50 py-1 px-2 rounded-xs">
                      <EyeSlashIcon className="size-6" />
                      <span className="text-md">پناهن کردن</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex  gap-x-5 w-full hover:bg-amber-100/50 py-1 px-2 rounded-xs">
                      <ArrowDownTrayIcon className="size-6" />
                      <span className="text-md">دانلود عکس</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex  gap-x-5 w-full hover:bg-amber-100/50 py-1 px-2 rounded-xs">
                      <FlagIcon className="size-6" />
                      <span className="text-md">گزارش</span>
                    </div>
                  </div>
                </div>
              </Toltip>
            </div>
          </Button>
        </div>
      </div>
      <Link href={`/post/${_id}`} key={_id}>
        <Img
          containerClassName="w-full h-100 rounded-xl overflow-hidden"
          sourse={coverImageUrl}
        />
      </Link>
    </div>
  );
}
