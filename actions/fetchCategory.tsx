import { CategoryType } from "@/types";

const fetchCategory = async (id: string): Promise<CategoryType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_API_URL}/categories/${id}`,
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
export default fetchCategory;
