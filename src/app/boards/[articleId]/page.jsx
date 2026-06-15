"use client";

import { useState } from "react";
import ArticleDetail from "./_components/ArticleDetail";
import CommentForm from "./_components/CommentForm";
import Link from "next/link";
import CommentList from "./_components/CommentList";

export default function Page() {
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  return (
    <div>
      <ArticleDetail />
      <CommentForm onSuccess={() => setRefreshTrigger((prev) => !prev)} />
      <CommentList
        refreshTrigger={refreshTrigger}
        onSuccess={() => setRefreshTrigger((prev) => !prev)}
      />
      <div className="mt-[48px] flex justify-center">
        <Link href="/boards">
          <button className="bg-brand-blue text-cool-gray-100 cursor-pointer rounded-[40px] border-none px-[64px] py-[12px]">
            목록으로 돌아가기 ↩
          </button>
        </Link>
      </div>
    </div>
  );
}
