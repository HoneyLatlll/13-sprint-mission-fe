export default async function BestPosts() {
  const res = await fetch(
    "http://localhost:3001/articles?sort=favoritest&limit=3",
    { cache: "no-store" },
  );
  const BestArticles = await res.json();

  return (
    <section className="max-w-[1200px] mx-auto flex flex-col gap-[24px] mt-[24px]">
      <h1 className="text-cool-gray-900 font-bold">베스트 게시글</h1>
      <ul className="grid grid-cols-3 gap-[24px] h-[170px]">
        {BestArticles.data.map((article) => (
          <li key={article.id} className="bg-cool-gray-50 rounded-[8px]">
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
