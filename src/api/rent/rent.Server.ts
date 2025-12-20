"use server";

import {rentItem, getItemList} from "@/api/rent/rentService";
import {getCookieHeader} from "@/api/cookie.server";
import type {RentableItem} from "@/types/RentInterface";

/**
 * 대여처리 서버함수
 * @param itemId 물품 ID
 * @param quantity 대여 수량
 */
export async function rentItemAction(
    itemId: number,
    quantity: number
): Promise<unknown> {
  const cookieHeader = await getCookieHeader();
  return await rentItem(itemId, quantity, cookieHeader);
}

/**
 * 물품 목록 조회 서버함수
 * @param keyword 검색어
 * @param category 카테고리
 * @param offset 현재보여주고있는 물품개수(DB-offset용)
 * @param limit 불러올 물품개수
 * @returns RentableItem[]
 */
export async function getItemsAction(
    keyword: string,
    category: string,
    offset: number,
    limit: number
): Promise<RentableItem[]> {
  const cookieHeader = await getCookieHeader();
  return await getItemList(keyword, category, offset, limit, cookieHeader);
}
