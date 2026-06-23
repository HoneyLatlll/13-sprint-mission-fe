"use client";

import Image from "next/image";
import { useState } from "react";

export default function FormField({
  id,
  type,
  typetext,
  isPassword = false,
  ...rest
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="relative flex flex-col gap-3">
      <label htmlFor={id} className="text-secondary-800 text-[18px] font-bold">
        {typetext}
      </label>
      <input
        id={id}
        type={isPasswordVisible ? "text" : type}
        className="bg-cool-gray-100 h-14 rounded-xl border-none px-6 py-4 focus:outline-none"
        {...rest}
      />
      {isPassword && (
        <button
          className="absolute right-5 bottom-4 cursor-pointer"
          onClick={() => setIsPasswordVisible((prev) => !prev)}
          type="button"
        >
          <Image
            src={
              !isPasswordVisible
                ? "/btn_visibility_off.svg"
                : "/btn_visibility_on.svg"
            }
            width={24}
            height={24}
            alt=""
          />
        </button>
      )}
    </div>
  );
}
