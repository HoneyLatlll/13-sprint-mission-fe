"use client";

import KebabMenu from "@/components/KebabMenu";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function CommentList() {
  const { itemId } = useParams();
  const { data: comments, isPending } = useQuery({
    queryKey: ["comments", itemId],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://panda-market-api.vercel.app/products/${itemId}/comments?limit=4`,
        );
        if (!res.ok) throw new Error("문의 댓글 불러오기 실패");
        const data = await res.json();
        console.log(data);
        return data.list;
      } catch (err) {
        console.error(err);
      }
    },
  });

  if (isPending) return <p>로딩 중...</p>;

  return (
    <div>
      {comments.map((comment) => (
        <li
          key={comment.id}
          className="border-cool-gray-200 mt-[40px] flex flex-col gap-[24px] border-b border-solid bg-[#FCFCFC] pb-[12px]"
        >
          <div>
            <div className="flex w-full justify-between">
              <p className="text-secondary-800 text-[14px] font-[400]">
                {comment.content}
              </p>
              <KebabMenu />
            </div>
          </div>
          <div className="flex gap-[8px]">
            <Image
              src="/ic_profile.svg"
              alt="사용자 기본 프로필"
              width={32}
              height={32}
            />
            <div>
              <p className="text-secondary-600 text-[12px] font-[400]">
                {comment.writer.nickname}
              </p>
              <p className="text-secondary-400 text-[12px] font-[400]">
                {comment.createdAt.slice(0, 10)}
              </p>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}
