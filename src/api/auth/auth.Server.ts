"use server";

import {login, logout, getSessionStatus} from "@/api/auth/authService";
import {
  setResponseCookies,
  getCookieHeader,
  deleteCookie
} from "@/api/cookie.server";
import type {
  LoginPayload,
  UserResponse,
  SessionResponse
} from "@/api/auth/authService";

/**
 * 로그인 서버 함수
 * @param data : LoginPayload
 * @returns UserResponse
 */
export async function loginAction(data: LoginPayload): Promise<UserResponse> {
  const result = await login(data);

  // 백엔드에서 받은 Set-Cookie 헤더를 브라우저에 설정
  await setResponseCookies(result.cookies);

  return result.data;
}

/**
 * 로그아웃 서버함수
 * @returns void
 */
export async function logoutAction(): Promise<void> {
  const cookieHeader = await getCookieHeader();
  await logout(cookieHeader);

  // 브라우저 쿠키도 삭제
  await deleteCookie("sid");
}

/**
 * 세션확인 서버함수
 * @returns SessionResponse
 */
export async function getSessionStatusAction(): Promise<SessionResponse> {
  const cookieHeader = await getCookieHeader();
  return await getSessionStatus(cookieHeader);
}
