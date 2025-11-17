"use client";

import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid ${({theme}) => theme.colors.border};
`;

const Spacer = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconButton = styled.button`
  padding: 8px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: ${({theme}) => theme.colors.subText};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .material-icons-outlined {
    font-size: 20px;
  }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.subText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px; /* 아이콘/이니셜 크기 */
`;

/* 유저 메인 페이지 상단 바 */
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
