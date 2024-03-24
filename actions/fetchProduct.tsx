import { ProductType } from "@/types";

const fetchProduct = async (id: string): Promise<ProductType> => {
  const res = await fetch(
    `${process.env.ADMIN_DASHBOARD_API_URL}/products/${id}`,
    { method: "GET", cache: "no-cache" }
  );
  return res.json();
};
export default fetchProduct;
