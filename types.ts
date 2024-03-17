//todo: Quản lý toàn bộ interface type của các đối tượng api trả về
//todo: Gọi call api đến admin-dashboard (localhost:3000/{storeId})
//todo: Định nghĩa các props của interface tại những props nào cần hiển thị lên store

export interface BillBoardType {
  id: string;
  label: string;
  imgUrl: string;
}
//todo: types lấy về các đối tượng categoriers: để hiển thị làm các routes ở Navbar
export interface CategoryType {
  id: string;
  name: string;
  billboard: BillBoardType;
}

export interface SizeType {
  id: string;
  name: string;
  sign: string;
}

export interface ColorType {
  id: string;
  name: string;
  value: string;
}

export interface ImageType {
  id: string;
  imgUrl: string;
}
export interface ProductType {
  id: string;
  name: string;
  price: number;
  category: CategoryType;
  size: SizeType;
  color: ColorType;
  isFeatured: boolean;
  isArchived: boolean;
  images: ImageType[];
}
