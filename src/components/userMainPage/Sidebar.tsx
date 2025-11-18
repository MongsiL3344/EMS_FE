"use client";

import {useRouter} from "next/navigation";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import {toast} from "react-hot-toast";
import {logout} from "@/api/login.service";

const SidebarContainer = styled.aside`
  width: 240px;
  flex-shrink: 0;
  background: ${({theme}) => theme.colors.card};
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
`;

const LogoIcon = styled.div`
  background: ${({theme}) => theme.colors.primary};
  padding: 8px;
  border-radius: ${({theme}) => theme.radii.small};
  display: flex;
  align-items: center;
  justify-content: center;

  .material-icons-outlined {
    font-size: 24px;
    color: white;
  }
`;

const LogoText = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({theme}) => theme.colors.text};
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface NavItemProps {
  $active?: boolean;
}

const NavItem = styled(Link)<NavItemProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: ${({theme}) => theme.radii.small};
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s;

  ${({$active, theme}) =>
      $active
          ? `
    background: ${theme.colors.primary};
    color: white;
    box-shadow: ${theme.shadow};`
          : `
    color: ${theme.colors.subText};
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  `}
  .material-icons-outlined {
    font-size: 20px;
  }
`;

const LogoutButton = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  background: rgb(255, 255, 255);
  color: rgb(30, 41, 59);
  font-size: 0.875rem;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: rgb(243, 243, 243);
  }
`;

interface SidebarProps {
  currentPath?: string;
}

export default function Sidebar({currentPath = "/usermainpage"}: SidebarProps) {

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("로그아웃 되었습니다.");
      router.replace("/login");
    } catch (error) {
      console.error(error);
      toast.error("로그아웃에 실패했습니다.");
    }
  };

  const sideBarMenus = [
    {icon: "dashboard", label: "대시보드", href: "/usermainpage"},
    {icon: "shopping_bag", label: "대여", href: "/rent"},
    {icon: "assignment_return", label: "반납", href: "/return"},
    {icon: "manage_accounts", label: "프로필 수정", href: "/editProfile"}
  ];

  return (
      <SidebarContainer>
        <div>
          <LogoSection>
            <LogoIcon>
              <span className="material-icons-outlined">inventory_2</span>
            </LogoIcon>
            <LogoText>물품관리시스템</LogoText>
          </LogoSection>

          <Nav>
            {sideBarMenus.map((menu) => (
                <NavItem
                    key={menu.href}
                    href={menu.href}
                    $active={currentPath === menu.href}
                >
                  <span className="material-icons-outlined">{menu.icon}</span>
                  <span>{menu.label}</span>
                </NavItem>
            ))}
          </Nav>
        </div>

        <LogoutButton type="button" onClick={handleLogout}>
          <span className="material-icons-outlined">logout</span>
          <span>로그아웃</span>
        </LogoutButton>
      </SidebarContainer>
  );
}
