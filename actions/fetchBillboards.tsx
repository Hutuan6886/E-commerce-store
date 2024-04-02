import { BillBoardType } from "@/types";

const fetchBillboards = async (id: string): Promise<BillBoardType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_API_URL}/billboards/${id}`,
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
export default fetchBillboards;
