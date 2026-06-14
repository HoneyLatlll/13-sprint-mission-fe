"use client";

import Image from "next/image";
import { useState } from "react";

const options = [
  { label: "최신순", value: "latest" },
  { label: "오래된순", value: "oldest" },
  { label: "좋아요순", value: "favoritest" },
];

export default function DropDown({ onSelect }) {
  const [sortOptions, setSortOptions] = useState(options[0].label);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      className="border-solid border border-cool-gray-200 rounded-[12px] px-[20px] py-[12px] w-[130px] h-[42px] flex cursor-pointer relative"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="flex items-center justify-between w-full">
        <p className="whitespace-nowrap">{sortOptions}</p>
        <Image
          src="/ic_arrow_down.svg"
          alt="드롭다운 버튼"
          width={24}
          height={24}
        />
      </span>
      {isOpen && (
        <div className="flex flex-col rounded-[8px] absolute top-[45px] left-0 gap-[2px] border-solid border border-cool-gray-200 rounded-[12px] w-full bg-[#FFF]">
          {options.map((option) => (
            <span
              key={option.value}
              className={`w-full border-b border-cool-gray-200 py-[5px] ${option.value === "favoritest" && "border-b-0"}`}
              onClick={() => {
                setSortOptions(option.label);
                onSelect(option.value);
              }}
            >
              <p>{option.label}</p>
            </span>
          ))}
        </div>
      )}
    </button>
  );
}
