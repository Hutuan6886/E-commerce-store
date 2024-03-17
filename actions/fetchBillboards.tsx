import { BillBoard } from "@/types";

const fetchBillboards = async (id: string): Promise<BillBoard> => {
  const res = await fetch(
    `${process.env.ADMIN_DASHBOARD_API_URL}/billboards/${id}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  return res.json();
};
export default fetchBillboards;
