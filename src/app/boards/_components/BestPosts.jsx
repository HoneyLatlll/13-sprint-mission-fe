import Image from "next/image";

export default async function BestPosts() {
  const res = await fetch(
    "http://localhost:3001/articles?sort=favoritest&limit=3",
    { cache: "no-store" },
  );
  const BestArticles = await res.json();

  return (
    <section className="max-w-[1200px] mx-auto flex flex-col gap-[24px] mt-[24px]">
      <h1 className="text-cool-gray-900 font-bold">베스트 게시글</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] h-[170px]">
        {BestArticles.data.map((article, index) => (
          <li
            key={article.id}
            className={`flex flex-col bg-cool-gray-50 rounded-[8px] px-[24px] gap-[20px] ${(index === 1 && "hidden md:flex") || (index === 2 && "hidden lg:flex")}`}
          >
            <span className="bg-brand-blue w-[102px] flex justify-center rounded-b-[16px] text-[#FFF] font-bold text-[16px] px-[24px] py-[2px] whitespace-nowrap">
              🏆 Best
            </span>
            <div className="flex h-[72px] gap-[8px] justify-between">
              <p className="text-secondary-800 text-[20px] font-[600]">
                {article.content}
              </p>
              <Image
                src="/default_img.jpg"
                alt="디폴트 이미지"
                width={72}
                height={72}
              />
            </div>
            <div className="flex justify-between">
              <span className="flex gap-[8px]">
                <p className="text-secondary-600">{article.userName}</p>
                <p className="text-secondary-600">❤ {article.favorite}</p>
              </span>
              <p className="text-secondary-400">
                {article.createdAt.slice(0, 10)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
