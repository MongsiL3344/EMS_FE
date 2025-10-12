"use client";

import React from "react";
import {ThemeProvider} from "styled-components";
import lightTheme from "@/style/theme";

//테마 주입용 Provider
export default function Providers({children}: { children: React.ReactNode }) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}
