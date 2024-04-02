import { BillBoardType } from "@/types";

const fetchBillboards = async (id: string): Promise<BillBoardType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_API_URL}/billboards/${id}`,
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
export default fetchBillboards;
