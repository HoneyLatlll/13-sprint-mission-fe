"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const path = usePathname();

  return (
    <header className="w-full h-[70] sticky top-0 z-10 border-[#DFDFDF] border-b flex items-center">
      <div className="w-full flex justify-between items-center px-[200px]">
        <div className="flex items-center">
          <Link className="flex gap-[8.592px]" href="/">
            <Image
              src="/panda.svg"
              alt="헤더 판다 로고"
              width={40}
              height={40}
            />
            <p className="text-[#3692FF] font-bold text-[25.633px] mr-[32px]">
              판다마켓
            </p>
          </Link>
          <div className="flex gap-[40px]">
            <Link
              href="/boards"
              className={`${path === "/boards" ? "text-[#3692FF]" : "text-[#4B5563]"} font-bold`}
            >
              자유게시판
            </Link>
            <Link href="/" className="font-bold text-[#4B5563]">
              중고마켓
            </Link>
          </div>
        </div>
        <div>
          <button className="cursor-pointer text-white bg-[#3692FF] px-[23px] py-[12px] rounded-[8px]">
            로그인
          </button>
        </div>
      </div>
    </header>
  );
}
