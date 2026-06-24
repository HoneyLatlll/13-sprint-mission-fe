import Image from "next/image";
import LikeButton from "./LikeButton";
import KebabMenu from "@/components/KebabMenu";

export default function ItemDetail() {
  return (
    <div className="border-cool-gray-200 mt-5 flex gap-6 border-b pb-10">
      <Image
        src="/default_img.jpg"
        width={500}
        height={500}
        className="h-125 w-125 rounded-[12px] border-none"
        alt="상품이미지"
      />
      <div className="w-full">
        <div className="flex justify-between">
          <p className="text-secondary-800 text-[24px] font-[600]">제목</p>
          <KebabMenu />
        </div>
        <p className="border-cool-gray-200 text-secondary-800 mt-4 border-b pb-4 text-[40px] font-[600]">
          가격
        </p>
        <p className="text-secondary-600 text-[16px] font-[600]">상품소개</p>
        <p className="text-secondary-600 mt-4 text-[16px] font-[400] wrap-break-word">
          상품소개글
        </p>
        <p className="text-secondary-600 mt-6 text-[16px] font-[600]">
          상품 태그
        </p>
        <p className="mt-4">태그</p>
        <div className="mt-15.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p>사용자 기본 프로필</p>
            <div className="flex flex-col">
              <p className="text-secondary-600 text-[14px] font-[500]">
                사용자 이름
              </p>
              <p className="text-secondary-400 text-[14px] font-[400]">
                생성 일자
              </p>
            </div>
          </div>

          <LikeButton />
        </div>
      </div>
    </div>
  );
}
