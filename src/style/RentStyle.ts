import styled, {css} from "styled-components";
import {RentableItem} from "@/types/RentInterface";

export const PageLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({theme}) => theme.colors?.background || "#f0f2f5"};
`;

export const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: rgba(240, 240, 240, 0.27);
`;

export const MainContainer = styled.main`
  flex: 1;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Card = styled.section`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`;

export const SearchWrapper = styled.div`
  flex: 1;
  min-width: 220px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  font-size: 14px;
  color: #000;
  outline: none;

  &:focus {
    border-color: #007aff;
    box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.2);
  }
`;

export const CategorySelectWrapper = styled.div`
  width: 220px;
  position: relative;
`;

export const CategorySelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  font-size: 14px;
  color: #000;
  outline: none;
  appearance: none;
  cursor: pointer;

  &:focus {
    border-color: #007aff;
    box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.2);
  }

  background-image: linear-gradient(45deg, transparent 50%, #64748b 50%),
  linear-gradient(135deg, #64748b 50%, transparent 50%);
  background-position: calc(100% - 16px) 16px,
  calc(100% - 12px) 16px;
  background-size: 5px 5px,
  5px 5px;
  background-repeat: no-repeat;
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  /* 스크롤바 스타일링 */

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 640px;
  font-size: 16px;
  table-layout: fixed;
`;

export const TableHeadRow = styled.tr`
  border-bottom: 1px solid #e2e8f0;
`;

export const TableHeadCell = styled.th`
  padding: 16px 24px;
  text-align: left;
  font-weight: 500;
  color: #64748b;
  white-space: nowrap;
`;

export const TableHeadCellRight = styled.th`
  padding: 16px 24px;
  text-align: right;
  width: 120px;
`;

export const TableBodyRow = styled.tr`
  border-bottom: 1px solid #e2e8f0;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableBodyCell = styled.td`
  padding: 16px 24px;
  color: #0f172a;
`;

export const TableBodyCellName = styled(TableBodyCell)`
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TableBodyCellRight = styled(TableBodyCell)`
  text-align: right;
`;

export const StatusPill = styled.span<{ $status: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;

  ${({$status}) =>
      $status
          ? css`
            background: #dcfce7;
            color: #15803d;
          `
          : css`
            background: #f8f38a;
            color: #5c5c40;
          `};
`;

export const RentButton = styled.button<{ disabled?: boolean }>`
  border-radius: 999px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: ${({disabled}) => (disabled ? "not-allowed" : "pointer")};
  background: ${({disabled}) => (disabled ? "#e5e7eb" : "#007aff")};
  color: ${({disabled}) => (disabled ? "#9ca3af" : "#ffffff")};
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${({disabled}) => (disabled ? "#e5e7eb" : "#0369a1")};
  }

  &:active {
    transform: ${({disabled}) => (disabled ? "none" : "translateY(0)")};
  }
`;

export const LoadMoreWrapper = styled.div`
  padding-top: 1px;
`;

export const LoadMoreButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  border-radius: 12px;
  border: solid 1px rgb(236, 236, 243);
  background: rgb(241, 245, 249);
  color: rgb(51, 65, 85);
  font-size: 0.875rem;
  font-weight: 800;
  cursor: pointer;
  transition: background-color 0.15s ease,
  color 0.15s ease;

  &:hover {
    background: rgb(226, 232, 240);
  }
`;

export const EmptyRow = styled.tr`
  td {
    padding: 48px 24px;
    text-align: center;
    color: #64748b;
    font-weight: 500;
  }
`;

// --- Mock Data ---

export const MOCK_ITEMS: RentableItem[] = [
  {
    id: 1,
    name: "빔프로젝터",
    category: "전자",
    currentQuantity: 3,
    totalQuantity: 5,
    maxRentCount: 1,
    status: true
  },
  {
    id: 2,
    name: "노트북",
    category: "전자",
    currentQuantity: 0,
    totalQuantity: 10,
    maxRentCount: 1,
    status: false
  },
  {
    id: 3,
    name: "DSLR 카메라",
    category: "전자",
    currentQuantity: 2,
    totalQuantity: 2,
    maxRentCount: 1,
    status: true
  },
  {
    id: 4,
    name: "무선 마이크 세트",
    category: "전자",
    currentQuantity: 4,
    totalQuantity: 4,
    maxRentCount: 2,
    status: true
  },
  {
    id: 5,
    name: "삼각대",
    category: "중형",
    currentQuantity: 1,
    totalQuantity: 3,
    maxRentCount: 1,
    status: true
  },
  {
    id: 6,
    name: "보조배터리",
    category: "전자",
    currentQuantity: 10,
    totalQuantity: 10,
    maxRentCount: 5,
    status: true
  },
  {
    id: 7,
    name: "HDMI 케이블",
    category: "전자",
    currentQuantity: 8,
    totalQuantity: 15,
    maxRentCount: 3,
    status: true
  },
  {
    id: 8,
    name: "4구 멀티탭",
    category: "전자",
    currentQuantity: 5,
    totalQuantity: 5,
    maxRentCount: 2,
    status: true
  },
  {
    id: 9,
    name: "접이식 책상",
    category: "대형",
    currentQuantity: 2,
    totalQuantity: 4,
    maxRentCount: 1,
    status: true
  },
  {
    id: 10,
    name: "접이식 의자",
    category: "소형",
    currentQuantity: 20,
    totalQuantity: 40,
    maxRentCount: 5,
    status: true
  },
  {
    id: 12,
    name: "화이트보드 마카 세트",
    category: "소모품",
    currentQuantity: 50,
    totalQuantity: 100,
    maxRentCount: 10,
    status: true
  },
  {
    id: 13,
    name: "화이트보드 마카 세트",
    category: "소모품",
    currentQuantity: 50,
    totalQuantity: 100,
    maxRentCount: 10,
    status: true
  },
  {
    id: 14,
    name: "화이트보드 마카 세트",
    category: "소모품",
    currentQuantity: 50,
    totalQuantity: 100,
    maxRentCount: 10,
    status: true
  },
  {
    id: 15,
    name: "화이트보드 마카 세트",
    category: "소모품",
    currentQuantity: 50,
    totalQuantity: 100,
    maxRentCount: 10,
    status: true
  },
  {
    id: 16,
    name: "화이트보드 마카 세트",
    category: "소모품",
    currentQuantity: 50,
    totalQuantity: 100,
    maxRentCount: 10,
    status: true
  },
  {
    id: 17,
    name: "화이트보드 마카 세트",
    category: "소모품",
    currentQuantity: 50,
    totalQuantity: 100,
    maxRentCount: 10,
    status: true
  },
  {
    id: 18,
    name: "화이트보드 마카 세트",
    category: "소모품",
    currentQuantity: 50,
    totalQuantity: 100,
    maxRentCount: 10,
    status: true
  }
];
