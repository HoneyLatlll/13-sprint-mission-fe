import React from "react";
import ArticleDetail from "./_components/ArticleDetail";
import ArticleComment from "./_components/ArticleComment";

export default function page() {
  return (
    <div>
      <ArticleDetail />
      <ArticleComment />
    </div>
  );
}
