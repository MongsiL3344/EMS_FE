"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

type RentalStatus = "overdue" | "dueSoon" | "rented";

export interface RentalItem {
  itemName: string;
  dueDate: number; // 남은 일수 (음수면 연체, 0~7이면 만기 임박, 그 외는 대여중)
}

type Colors = {
  bg: string;
  border: string;
  heading: string;
  due: string;
};

const Theme: Record<RentalStatus, Colors> = {
  overdue: {
    bg: "rgba(244,63,94,.06)",
    border: "rgb(252,165,165)",
    heading: "rgb(190,18,60)",
    due: "rgb(225,29,72)"
  },
  dueSoon: {
    bg: "rgba(245,158,11,.08)",
    border: "rgb(253,186,116)",
    heading: "rgb(194,65,12)",
    due: "rgb(234,88,12)"
  },
  rented: {
    bg: "white",
    border: "rgb(226,232,240)",
    heading: "rgb(51,65,85)",
    due: "rgb(100,116,139)"
  }
};

interface RentalListProps {
  items: RentalItem[];
  rentalStatus?: RentalStatus; // 기본 'rented'
  title?: string;
  icon?: string; // material icon 이름
  inset?: number; // Divider 좌우 여백(px)
  cardHref: string; // 카드 클릭시 이동할 경로 (필수)
}

const CardLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const Section = styled.section<{ $c: Colors }>`
  background: ${({$c}) => $c.bg};
  border: 1px solid ${({$c}) => $c.border};
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  transition: transform 0.08s ease,
  box-shadow 0.08s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.08);
  }
`;

const Header = styled.h3<{ $c: Colors }>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 12px;
  font-weight: 600;
  font-size: 1.125rem;
  color: ${({$c}) => $c.heading};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 12px 4px;
`;

const ItemName = styled.span`
  color: rgb(51, 65, 85); /* slate-700 */
  font-weight: 500;
`;

const Due = styled.span<{ $c: Colors }>`
  color: ${({$c}) => $c.due};
  font-size: 0.875rem;
`;

export default function RentalList({
                                     items,
                                     rentalStatus = "rented",
                                     title,
                                     icon,
                                     cardHref
                                   }: RentalListProps) {
  if (!items || items.length === 0) {
    return null;
  }

  const c: Colors = Theme[rentalStatus];

  // dueDate를 문자열로 변환하는 함수
  const formatDueDate = (dueDate: number): string => {
    if (dueDate < 0) {
      return `${Math.abs(dueDate)}일 연체`;
    } else if (dueDate === 0) {
      return "오늘 만기";
    } else {
      return `${dueDate}일 후 만기`;
    }
  };

  return (
      <CardLink href={cardHref} aria-label={title || ""}>
        <Section $c={c}>
          {(icon || title) && (
              <Header $c={c}>
                {icon && <span className="material-icons-outlined">{icon}</span>}
                {title}
              </Header>
          )}
          <div aria-live="polite">
            {items.map((item, idx) => {
              return (
                  <React.Fragment key={`${item.itemName}-${idx}`}>
                    <Row>
                      <ItemName>{item.itemName}</ItemName>
                      <Due $c={c}>{formatDueDate(item.dueDate)}</Due>
                    </Row>
                  </React.Fragment>
              );
            })}
          </div>
        </Section>
      </CardLink>
  );
}
