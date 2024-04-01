"use client";
import Button from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";
import useStoreCart from "@/hooks/useStoreCart";
import { ProductType } from "@/types";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import toast from "react-hot-toast";

interface SummaryProps {
  cartArray: ProductType[];
}
const Summary: React.FC<SummaryProps> = ({ cartArray }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const removeAll = useStoreCart((state) => state.removeAll);
  useEffect(() => {
    //*: ComponentDidUpdate
    //*: Khi click Button GetPayStripe() -> redirect qua the stripe payment page, nếu huỷ thanh toán thì res trả về session.url = localhost:3001/cart?canceled=true, nếu thanh toán thành công res = localhost:3001/cart?success=true
    if (searchParams.get("success")) {
      removeAll();
      router.push("/");
      toast.success("Thanh toán thành công.");
    }
    if (searchParams.get("canceled")) {
      toast.error("Thanh toán chưa hoàn tất, vui lòng thử lại sau !");
    }
  }, [searchParams, removeAll, router]);

  //todo: tổng tiền
  const totalPrice = cartArray.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  //todo: GetPayStripe
  const getPayStripe = async (cartArray: ProductType[]) => {
    const productIdArray = await cartArray.map((product) => product.id);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_API_URL}/checkouts/stripe`,
      { productIdArray }
    );

    //* Redirect tới session.url được trả về
    router.push(`${res.data.url}`);
  };
  return (
    <div className="w-full h-fit bg-zinc-100 rounded-xl p-4 flex flex-col items-start gap-3">
      <h1 className="font-bold text-lg">Thành Tiền</h1>
      <Currency price={totalPrice} />
      <Button
        className="w-full rounded-xl"
        onClick={() => getPayStripe(cartArray)}
      >
        Thanh Toán
      </Button>
    </div>
  );
};

export default Summary;
