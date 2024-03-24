import { ColorType } from "@/types";

const fetchColors = async (): Promise<ColorType[]> => {
  const res = await fetch(`${process.env.ADMIN_DASHBOARD_API_URL}/colors`, {
    method: "GET",
    cache: "no-cache",
  });
  return res.json();
};

export default fetchColors;
