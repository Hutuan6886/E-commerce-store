//todo: API của ứng dụng là port 3000/api
//todo: fetch() sử dụng tương tự như axios.get

import { CategoryType } from "@/types";

const fetchCategories = async (): Promise<CategoryType[]> => {
  const res = await fetch(`${process.env.ADMIN_DASHBOARD_API_URL}/categories`, {
    method: "GET",    //* Phương thức
    cache: 'no-cache', //* Mặc định sẽ của fetch là cache  
  });
  return res.json();
};
export default fetchCategories;
