"use client";
import React from "react";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

interface CurrencyProps {
  price: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ price }) => {
  return <div className="text-black">{formatter.format(Number(price))}</div>;
};

export default Currency;
