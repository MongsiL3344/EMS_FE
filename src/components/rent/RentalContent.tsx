"use client";

import React, {useMemo, useState} from "react";
import {rentItem} from "@/api/authService";
import {
  Card,
  FilterRow,
  SearchWrapper,
  SearchInput,
  CategorySelectWrapper,
  CategorySelect,
  TableContainer,
  Table,
  TableHeadRow,
  TableHeadCell,
  TableHeadCellRight,
  TableBodyRow,
  TableBodyCell,
  TableBodyCellName,
  TableBodyCellRight,
  StatusPill,
  RentButton,
  LoadMoreWrapper,
  LoadMoreButton,
  EmptyRow
} from "@/style/RentStyle";
import {useCheckSession} from "@/api/authHandler";
import type {RentableItem} from "@/types/RentInterface";

export default function RentalContent({items}: { items: RentableItem[] }) {
  const {handleSessionButton} = useCheckSession();
  const [searchInput, setSearchInput] = useState<string>(""); // 이름으로 검색
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL"); // 카테고리
  const [visibleCount, setVisibleCount] = useState<number>(9); // 현재 보이는 물품 개수

  /**
   *  존재하는 물품의 카테고리의 목록을 뽑아서 배열로 만듦
   */
  const categoryOptions = useMemo(
      () => Array.from(new Set(items.map((item) => item.category))),
      [items]
  );

  /**
   *  검색어, 카테고리 필터를 거친 아이템 목록 반환
   *  @return matchesName, matchesCategory
   */
  const filteredItems = useMemo(() => {
    const lowerSearch = searchInput.trim().toLowerCase(); // 검색어 정규화

    return items.filter((item) => {
      // 검색한 물품명과 일치하는 항목 있는지 확인
      const matchesName =
          lowerSearch.length === 0 ||
          item.name.toLowerCase().includes(lowerSearch);
      // 선택한 카테고리와 일치하는 항목 있는지 확인
      const matchesCategory = selectedCategory === "ALL" || item.category === selectedCategory;


      return matchesName && matchesCategory;
    });
  }, [items, searchInput, selectedCategory]);

  /**
   *  현재 보이는 물품의 목록
   */
  const visibleItems = useMemo(
      () => filteredItems.slice(0, visibleCount),
      [filteredItems, visibleCount]
  );

  /**
   *  더 불러올 목록이 있으면 true
   */
  const canLoadMore = visibleCount < filteredItems.length;

  /**
   * 대여버튼 onClick 함수
   */
  const handleRent = () => {
    handleSessionButton(async () => {
      await rentItem();
    });
  };

  /**
   *  물품 검색 핸들러
   *  검색 내용이 변경되면 보이는 물품 개수를 10개로 초기화
   */
  const onChangeSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchInput(e.target.value);
    setVisibleCount(9);
  };

  /**
   * 카테고리 선택 핸들러
   * 선택된 카테고리가 바뀌면 보이는 물품 개수를 10개로 초기화
   */
  const onChangeCategory: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedCategory(e.target.value);
    setVisibleCount(9);
  };

  return (
      <Card>
        <FilterRow>
          <SearchWrapper>
            <SearchInput
                type="text"
                placeholder="물품 이름을 입력하세요"
                aria-label="물품 이름 검색"
                value={searchInput}
                onChange={onChangeSearch}
            />
          </SearchWrapper>

          <CategorySelectWrapper>
            <CategorySelect
                value={selectedCategory}
                onChange={onChangeCategory}
                aria-label="카테고리 선택"
            >
              <option value="ALL">전체 카테고리</option>
              {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
              ))}
            </CategorySelect>
          </CategorySelectWrapper>
        </FilterRow>

        <TableContainer>
          <Table>
            <colgroup>
              <col style={{width: "40%"}}/>
              <col style={{width: "15%"}}/>
              <col style={{width: "15%"}}/>
              <col style={{width: "15%"}}/>
              <col style={{width: "15%"}}/>
            </colgroup>
            <thead>
            <TableHeadRow>
              <TableHeadCell>물품 이름</TableHeadCell>
              <TableHeadCell>재고 현황</TableHeadCell>
              <TableHeadCell>상태</TableHeadCell>
              <TableHeadCell>대여가능개수</TableHeadCell>
              <TableHeadCellRight aria-label="작업"/>
            </TableHeadRow>
            </thead>
            <tbody>
            {visibleItems.map((item) => {
              // 재고가 0이거나 상태가 false면 대여 불가
              const isRentable = item.status && item.currentQuantity > 0;

              return (
                  <TableBodyRow key={item.id}>
                    <TableBodyCellName>{item.name}</TableBodyCellName>
                    <TableBodyCell>
                      {item.currentQuantity} / {item.totalQuantity}
                    </TableBodyCell>
                    <TableBodyCell>
                      <StatusPill $status={item.status}>
                        {isRentable ? "대여 가능" : "대여 불가"}
                      </StatusPill>
                    </TableBodyCell>
                    <TableBodyCell>{item.maxRentCount}개</TableBodyCell>
                    <TableBodyCellRight>
                      <RentButton
                          disabled={!isRentable}
                          onClick={() => handleRent()}
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

        {filteredItems.length > 0 && canLoadMore && (
            <LoadMoreWrapper>
              <LoadMoreButton
                  onClick={() => {
                    setVisibleCount((prev) => prev + 10);
                  }}
              >
                {`Load More (${visibleItems.length} / ${filteredItems.length + 1})`}
              </LoadMoreButton>
            </LoadMoreWrapper>
        )}
      </Card>
  );
}
