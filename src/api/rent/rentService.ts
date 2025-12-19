import {RentableItem, ItemInfo} from "@/types/RentInterface";
import {axiosInstance} from "@/api/axiosInstance";
import {serverOnly} from "@/api/axios.server";

// /**
//  * 대여처리 axios
//  * @param itemId 물품 ID
//  * @param quantity 대여 수량
//  * @param cookieHeader 브라우저 쿠키
//  */
// export async function rentItem(
//     itemId: number,
//     quantity: number,
//     cookieHeader?: string
// ) {
//   const res = await axiosInstance.post(
//       "/api/rent",
//       {itemId, quantity},
//       {headers: cookieHeader ? {Cookie: cookieHeader} : {}}
//   );
//   return res.data;
// }
//
// /**
//  * 반납처리 axios
//  * @param cookieHeader 브라우저 쿠키
//  */
// export async function returnItem(cookieHeader?: string): Promise<void> {
//   await axiosInstance.post("/api/return", null, {
//     headers: cookieHeader ? {Cookie: cookieHeader} : {}
//   });
// }
//
// /**
//  * 물품 목록 조회 axios
//  * @param keyword 검색어
//  * @param category 카테고리
//  * @param cookieHeader 브라우저 쿠키
//  * @returns RentableItem[]
//  */
// export async function getItems(
//     keyword: string,
//     category: string,
//     cookieHeader?: string
// ): Promise<RentableItem[]> {
//   const res = await axiosInstance.get<ItemInfo[]>("/api/getItemList", {
//     params: {
//       keyword: keyword.trim() || undefined,
//       category: category !== "ALL" ? category : undefined
//     },
//     headers: cookieHeader ? {Cookie: cookieHeader} : {}
//   });
//   return res.data.map((item) => ({
//     id: item.itemId,
//     name: item.itemName,
//     category: item.itemCategory,
//     totalQuantity: item.totalQuantity,
//     currentQuantity: item.currentQuantity,
//     isRentable: item.isRentable,
//     maxQuantityPerRent: item.maxQuantityPerRent
//   }));
// }

//=============================================================================//

/**
 * 대여처리 axios
 * @param itemId 물품 ID
 * @param quantity 대여 수량
 * @param cookieHeader 브라우저 쿠키
 */
export async function rentItem(
    itemId: number,
    quantity: number,
    cookieHeader?: string
) {
  const res = await serverOnly.post(
      "/api/rent",
      {itemId, quantity},
      {headers: cookieHeader ? {Cookie: cookieHeader} : {}}
  );
  return res.data;
}

/**
 * 반납처리 axios
 * @param cookieHeader 브라우저 쿠키
 */
export async function returnItem(cookieHeader?: string): Promise<void> {
  await serverOnly.post("/api/return", null, {
    headers: cookieHeader ? {Cookie: cookieHeader} : {}
  });
}

/**
 * 물품 목록 조회 axios
 * @param keyword 검색어
 * @param category 카테고리
 * @param cookieHeader 브라우저 쿠키
 * @returns RentableItem[]
 */
export async function getItems(
    keyword: string,
    category: string,
    cookieHeader?: string
): Promise<RentableItem[]> {
  const res = await serverOnly.get<ItemInfo[]>("/api/getItemList", {
    params: {
      keyword: keyword.trim() || undefined,
      category: category !== "ALL" ? category : undefined
    },
    headers: cookieHeader ? {Cookie: cookieHeader} : {}
  });
  return res.data.map((item) => ({
    id: item.itemId,
    name: item.itemName,
    category: item.itemCategory,
    totalQuantity: item.totalQuantity,
    currentQuantity: item.currentQuantity,
    isRentable: item.isRentable,
    maxQuantityPerRent: item.maxQuantityPerRent
  }));
}
