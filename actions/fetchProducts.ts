import { ProductType } from "@/types";
import queryString from "query-string";

interface Query {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
  isArchived?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_API_URL}/products`;

const fetchProducts = async (query: Query): Promise<ProductType[]> => {
  const url = await queryString.stringifyUrl({
    //todo: Sử dụng query-string libary để tạo ra 1 url cấu tạo từ các properties của product, để get data theo đúng props yêu cầu. Ví dụ, chỉ muốn get data có chung thuộc tính categoryId, hoặc sizeId hoặc ....
    url: URL,
    query: {
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      colorId: query.colorId,
      isFeatured: query.isFeatured,
      isArchived: query.isArchived,
    },
  });

  // console.log("url", url);
  const res = await fetch(url, {
    method: "GET",
    cache: "no-cache",
  });

  return res.json();
};

export default fetchProducts;
