import { SuccessResponse } from "./api";

export type ArticleComment = {
  id: number;
  content: string;
  createdAt: string;
  article: {
    userName: string;
  };
};

type CommentCursor = {
  nextCursor: number | null;
};

export type ArticleCommentResponse = SuccessResponse<ArticleComment[]> &
  CommentCursor;
