import { ProductType } from "@/types";

const fetchProduct = async (id: string): Promise<ProductType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_API_URL}/products/${id}`,
    {
      headers: {
        accept: "application/json",
        "User-agent": "learning app",
      },
      method: "GET",
      cache: "no-cache",
    }
  );
  return res.json();
};
export default fetchProduct;
