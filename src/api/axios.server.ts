import axios from "axios";

const url = process.env.API_INTERNAL_URL;

const internalApiUrl = process.env.API_INTERNAL_URL;

if (typeof window !== "undefined") {
  // 이 코드는 서버 전용이므로, 클라이언트에서 실행되면 에러를 던지거나 경고를 남깁니다.
  console.warn(
    "apiServer.ts is running on the client side, which is unexpected for API_INTERNAL_URL access."
  );
}

if (!internalApiUrl) {
  // 환경 변수가 설정되지 않은 경우 명확한 에러를 발생시켜 디버깅을 돕습니다.
  // 이는 로컬 .env.local 설정이 잘못되었거나 서버 재시작을 안 했을 때 발생합니다.
  throw new Error(
    "Server API URL (API_INTERNAL_URL) is not configured in the environment."
  );
}

//서버용
export const serverOnly = axios.create({
  baseURL: url,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
  timeout: 10000
});

// 서버 로그
serverOnly.interceptors.request.use((config) => {
  console.log("[SERVER PROXY]", config.baseURL! + config.url!);
  return config;
});

// 서버 에러 출력
serverOnly.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("[RAILWAY ERROR]", err.response?.data || err.message);
    return Promise.reject(err);
  }
);
