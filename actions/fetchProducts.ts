import { ProductType } from "@/types";
import { url } from "inspector";
import queryString from "query-string";

interface Query {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
  isArchived?: boolean;
}

const URL = `${process.env.ADMIN_DASHBOARD_API_URL}/products`;

const fetchProducts = async (query: Query): Promise<ProductType[]> => {
  const url = await queryString.stringifyUrl({
    //todo: Sử dụng query-string libary để tạo ra 1 url cấu tạo từ các properties của product
    url: URL,
    query: {
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      colorId: query.colorId,
      isFeatured: query.isFeatured,
      isArchived: query.isArchived,
    },
  });
  const res = await fetch(URL, {
    method: "GET",
    cache: "no-cache",
  });
  return res.json();
};

export default fetchProducts;
