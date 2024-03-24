"use client";
import Button from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";
import { ProductType } from "@/types";
import React from "react";

interface SummaryProps {
  cartArray: ProductType[];
}
const Summary: React.FC<SummaryProps> = ({ cartArray }) => {
  //todo: tổng tiền
  const totalPrice = cartArray.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);
  return (
    <div className="w-full h-fit bg-zinc-100 rounded-xl p-4 flex flex-col items-start gap-3">
      <h1 className="font-bold text-lg">Thành Tiền</h1>
      <Currency price={totalPrice} />
      <Button className="w-full rounded-xl">Thanh Toán</Button>
    </div>
  );
};

export default Summary;
