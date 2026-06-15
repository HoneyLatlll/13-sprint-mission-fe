"use client";

import Image from "next/image";
import KebabMenu from "./KebabMenu";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CommentList({ refreshTrigger, onSuccess }) {
  const { articleId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      const res = await fetch(
        `http://localhost:3001/articles/${articleId}/comments`,
      );
      const commentData = await res.json();
      setComments(commentData.data);
    }
    getComments();
  }, [refreshTrigger]);

  const handleDelete = async (commentId) => {
    const res = await fetch(
      `http://localhost:3001/articles/${articleId}/comments/${commentId}`,
      {
        method: "DELETE",
      },
    );
    if (!res.ok) return alert("삭제 실패");
    onSuccess();
  };

  return (
    <ul className="flex flex-col gap-[24px]">
      {comments.map((comment) => (
        <li
          key={comment.id}
          className="bg-[#FCFCFC] flex flex-col gap-[24px] mt-[40px] pb-[12px] border-b border-solid border-cool-gray-200"
        >
          <div className="flex justify-between">
            <p className="text-[14px] font-[400] text-secondary-800">
              {comment.content}
            </p>
            <KebabMenu
              onSelect={(value) => {
                if (value === "delete") handleDelete(comment.id);
              }}
            />
          </div>
          <div className="flex gap-[8px]">
            <Image
              src="/ic_profile.svg"
              alt="사용자 기본 프로필"
              width={32}
              height={32}
            />
            <div>
              <p className="text-[12px] font-[400] text-secondary-600">
                {comment.article.userName}
              </p>
              <p className="text-[12px] font-[400] text-secondary-400">
                {/* TODO:createdAt 활용해서 정확한 등록 시간으로 바꿔야할듯 */}
                {comment.createdAt}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
