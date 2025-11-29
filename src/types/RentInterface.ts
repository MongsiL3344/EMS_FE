export interface RentableItem {
  id: number | string;
  name: string;
  category: string;
  currentQuantity: number; // 현재 물품 개수
  totalQuantity: number; // 총 물품 개수
  maxRentCount: number; // 한번에 대여 가능한 개수
  status: boolean; // 대여 가능 여부
}
