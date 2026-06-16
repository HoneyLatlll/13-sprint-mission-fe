"use client";

import Image from "next/image";
import KebabMenu from "./KebabMenu";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CommentList({ refreshTrigger, onSuccess }) {
  const { articleId } = useParams();
  const [comments, setComments] = useState([]);
  const [updatedComment, setUpdatedComment] = useState("");
  const [updateCommentId, setUpdateCommentId] = useState(null);

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

  const handleUpdate = async (commentId) => {
    const res = await fetch(
      `http://localhost:3001/articles/${articleId}/comments/${commentId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: updatedComment }),
      },
    );
    if (!res.ok) return alert("수정 실패");
    onSuccess();
  };

  return (
    <ul className="flex flex-col gap-[24px]">
      {!comments.length ? (
        <div className="mt-[40px] flex flex-col items-center gap-[37px]">
          <Image
            src="/ic_empty_comment.svg"
            alt="빈 댓글"
            width={100}
            height={99}
          />
          <p className="text-secondary-400 text-center text-[16px] font-[400]">
            아직 댓글이 없어요,
            <br />
            지금 댓글을 달아보세요!
          </p>
        </div>
      ) : (
        comments.map((comment) => (
          <li
            key={comment.id}
            className="border-cool-gray-200 mt-[40px] flex flex-col gap-[24px] border-b border-solid bg-[#FCFCFC] pb-[12px]"
          >
            <div className="flex justify-between">
              {updateCommentId !== comment.id ? (
                <>
                  <p className="text-secondary-800 text-[14px] font-[400]">
                    {comment.content}
                  </p>
                  <KebabMenu
                    onSelect={(value) => {
                      if (value === "delete") handleDelete(comment.id);
                      if (value === "update") {
                        setUpdatedComment(comment.content);
                        setUpdateCommentId(comment.id);
                      }
                    }}
                  />
                </>
              ) : (
                <div className="flex w-full flex-col gap-[5px]">
                  <textarea
                    value={updatedComment}
                    className="bg-cool-gray-200 resize-none rounded-[8px] border-none px-[12px] py-[5px] focus:border"
                    onChange={(e) => setUpdatedComment(e.target.value)}
                    autoFocus
                  />
                  <div className="flex gap-[8px]">
                    <button
                      className="bg-brand-blue text-cool-gray-200 cursor-pointer rounded-[8px] border-none px-[8px] py-[4px] text-[14px]"
                      onClick={() => {
                        handleUpdate(comment.id);
                        setUpdateCommentId(null);
                      }}
                    >
                      수정 완료
                    </button>
                    <button
                      className="bg-brand-blue text-cool-gray-200 cursor-pointer rounded-[8px] border-none px-[8px] py-[4px] text-[14px]"
                      onClick={() => setUpdateCommentId(null)}
                    >
                      수정 취소
                    </button>
                  </div>
                </div>
              )}
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
                  {comment.article.userName}
                </p>
                <p className="text-secondary-400 text-[12px] font-[400]">
                  {/* TODO:createdAt 활용해서 정확한 등록 시간으로 바꿔야할듯 */}
                  {comment.createdAt}
                </p>
              </div>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}
