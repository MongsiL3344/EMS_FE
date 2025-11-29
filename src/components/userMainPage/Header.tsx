"use client";

import React from "react";
import {
  HeaderContainer,
  RightSection,
  Avatar,
  Spacer,
  IconButton
} from "@/style/UserMainPageStyle";

/**
 *  상단 바 컴포넌트
 */
export default function Header() {
  return (
      <HeaderContainer>
        <Spacer/>
        <RightSection>
          <IconButton>
            <span className="material-icons-outlined">notifications</span>
          </IconButton>
          <Avatar aria-label="User avatar">
            <span className="material-icons-outlined">person</span>
          </Avatar>
        </RightSection>
      </HeaderContainer>
  );
}
