import React from "react";

export default function CommentForm() {
  return (
    <form className="mt-[40px] flex flex-col gap-[9px]">
      <label className="text-cool-gray-900 font-[600] text-[16px]">
        댓글달기
      </label>
      <textarea
        className="border h-[104px] px-[24px] py-[16px] bg-cool-gray-100 border-none rounded-[12px] focus:outline-none resize-none"
        placeholder="댓글을 입력해주세요."
      />
      <div className="flex justify-end">
        <button className="px-[23px] py-[12px] bg-brand-blue text-[16px] font-[600] text-cool-gray-100 border-none rounded-[8px] cursor-pointer">
          등록
        </button>
      </div>
    </form>
  );
}
