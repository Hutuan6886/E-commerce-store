import { ColorType } from "@/types";

const fetchColors = async (): Promise<ColorType[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_API_URL}/colors`,
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

export default fetchColors;
