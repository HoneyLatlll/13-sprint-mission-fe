import React from "react";

export default function ArticleForm() {
  return (
    <form className="mt-[20px]">
      <div className="flex justify-between">
        <h1 className="text-secondary-800 text-[20px] font-bold">
          게시글 쓰기
        </h1>
        <button className="cursor-pointer text-cool-gray-100 text-[16px] font-[600] px-[23px] py-[12px] bg-brand-blue rounded-[8px]">
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
          />
        </div>
      </div>
    </form>
  );
}
