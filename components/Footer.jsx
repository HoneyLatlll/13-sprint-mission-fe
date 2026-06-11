import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex h-[160px] bg-[#111827] mx-auto px-[200px] py-[32px]">
      <div className="w-full flex justify-between">
        <div className="text-[#9CA3AF] whitespace-nowrap">@codeit - 2024</div>
        <div className="flex text-[#9CA3AF] gap-[30px] whitespace-nowrap">
          {/* TODO: p태그 Link로 바꿔야 할 것 같은데 귀찮음.. */}
          <p>Policy</p>
          <p>FAQ</p>
        </div>
        <div className="flex gap-[12px] text-[#9CA3AF] whitespace-nowrap">
          <Link href="https://facebook.com" target="_blank">
            <Image
              src="ic_facebook.svg"
              alt="페이스북 아이콘"
              width={18}
              height={18}
            />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Image
              src="ic_twitter.svg"
              alt="트위터 아이콘"
              width={18}
              height={18}
            />
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <Image
              src="ic_youtube.svg"
              alt="유튜브 아이콘"
              width={18}
              height={18}
            />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Image
              src="ic_instagram.svg"
              alt="인스타그램 아이콘"
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
