import {
  Article,
  MultipleArticlesResponse,
  SingleArticleResponse,
} from "@/types/article";
import { BASE_URL } from "./config";

export async function getArticles(
  sortValue: "latest" | "oldest" | "favoritest",
  debouncedKeyword: string,
) {
  const res = await fetch(
    `${BASE_URL}/articles?sort=${sortValue}&keyword=${debouncedKeyword}`,
  );
  const articles: MultipleArticlesResponse = await res.json();
  return articles.data;
}

export async function postArticle(
  articleData: Pick<Article, "title" | "content">,
) {
  const res = await fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  });
  const data: SingleArticleResponse = await res.json();
  return data.data.id;
}

export async function updateArticle(
  articleData: Partial<Pick<Article, "content" | "title">>,
  articleId: Article["id"],
) {
  await fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  });
}

export async function getDetailArticleData(articleId: Article["id"]) {
  const res = await fetch(`${BASE_URL}/articles/${articleId}`);
  const articleData: SingleArticleResponse = await res.json();
  return articleData;
}

export async function deleteDetailArticle(articleId: Article["id"]) {
  await fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
  });
}

export async function getBestArticles() {
  const res = await fetch(`${BASE_URL}/articles?sort=favoritest&limit=3`, {
    cache: "no-store",
  });
  const bestArticles: MultipleArticlesResponse = await res.json();
  return bestArticles;
}
