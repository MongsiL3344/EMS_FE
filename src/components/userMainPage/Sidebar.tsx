"use client";

import {useRouter} from "next/navigation";
import React from "react";
import {toast} from "react-hot-toast";
import {logout} from "@/api/authService";
import {
  SidebarContainer,
  LogoSection,
  LogoIcon,
  LogoText,
  Nav,
  NavItem,
  LogoutButton
} from "@/style/UserMainPageStyle";
import type {SidebarProps} from "@/types/UserMainPageInterface";

/**
 * 사이드바 컴포넌트
 */
export default function Sidebar({
                                  currentPath = "/usermainpage"
                                }: SidebarProps) {
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

  /**
   * 사이드바에 들어가는 메뉴
   * icon, label, href
   * */
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
