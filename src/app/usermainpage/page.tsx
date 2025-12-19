"use client";

import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import RentalList from "@/components/userMainPage/RentalList";
import Sidebar from "@/components/userMainPage/Sidebar";
import Header from "@/components/userMainPage/Header";
import {getSessionStatusAction} from "@/api/auth/auth.Server";
import {
  allItems,
  PageLayout,
  ContentArea,
  MainContainer,
  PageTitle
} from "@/style/UserMainPageStyle";
import {useInfiniteScroll} from "@/hooks/useInfiniteScroll";

/* 유저 메인 페이지 컴포넌트 */
export default function UserMainScreen() {
  const router = useRouter();

  /**
   * 세션 체크 함수
   * 세션이 유효하지 않으면 로그인 페이지로 이동
   */
  async function checkSession() {
    try {
      const data = await getSessionStatusAction();
      if (!data.ok) {
        toast.error("로그아웃되었습니다\n다시 로그인해주세요");
        router.replace("/login");
      }
    } catch {
      toast.error("로그아웃되었습니다\n다시 로그인해주세요");
      router.replace("/login");
    }
  }

  // 페이지가 마운트 되면 checkSession 실행
  useEffect(() => {
    checkSession();
  }, []);
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

  /**
   * 무한 스크롤 감시 Ref
   */
  const loadMoreRef = useInfiniteScroll({
    onIntersect: () => {
      setVisibleRentedCount((prev) => prev + 5);
    }
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
                    cardHref="/return"
                />
            )}

            {dueSoonItems.length > 0 && (
                <RentalList
                    icon="watch_later"
                    title="만기 임박"
                    items={dueSoonItems}
                    rentalStatus="dueSoon"
                    cardHref="/return"
                />
            )}

            {rentedItems.length > 0 && (
                <>
                  <RentalList
                      icon="inventory_2"
                      title="대여 중"
                      items={visibleRentedItems}
                      rentalStatus="rented"
                      cardHref="/return"
                  />
                  {hasMoreRented && (
                      <div ref={loadMoreRef} style={{height: "10px"}}/>
                  )}
                </>
            )}
          </MainContainer>
        </ContentArea>
      </PageLayout>
  );
}
