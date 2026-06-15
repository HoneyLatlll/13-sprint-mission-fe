"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function CommentForm({ onSuccess }) {
  const { articleId } = useParams();
  const [comment, setComment] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `http://localhost:3001/articles/${articleId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: comment }),
      },
    );
    if (!res.ok) return alert("생성 실패");
    onSuccess();
    setComment("");
  };

  return (
    <form className="mt-[40px] flex flex-col gap-[9px]" onSubmit={onSubmit}>
      <label className="text-cool-gray-900 font-[600] text-[16px]">
        댓글달기
      </label>
      <textarea
        className="border h-[104px] px-[24px] py-[16px] bg-cool-gray-100 border-none rounded-[12px] focus:outline-none resize-none"
        placeholder="댓글을 입력해주세요."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          disabled={!comment}
          className={`px-[23px] py-[12px] text-[16px] font-[600] text-cool-gray-100 border-none rounded-[8px] bg-brand-blue disabled:bg-secondary-400 ${comment ? "cursor-pointer" : "cursor-not-allowed"}`}
        >
          등록
        </button>
      </div>
    </form>
  );
}
