//todo: API của ứng dụng là port 3000/api
//todo: fetch() sử dụng tương tự như axios.get

import { CategoryType } from "@/types";

const fetchCategories = async (): Promise<CategoryType[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_API_URL}/categories`,
    {
      headers: {
        accept: "application/json",
        "User-agent": "learning app",
      },
      method: "GET", //* Phương thức
      cache: "no-cache", //* Mặc định sẽ của fetch là cache
    }
  );
  return res.json();
};
export default fetchCategories;
