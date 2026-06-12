"use client";

import Link from "next/link";
import DropDown from "./DropDown";
import { useState } from "react";

export default function Posts() {
  const [sortValue, setSortValue] = useState("recent");

  return (
    <section className="mt-[40px]">
      <div>
        <p>게시글</p>
        <button>글쓰기</button>
      </div>
      <div>
        <input />
        {/* TODO: 드롭다운버튼은 컴포넌트로 빼야할 듯? */}
        <DropDown onSelect={setSortValue} />
      </div>
      <ul>
        {/* TODO: Link태그로 li태그 감싸야할듯 */}
        <li></li>
      </ul>
    </section>
  );
}
