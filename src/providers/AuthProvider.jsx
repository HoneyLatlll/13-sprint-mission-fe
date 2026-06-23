"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  login: () => {},
  // logout: () => {},
  user: null,
  // updateUser: () => {},
  register: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // const [isInitialized, setIsInitialized] = useState(false);

  const getUser = async () => {
    const user = await fetch("https://panda-market-api.vercel.app/users/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (!user.ok) {
      setUser(null);
      return alert("사용자 정보 가져오는데 실패");
    }
    const data = await user.json();
    setUser(data);
  };

  const register = async (nickname, email, password, passwordConfirmation) => {
    // await authService.register(name, email, password);
    try {
      const res = await fetch(
        "https://panda-market-api.vercel.app/auth/signUp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            nickname,
            password,
            passwordConfirmation,
          }),
        },
      );
      if (!res.ok) throw new Error("회원가입 오류 생겼음");
      const data = await res.json();
      localStorage.setItem("accessToken", data.accessToken);
      await getUser();
    } catch (err) {
      throw err;
    }
  };

  const login = async (email, password) => {
    // await authService.login(email, password);
    // await getUser();
    try {
      const res = await fetch(
        "https://panda-market-api.vercel.app/auth/signIn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        },
      );
      if (!res.ok) throw new Error("로그인 오류 생겼음");
      const data = await res.json();
      localStorage.setItem("accessToken", data.accessToken);
      await getUser();
    } catch (err) {
      throw err;
    }
  };

  const logout = async () => {
    setUser(null);
  };

  // const updateUser = async (user) => {
  //   const updatedUser = await userService.updateMe(user);
  //   setUser(updatedUser);
  // };

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("accessToken")) getUser();
    }, 0);
  }, []);
  console.log("user:", user);
  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
