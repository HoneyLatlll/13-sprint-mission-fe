"use client";

import Link from "next/link";
import DropDown from "./DropDown";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Articles() {
  const [sortValue, setSortValue] = useState("latest");
  const [keyword, setKeyword] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      const res = await fetch(
        `http://localhost:3001/articles?sort=${sortValue}&keyword=${keyword}`,
      );
      const articles = await res.json();
      setArticles(articles.data);
    }
    getArticles();
  }, [sortValue, keyword]);
  console.log(sortValue);
  return (
    <section className="flex flex-col gap-[24px] mt-[40px]">
      <div className="flex items-center justify-between">
        <h1 className="text-cool-gray-900 font-bold text-[20px]">게시글</h1>
        <button className="cursor-pointer text-white bg-[#3692FF] px-[23px] py-[12px] rounded-[8px] whitespace-nowrap">
          글쓰기
        </button>
      </div>
      <div className="w-full flex gap-[20px]">
        <input
          className="w-full border-solid rounded-[12px] px-[16px] py-[9px] bg-cool-gray-100 focus:outline-none"
          placeholder="🍳 검색할 상품을 입력해주세요"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <DropDown onSelect={setSortValue} />
      </div>
      <ul className="flex flex-col gap-[24px]">
        {articles.map((article) => (
          // TODO: 검색 결과 없을 때 빈 상태 UI 추가해야함
          <Link key={article.id} href={`/boards/${article.id}`}>
            <li className="flex flex-col h-[138px] bg-[#FCFCFC] gap-[16px] border-b border-cool-gray-200">
              <span className="flex gap-[8px] justify-between">
                <p className="text-[20px] font-[600]">{article.content}</p>
                <Image
                  src="/default_img.jpg"
                  alt="디폴트 이미지"
                  width={72}
                  height={72}
                  className="w-[72px] h-[72px]"
                />
              </span>
              <span className="flex justify-between">
                <span className="flex gap-[8px] h-[24px] items-center">
                  <Image
                    src="/ic_profile.svg"
                    alt="유저 기본 프로필"
                    width={24}
                    height={24}
                  />
                  <p className="text-secondary-600 font-[400] text-[14px]">
                    {article.userName}
                  </p>
                  <p className="text-secondary-400 font-[400] text-[14px]">
                    {article.createdAt.slice(0, 10)}
                  </p>
                </span>
                <span className="w-[50px]">
                  <p className="text-secondary-500 font-[400] text-[16px]">
                    ❤ {article.favorite}
                  </p>
                </span>
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
