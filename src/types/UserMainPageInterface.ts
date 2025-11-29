/**
 * RentalList.tsx -------------------------------------------------------------------------------------
 */
export type RentalStatus = "overdue" | "dueSoon" | "rented";

export interface RentalItem {
  name: string;
  dueDate: number; // 남은 일수 (음수면 연체, 0~7이면 만기 임박, 그 외는 대여중)
}

export type RentalListColors = {
  bg: string;
  border: string;
  heading: string;
  due: string;
};

export interface RentalListProps {
  items: RentalItem[];
  rentalStatus?: RentalStatus; // 기본 'rented'
  title?: string;
  icon?: string; // material icon 이름
  inset?: number; // Divider 좌우 여백(px)
  cardHref: string; // 카드 클릭시 이동할 경로
}

/**
 * SideBar.tsx -------------------------------------------------------------------------------------
 */

export interface SidebarProps {
  currentPath?: string;
}
