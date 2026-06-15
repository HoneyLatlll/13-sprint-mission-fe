"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ArticleForm({ mode, modeTitle }) {
  const [articleData, setArticleData] = useState({ title: "", content: "" });
  const router = useRouter();
  const { articleId } = useParams();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (mode === "create") {
      await fetch("http://localhost:3001/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });
      router.replace("/boards");
    }
    if (mode === "update") {
      await fetch(`http://localhost:3001/articles/${articleId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });
      router.replace(`/boards/${articleId}`);
    }
  };

  useEffect(() => {
    if (mode === "update") {
      async function getArticleData() {
        const res = await fetch(`http://localhost:3001/articles/${articleId}`);
        const articleData = await res.json();
        setArticleData({
          title: articleData.data.title,
          content: articleData.data.content,
        });
      }
      getArticleData();
    }
  }, []);
  return (
    <form className="mt-[20px]" onSubmit={onSubmit}>
      <div className="flex justify-between">
        <h1 className="text-secondary-800 text-[20px] font-bold">
          {modeTitle}
        </h1>
        <button
          className={` text-cool-gray-100 text-[16px] font-[600] px-[23px] py-[12px] bg-brand-blue rounded-[8px] disabled:bg-secondary-400 ${!articleData.title || !articleData.content ? "cursor-not-allowed" : "cursor-pointer"}`}
          disabled={!articleData.title || !articleData.content}
        >
          등록
        </button>
      </div>
      <div className="flex flex-col gap-[24px] mt-[32px]">
        <div className="flex flex-col gap-[12px]">
          <label htmlFor="title" className="text-[18px] font-bold">
            *제목
          </label>
          <input
            id="title"
            className="border py-[16px] px-[24px] border-none rounded-[12px] bg-cool-gray-100 focus:outline-none"
            placeholder="제목을 입력해주세요"
            value={articleData.title}
            onChange={(e) =>
              setArticleData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col gap-[12px]">
          <label htmlFor="content" className="text-[18px] font-bold">
            *내용
          </label>
          <textarea
            id="content"
            className="resize-none border-none rounded-[12px] bg-cool-gray-100 py-[16px] px-[24px] h-[282px] focus:outline-none"
            placeholder="내용을 입력해주세요"
            value={articleData.content}
            onChange={(e) =>
              setArticleData((prev) => ({ ...prev, content: e.target.value }))
            }
          />
        </div>
      </div>
    </form>
  );
}
