"use client";

import Link from "next/link";
import DropDown from "./DropDown";
import { useEffect, useState } from "react";
import Image from "next/image";
import EmptyState from "./EmptyState";

export default function Articles() {
  const [sortValue, setSortValue] = useState("latest");
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedKeyword(keyword), 500);
    return () => clearTimeout(timer);
  }, [keyword]);

  useEffect(() => {
    async function getArticles() {
      const res = await fetch(
        //TODO: url 부분 env파일로 관리해야 코드가 깔끔해질듯
        `http://localhost:3001/articles?sort=${sortValue}&keyword=${debouncedKeyword}`,
      );
      const articles = await res.json();
      setArticles(articles.data);
    }
    getArticles();
  }, [sortValue, debouncedKeyword]);
  return (
    <section className="mt-[40px] flex flex-col gap-[24px]">
      <div className="flex items-center justify-between">
        <h1 className="text-cool-gray-900 text-[20px] font-bold">게시글</h1>
        <Link href="/boards/create">
          <button className="cursor-pointer rounded-[8px] bg-[#3692FF] px-[23px] py-[12px] whitespace-nowrap text-white">
            글쓰기
          </button>
        </Link>
      </div>
      <div className="flex w-full gap-[20px]">
        <input
          className="bg-cool-gray-100 w-full rounded-[12px] border-solid px-[16px] py-[9px] focus:outline-none"
          placeholder="🍳 검색할 상품을 입력해주세요"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <DropDown onSelect={setSortValue} />
      </div>
      <ul className="flex flex-col gap-[24px]">
        {!articles.length ? (
          <EmptyState>
            게시글이 없어요
            <br />
            게시글을 생성해 보세요!
          </EmptyState>
        ) : (
          articles.map((article) => (
            // TODO: 무한스크롤 방식 적용 시도 해보는거 나쁘지 않을듯
            <Link key={article.id} href={`/boards/${article.id}`}>
              <li className="border-cool-gray-200 flex h-[138px] flex-col gap-[16px] border-b bg-[#FCFCFC]">
                <span className="flex justify-between gap-[8px]">
                  <p className="text-[20px] font-[600]">{article.title}</p>
                  <Image
                    src="/default_img.jpg"
                    alt="디폴트 이미지"
                    width={72}
                    height={72}
                    className="h-[72px] w-[72px]"
                  />
                </span>
                <span className="flex justify-between">
                  <span className="flex h-[24px] items-center gap-[8px]">
                    <Image
                      src="/ic_profile.svg"
                      alt="유저 기본 프로필"
                      width={24}
                      height={24}
                    />
                    <p className="text-secondary-600 text-[14px] font-[400]">
                      {article.userName}
                    </p>
                    <p className="text-secondary-400 text-[14px] font-[400]">
                      {article.createdAt.slice(0, 10)}
                    </p>
                  </span>
                  <span className="w-[50px]">
                    <p className="text-secondary-500 text-[16px] font-[400]">
                      ❤ {article.favorite}
                    </p>
                  </span>
                </span>
              </li>
            </Link>
          ))
        )}
      </ul>
    </section>
  );
}
