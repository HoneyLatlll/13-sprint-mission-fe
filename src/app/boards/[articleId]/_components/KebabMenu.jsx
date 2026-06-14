"use client";

import Image from "next/image";
import { useState } from "react";

const options = [
  { label: "수정하기", value: "update" },
  { label: "삭제하기", value: "delete" },
];

export default function KebabMenu({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className="relative cursor-pointer"
    >
      <Image
        src="/ic_kebab.svg"
        alt="게시글 수정/삭제 메뉴 열기"
        width={24}
        height={24}
      />
      {isOpen && (
        <span className="absolute top-7 right-0 flex flex-col w-[139px] h-[92px] border border-cool-gray-200 rounded-[8px] bg-[#FFF] text-[16px] font-[400]">
          {options.map((option) => (
            <p
              key={option.value}
              className={`py-[10px] text-secondary-500 ${option.value === "update" && "border-b border-cool-gray-200"}`}
              onClick={() => onSelect(option.value)}
            >
              {option.label}
            </p>
          ))}
        </span>
      )}
    </button>
  );
}
