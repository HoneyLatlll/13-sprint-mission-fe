import React from "react";
import ArticleDetail from "./_components/ArticleDetail";
import ArticleComment from "./_components/ArticleComment";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <ArticleDetail />
      <ArticleComment />
      <div className="flex justify-center mt-[48px]">
        <Link href="/boards">
          <button className="bg-brand-blue py-[12px] px-[64px] text-cool-gray-100 border-none rounded-[40px] cursor-pointer">
            목록으로 돌아가기 ↩
          </button>
        </Link>
      </div>
    </div>
  );
}
