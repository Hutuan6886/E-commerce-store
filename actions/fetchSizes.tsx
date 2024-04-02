import { SizeType } from "@/types";

const fetchSizes = async (): Promise<SizeType[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_API_URL}/sizes`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }
  return res.json();
};

export default fetchSizes;
