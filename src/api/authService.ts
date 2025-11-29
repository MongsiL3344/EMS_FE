// api/login.service.ts
import {axiosInstance} from "./axiosInstance";

export type LoginPayload = { email: string; password: string };

export type UserResponse = {
  user: {
    ok: boolean;
    email?: string;
    message: string;
  };
};

export type SessionResponse = {
  ok: boolean;
  sessionId?: string;
  sessionExpiresAt?: string;
};

/**
 * 로그인 axios post
 * @param data : LoginPayload
 * @returns UserResponse
 */
export async function login(data: LoginPayload): Promise<UserResponse> {
  const res = await axiosInstance.post<UserResponse>("api/login", data);
  return res.data; // { ok: true/false; user: email ; message: "~"}
}

/**
 * 로그아웃 axios post
 * @returns void
 */
export async function logout(): Promise<void> {
  await axiosInstance.post("api/logout");
}

/**
 * 백엔드에서 ok 상태랑 세션정보 받아오기 axios get
 * @returns SessionResponse
 */
export async function getSessionStatus(): Promise<SessionResponse> {
  const res = await axiosInstance.get<SessionResponse>("api/checkSession");
  return res.data;
}

/* 대여처리 */
export async function rentItem() {
  //
}
