"use client";

import React, {useMemo, useState, useCallback, useEffect} from "react";
import toast from "react-hot-toast";
import {rentItemAction, getItemsAction} from "@/api/rent/rent.Server";
import {
  Card,
  FilterRow,
  SearchWrapper,
  SearchInput,
  SearchIconButton,
  CategorySelectWrapper,
  CategorySelect,
  TableContainer,
  Table,
  TableHeadRow,
  TableHeadCellName,
  TableHeadCell,
  TableBodyRow,
  TableBodyCell,
  TableBodyCellName,
  TableBodyCellRight,
  StatusPill,
  RentButton,
  EmptyRow
} from "@/style/RentStyle";
import {useInfiniteScroll} from "@/hooks/useInfiniteScroll";
import type {RentableItem} from "@/types/RentInterface";

// 카테고리 옵션
const CATEGORY_OPTIONS = ["대형", "중형", "소형", "전자", "소모품"];

export default function RentalContent() {
  const [items, setItems] = useState<RentableItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState<number>(10);

  /**
   * 물품 리스트 조회시 최종적으로 호출되는 함수
   * 서버함수인 getItemsAction을 검색어와 카테고리로 조회하도록 호출
   * @returns setItems : RentableItem[]
   */
  const fetchItems = useCallback(async (keyword: string, category: string) => {
    setLoading(true);
    try {
      const result = await getItemsAction(keyword, category);
      setItems(result);
    } catch (error) {
      console.error("물품 조회 실패:", error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * 초기 로딩 시 물품 목록 조회
   */
  useEffect(() => {
    fetchItems("", "ALL");
  }, [fetchItems]);

  /**
   *  현재 보이는 물품의 목록
   */
  const visibleItems = useMemo(
      () => items.slice(0, visibleCount),
      [items, visibleCount]
  );

  // 더 불러올 목록이 있으면 true
  const canLoadMore = visibleCount < items.length;

  /**
   * 대여버튼 onClick 함수
   */
  const handleRent = async (itemId: number, quantity: number) => {
    try {
      await rentItemAction(itemId, quantity); //TODO : 각 물품별 아이템id랑 빌릴 개수 입력받아야함
      toast.success("대여 성공");
    } catch {
      toast.error("대여 실패");
    }
  };

  /**
   * 검색 실행
   * state로 들고있는 검색어와 카테고리 둘 다 포함해서 fetchItems 호출
   */
  const handleSearch = useCallback(() => {
    setVisibleCount(10);
    fetchItems(searchInput, selectedCategory);
  }, [searchInput, selectedCategory, fetchItems]);

  /**
   * 엔터키 입력하면 handleSearch 호출
   */
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  /**
   * 카테고리 선택 핸들러
   */
  const handleCategoryChange: React.ChangeEventHandler<HTMLSelectElement> = (
      e
  ) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    setVisibleCount(10);
    fetchItems(searchInput, newCategory);
  };

  /**
   * 무한스크롤 Ref
   */
  const loadMoreRef = useInfiniteScroll({
    onIntersect: () => {
      setVisibleCount((prev) => prev + 5);
    },
    isLoading: loading
  });

  return (
      <Card>
        <FilterRow>
          <SearchWrapper>
            <SearchInput
                type="text"
                placeholder="물품 이름을 입력하세요"
                aria-label="물품 이름 검색"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <SearchIconButton
                onClick={handleSearch}
                disabled={loading}
                aria-label="검색"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </SearchIconButton>
          </SearchWrapper>

          <CategorySelectWrapper>
            <CategorySelect
                value={selectedCategory}
                onChange={handleCategoryChange}
                aria-label="카테고리 선택"
            >
              <option value="ALL">전체 카테고리</option>
              {CATEGORY_OPTIONS.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
              ))}
            </CategorySelect>
          </CategorySelectWrapper>
        </FilterRow>

        <TableContainer>
          <Table>
            <thead>
            <TableHeadRow>
              <TableHeadCellName $width="40%">물품 이름</TableHeadCellName>
              <TableHeadCell $width="15%">재고 현황</TableHeadCell>
              <TableHeadCell $width="15%">상태</TableHeadCell>
              <TableHeadCell $width="15%">대여가능개수</TableHeadCell>
              <TableHeadCell $width="15%"></TableHeadCell>
            </TableHeadRow>
            </thead>
            <tbody>
            {visibleItems.map((item) => {
              // 재고가 0이거나 상태가 false면 대여 불가
              const isRentable = item.isRentable && item.currentQuantity > 0;

              return (
                  <TableBodyRow key={item.id}>
                    <TableBodyCellName>{item.name}</TableBodyCellName>
                    <TableBodyCell>
                      {item.currentQuantity} / {item.totalQuantity}
                    </TableBodyCell>
                    <TableBodyCell>
                      <StatusPill $status={isRentable}>
                        {isRentable ? "대여 가능" : "대여 불가"}
                      </StatusPill>
                    </TableBodyCell>
                    <TableBodyCell>{item.maxQuantityPerRent}개</TableBodyCell>
                    <TableBodyCellRight>
                      <RentButton
                          disabled={!isRentable}
                          onClick={async () => handleRent(item.id, 1)}
                          aria-disabled={!isRentable}
                      >
                        {"대여"}
                      </RentButton>
                    </TableBodyCellRight>
                  </TableBodyRow>
              );
            })}

            {visibleItems.length === 0 && (
                <EmptyRow>
                  <td colSpan={5}>
                    {searchInput
                        ? `'${searchInput}'에 대한 검색 결과가 없습니다.`
                        : "등록된 물품이 없습니다."}
                  </td>
                </EmptyRow>
            )}
            </tbody>
          </Table>
        </TableContainer>

        {items.length > 0 && canLoadMore && (
            <div ref={loadMoreRef} style={{height: "10px"}}/>
        )}
      </Card>
  );
}
