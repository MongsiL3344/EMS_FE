/**
 * 프론트에서 사용할 물품의 타입
 */
export interface RentableItem {
  id: number;
  name: string;
  category: string;
  totalQuantity: number;
  currentQuantity: number;
  isRentable: boolean;
  maxQuantityPerRent: number;
}

/**
 * 백엔드에서 받아오는 물품배열의 타입
 */
export interface ItemInfo {
  itemId: number;
  itemName: string;
  itemCategory: string;
  totalQuantity: number;
  rentedQuantity: number;
  currentQuantity: number;
  isRentable: boolean;
  maxQuantityPerRent: number;
  createdAt : Date;
  updatedAt : Date;
}
