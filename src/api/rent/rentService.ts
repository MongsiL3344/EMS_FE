import {RentableItem, ItemInfo} from "@/types/RentInterface";
import {serverOnly} from "@/api/axios.server";
import {axiosInstance} from "@/api/axiosInstance";

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
  const res = await axiosInstance.post(
      "/api/rent",
      {itemId, quantity},
      {headers: cookieHeader ? {Cookie: cookieHeader} : {}}
  );
  return res.data;
}

/**
 * 물품 목록 조회 axios
 * @param keyword 검색어
 * @param category 카테고리
 * @param offset
 * @param limit
 * @param cookieHeader 브라우저 쿠키
 * @returns RentableItem[]
 */
export async function getItemList(
    keyword: string,
    category: string,
    offset: number,
    limit: number,
    cookieHeader?: string
): Promise<RentableItem[]> {
  const res = await axiosInstance.get<ItemInfo[]>("/api/getItemList", {
    params: {
      keyword: keyword.trim() || undefined,
      category: category !== "ALL" ? category : undefined,
      offset,
      limit
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
