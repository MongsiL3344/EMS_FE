import styled, {css} from "styled-components";

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
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  padding-right: 44px;
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

export const SearchIconButton = styled.button`
  position: absolute;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  color: #64748b;
  transition: color 0.2s ease;

  &:hover {
    color: #007aff;
  }

  &:disabled {
    cursor: not-allowed;
    color: #cbd5e1;
  }

  svg {
    width: 18px;
    height: 18px;
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

export const TableHeadCell = styled.th<{ $width?: string }>`
  padding: 16px 24px;
  text-align: center;
  font-weight: 500;
  color: #64748b;
  white-space: nowrap;
  width: ${({$width}) => $width || "auto"};
`;

export const TableHeadCellName = styled(TableHeadCell)<{ $width?: string }>`
  text-align: left;
  width: ${({$width}) => $width || "auto"};
`;

export const TableBodyRow = styled.tr`
  border-bottom: 1px solid #e2e8f0;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableBodyCell = styled.td`
  padding: 16px 24px;
  text-align: center;
  color: #0f172a;
`;

export const TableBodyCellName = styled(TableBodyCell)`
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
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
