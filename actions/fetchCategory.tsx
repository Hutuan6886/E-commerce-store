import { CategoryType } from "@/types";

const fetchCategory = async (id: string): Promise<CategoryType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_API_URL}/categories/${id}`,
    { method: "GET", cache: "no-cache" }
  );
  return res.json();
};
export default fetchCategory;
