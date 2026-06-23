"use client";

import { useState } from "react";
import FormField from "./FormField";

export default function AuthForm({ type }) {
  const [formData, setFormData] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirmation: "",
  });
  return (
    <form className="mb-6 flex flex-col gap-6">
      {type === "login" ? (
        <>
          <FormField
            id="email"
            type="email"
            typetext="이메일"
            placeholder="이메일을 입력해주세요"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <FormField
            id="password"
            type="password"
            typetext="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            isPassword={true}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </>
      ) : (
        <>
          <FormField
            id="email"
            type="email"
            typetext="이메일"
            placeholder="이메일을 입력해주세요"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <FormField
            id="nickname"
            type="text"
            typetext="닉네임"
            placeholder="닉네임을 입력해주세요"
            value={formData.nickname}
            onChange={(e) =>
              setFormData({ ...formData, nickname: e.target.value })
            }
          />

          <FormField
            id="password"
            type="password"
            typetext="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            isPassword={true}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <FormField
            id="passwordConfirmation"
            type="password"
            typetext="비밀번호 확인"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            isPassword={true}
            value={formData.passwordConfirmation}
            onChange={(e) =>
              setFormData({ ...formData, passwordConfirmation: e.target.value })
            }
          />
        </>
      )}

      <button className="bg-brand-blue flex cursor-pointer items-center justify-center rounded-[40px] border-none px-31 py-3">
        {type === "login" ? (
          <p className="text-cool-gray-100 h-8 text-[20px] font-[600]">
            로그인
          </p>
        ) : (
          <p className="text-cool-gray-100 h-8 text-[20px] font-[600]">
            회원가입
          </p>
        )}
      </button>
    </form>
  );
}
