"use client";
import { ProductType } from "@/types";
import React from "react";
import Currency from "./Currency";
import Button from "./Button";
import { FaCheck, FaPlus } from "react-icons/fa";
import useStoreCart from "@/hooks/useStoreCart";

interface InfoProps {
  product: ProductType;
}
const Info: React.FC<InfoProps> = ({ product }) => {
  //todo: gọi store cart
  const storeCart = useStoreCart();
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl">{product.name}</h1>
        <Currency price={product.price} />
      </div>
      <hr className="w-full my-3" />
      <p>
        <span className="font-bold">size:</span> {product.size.name}
      </p>
      <div className="flex flex-row items-center justify-start gap-2">
        <span className="font-bold">Color:</span>
        <div
          style={{ backgroundColor: product.color.value }}
          className="inline-block w-[25px] h-[25px] rounded-full"
        ></div>
      </div>
      <Button
        className="my-2 px-2 py-1 text-xs sm:text-sm md:text-base md:my-3 lg:px-3 lg:py-2"
        onClick={() => {
          storeCart.cartArray.find((item) => item.id === product.id)
            ? storeCart.removeProduct(product.id)
            : storeCart.addProduct(product);
        }}
      >
        {storeCart.cartArray.find((item) => item.id === product.id) ? (
          <div className="w-full h-full flex flex-row items-center justify-center gap-2">
            Đã thêm vào giỏ hàng <FaCheck />
          </div>
        ) : (
          <div className="w-full h-full flex flex-row items-center justify-center gap-2">
            Thêm vào giỏ hàng <FaPlus />
          </div>
        )}
      </Button>
    </div>
  );
};

export default Info;
