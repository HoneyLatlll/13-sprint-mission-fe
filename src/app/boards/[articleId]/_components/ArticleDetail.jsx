"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import KebabMenu from "./KebabMenu";
import { useParams, useRouter } from "next/navigation";

export default function ArticleDetail() {
  const router = useRouter();
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDetailArticle(articleId) {
      const res = await fetch(`http://localhost:3001/articles/${articleId}`);
      const articleData = await res.json();
      setIsLoading(false);
      setArticle(articleData.data);
    }
    getDetailArticle(articleId);
  }, []);
  return (
    <section className="mt-[32px] flex w-full flex-col gap-[16px]">
      {/* TODO: 인라인 요소 묶을 때는 span써도 되지만 flex justify-content같은 블록 스타일을 쓰고 있으면 div태그가 맞다 근데 다른곳에서도 이미 div안쓰고 span써서 다 바꾸기 귀찮은데 아.. */}
      <span className="flex justify-between">
        <p className="text-secondary-800 text-[20px] font-bold">
          {article.title}
        </p>
        <KebabMenu
          onSelect={(value) => {
            if (value === "update") router.push(`/boards/${articleId}/update`);
            if (value === "delete") router.replace("/boards");
          }}
        />
      </span>
      <span className="border-cool-gray-200 flex items-center gap-[10px] border-b border-solid pb-[16px]">
        <Image
          src="/ic_profile.svg"
          alt="사용자 기본 프로필"
          width={40}
          height={40}
        />
        <p className="text-secondary-600 text-[14px] font-[500]">
          {article.userName}
        </p>
        <p className="text-secondary-400 mr-[30px] text-[14px] font-[400]">
          {!isLoading && article.createdAt.slice(0, 10)}
        </p>
        <Image
          src="/ic_separator.svg"
          alt=""
          width={1}
          height={34}
          className="mr-[30px]"
        />
        <span className="border-cool-gray-200 rounded-[35px] border px-[12px] py-[4px]">
          <p className="text-secondary-500 text-[16px] font-[500]">
            ❤ {article.favorite}
          </p>
        </span>
      </span>
      <span>
        <p className="text-secondary-800 text-[18px] font-[400]">
          {article.content}
        </p>
      </span>
    </section>
  );
}
