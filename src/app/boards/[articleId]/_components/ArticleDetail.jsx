import Image from "next/image";
import React from "react";

export default function ArticleDetail() {
  return (
    <section className="w-full mt-[32px] flex flex-col gap-[16px]">
      {/* TODO: 인라인 요소 묶을 때는 span써도 되지만 flex justify-content같은 블록 스타일을 쓰고 있으면 div태그가 맞다 근데 다른곳에서도 이미 div안쓰고 span써서 다 바꾸기 귀찮은데 아.. */}
      <span className="flex justify-between">
        <p className="text-secondary-800 font-bold text-[20px]">게시글 제목</p>
        {/* TODO:드롭다운 버튼 기능 구현해야함 */}
        <Image
          src="/ic_kebab.svg"
          alt="게시글 수정/삭제 메뉴 열기"
          width={24}
          height={24}
        />
      </span>
      <span className="flex items-center gap-[10px] border-b border-solid border-cool-gray-200 pb-[16px]">
        <Image
          src="/ic_profile.svg"
          alt="사용자 기본 프로필"
          width={40}
          height={40}
        />
        <p>사용자이름</p>
        <p>생성 날짜</p>
        <Image src="/ic_separator.svg" alt="" width={1} height={34} />
        <span className="border border-cool-gray-200 rounded-[35px] px-[12px] py-[4px]">
          <p>🤍 좋아요개수</p>
        </span>
      </span>
    </section>
  );
}
