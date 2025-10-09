import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   domains: ["placehold.co"]
  // }
  async redirects() {
    return [
      {
        source: "/", // 루트 경로 접근 시
        destination: "/login", // /login으로 이동
        permanent: false // 영구 리다이렉트가 아닌 임시 리다이렉트 (개발 중엔 false가 좋음)
      }
    ];
  }
};

export default nextConfig;
