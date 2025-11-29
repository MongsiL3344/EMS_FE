"use client";

import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import {getSessionStatus, login} from "@/api/authService";

/**
 *  로그인 훅
 *  @returns loading, handleLogin
 */
export function useLogin() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    try {
      const data = await login({email, password});
      toast.success(`로그인 성공: ${data.user.email}`);
      router.push("/usermainpage");
    } catch (error) {
      toast.error("로그인 실패");
    } finally {
      setLoading(false);
    }
  }

  // 컴포넌트에서 쓸 수 있도록 state + 핸들러를 리턴
  return {
    loading,
    handleLogin
  };
}

/**
 *  세션 체크 훅 (로그인이 필요한 작업에 접근할때 사용)
 *  @returns handleSessionButton
 */
export function useCheckSession() {
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;

    async function checkSession() {
      try {
        const data = await getSessionStatus(); // ok, sessionId, sessionExpiresAt 리턴
        if (cancelled) return;

        // 세션이 유효하지 않으면 로그인 페이지로 보내기
        if (!data.ok) {
          toast.error("로그아웃되었습니다\n다시 로그인해주세요");
          router.replace("/login");
        }
        // ok === true 면 아무 것도 하지 않고 그냥 페이지 유지
      } catch (error) {
        if (cancelled) return;
        toast.error("로그아웃되었습니다\n다시 로그인해주세요");
        router.replace("/login");
      }
    }

    checkSession();

    return () => {
      cancelled = true;
    };
  }, [router]);

  /**
   * onClick 세션 체크용 함수 리턴
   * 대여,반납 등 처리로직을 인자로 받아서 세션체크 + 로직실행 처리
   * @param handler
   */
  const handleSessionButton = async (handler: () => Promise<void> | void) => {
    try {
      const session = await getSessionStatus();
      if (session.ok) {
        await handler();
        toast.success("정상 처리 되었습니다.");
      }
    } catch (error) {
      toast.error("작업 중 오류가 발생했습니다.");
      router.replace("/login");
    }
  };

  return {handleSessionButton};
}
