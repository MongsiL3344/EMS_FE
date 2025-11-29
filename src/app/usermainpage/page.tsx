"use client";

import {useState} from "react";
import RentalList from "@/components/userMainPage/RentalList";
import Sidebar from "@/components/userMainPage/Sidebar";
import Header from "@/components/userMainPage/Header";
import {useCheckSession} from "@/api/authHandler";
import {
  allItems,
  PageLayout,
  ContentArea,
  MainContainer,
  PageTitle,
} from "@/style/UserMainPageStyle";
import {useInfiniteScroll} from "@/hooks/useInfiniteScroll";

/* 유저 메인 페이지 컴포넌트 */
export default function UserMainScreen() {
  useCheckSession(); // usermainpage 접근 시 세션 확인

  /**
   * 임시데이터 분류 정렬
   * todo : (백엔드 코드랑 디비 테이블 완성되면 변경 예정)
   * todo : 백엔드에서 사용자의 대여목록 테이블정보 3가지로 정렬해서 넘겨주고 -> 그거 받아와서 그대로 띄워주는 방식으로?
   */
  const overdueItems = allItems
  .filter((item) => item.dueDate <= 0)
  .sort((a, b) => a.dueDate - b.dueDate);

  const dueSoonItems = allItems
  .filter((item) => item.dueDate > 0 && item.dueDate <= 7)
  .sort((a, b) => a.dueDate - b.dueDate);

  const rentedItems = allItems
  .filter((item) => item.dueDate > 7)
  .sort((a, b) => a.dueDate - b.dueDate);

  // 더 불러오기 관련 state
  const [visibleRentedCount, setVisibleRentedCount] = useState(5); // 현재 보이는 물품 개수 state, 기본 5개부터 시작
  const visibleRentedItems = rentedItems.slice(0, visibleRentedCount); // 보여주고있는 목록의 개수, 배열 0번부터 visibleRentedCount-1번까지
  const hasMoreRented = visibleRentedCount < rentedItems.length; // 대여중 항목의 개수가 보여지고있는 물품의 개수보다 많으면 true

  /* 보여주고있는 물품 개수 5 증가시키기 */
  const handleLoadMore = () => {
    setVisibleRentedCount((prev) => prev + 5);
  };

  /**
   * 무한 스크롤 감시 Ref
   */
  const observerRef = useInfiniteScroll({
    onIntersect: () => {
      setVisibleRentedCount((prev) => prev + 5)
    },
  });

  return (
      <PageLayout>
        <Sidebar currentPath="/usermainpage"/>
        <ContentArea>
          <Header/>
          <MainContainer>
            <PageTitle>나의 대여 현황</PageTitle>

            {overdueItems.length > 0 && (
                <RentalList
                    icon="error_outline"
                    title="연체"
                    items={overdueItems}
                    rentalStatus="overdue"
                    cardHref="/rentals"
                />
            )}

            {dueSoonItems.length > 0 && (
                <RentalList
                    icon="watch_later"
                    title="만기 임박"
                    items={dueSoonItems}
                    rentalStatus="dueSoon"
                    cardHref="/rentals"
                />
            )}

            {rentedItems.length > 0 && (
                <>
                  <RentalList
                      icon="inventory_2"
                      title="대여 중"
                      items={visibleRentedItems}
                      rentalStatus="rented"
                      cardHref="/rentals"
                  />
                  {hasMoreRented && (
                      <>
                        {/*<LoadMoreButton type="button" onClick={handleLoadMore}>
                        Load More
                      </LoadMoreButton>*/}
                        <div ref={observerRef} style={{height: '10px'}}/>
                      </>
                  )}
                </>
            )}
          </MainContainer>
        </ContentArea>
      </PageLayout>
  );
}
