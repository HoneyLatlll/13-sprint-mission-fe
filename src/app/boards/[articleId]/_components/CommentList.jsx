"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import EmptyState from "../../_components/EmptyState";
import CommentItem from "./CommentItem";

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

  const handleUpdate = async (commentId, updatedComment) => {
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
        <EmptyState>
          아직 댓글이 없어요,
          <br />
          지금 댓글을 달아보세요!
        </EmptyState>
      ) : (
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))
      )}
    </ul>
  );
}
