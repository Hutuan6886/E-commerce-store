import { SizeType } from "@/types";

const fetchSizes = async (): Promise<SizeType[]> => {
  const res = await fetch(`${process.env.ADMIN_DASHBOARD_API_URL}/sizes`, {
    method: "GET",
    cache: "no-cache",
  });
  return res.json();
};

export default fetchSizes;
