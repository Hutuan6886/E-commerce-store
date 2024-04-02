import { SizeType } from "@/types";

const fetchSizes = async (): Promise<SizeType[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_API_URL}/sizes`,
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

export default fetchSizes;
