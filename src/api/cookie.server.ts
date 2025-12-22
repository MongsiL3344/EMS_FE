"use server";

import {cookies} from "next/headers";

/**
 * 쿠키 옵션 타입
 */
type CookieOptions = {
  httpOnly?: boolean;
  secure?: boolean;
  path?: string;
  maxAge?: number;
  sameSite?: "lax" | "strict" | "none";
};

/**
 * Set-Cookie 헤더 문자열을 파싱하여 쿠키 속성 추출
 * @param cookieString 백엔드에서 받은 Set-Cookie 헤더 문자열
 */
function parseCookie(cookieString: string) {
  const parts = cookieString.split(";").map((p) => p.trim());
  const [nameValue, ...attributes] = parts;
  const [name, value] = nameValue.split("=");

  const options: CookieOptions = {};

  for (const attr of attributes) {
    const lowerAttr = attr.toLowerCase();
    if (lowerAttr === "httponly") {
      options.httpOnly = true;
    } else if (lowerAttr === "secure") {
      options.secure = true;
    } else if (lowerAttr.startsWith("path=")) {
      options.path = attr.split("=")[1];
    } else if (lowerAttr.startsWith("max-age=")) {
      options.maxAge = parseInt(attr.split("=")[1], 10);
    } else if (lowerAttr.startsWith("samesite=")) {
      const sameSiteValue = attr.split("=")[1].toLowerCase();
      if (
          sameSiteValue === "lax" ||
          sameSiteValue === "strict" ||
          sameSiteValue === "none"
      ) {
        options.sameSite = sameSiteValue;
      }
    }
  }

  return {name, value, options};
}

/**
 * 백엔드 응답의 Set-Cookie 헤더들을 브라우저에 설정
 * @param setCookieHeaders 백엔드에서 받은 Set-Cookie 헤더 배열
 */
export async function setResponseCookies(
    setCookieHeaders: string[]
): Promise<void> {
  const cookieStore = await cookies();
  for (const cookieString of setCookieHeaders) {
    const {name, value, options} = parseCookie(cookieString);
    cookieStore.set(name, value, options);
  }
}

/**
 * 브라우저의 모든 쿠키를 Cookie 헤더 문자열로 변환
 * @returns Cookie 헤더 문자열 (예: "sid=abc123; other=value")
 */
export async function getCookieHeader(): Promise<string> {
  const cookieStore = await cookies();
  const allCookies = cookieStore.getAll();
  return allCookies.map((c) => `${c.name}=${c.value}`).join("; ");
}

/**
 * 특정 쿠키 삭제
 * @param name 삭제할 쿠키 이름
 */
export async function deleteCookie(name: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(name);
}
