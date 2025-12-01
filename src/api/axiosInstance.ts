import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
  withCredentials: true
});

// // 브라우저용
// export const clientOnly = axios.create({
//   baseURL: "/",
//   withCredentials: true,
//   timeout: 10000
// });

// // 요청 디버깅용
// clientOnly.interceptors.request.use((config) => {
//   console.log("[CLIENT]", config.method, config.url);
//   return config;
// });

// // 에러 핸들링
// clientOnly.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     console.error("[CLIENT ERROR]", err.response?.data || err.message);
//     return Promise.reject(err);
//   }
// );
