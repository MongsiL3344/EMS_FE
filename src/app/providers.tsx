"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import lightTheme from "@/style/theme";
import { RecoilRoot } from "recoil";

//테마 주입용 Provider
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </RecoilRoot>
  );
}
