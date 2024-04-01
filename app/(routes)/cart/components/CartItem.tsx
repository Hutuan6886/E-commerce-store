"use client";
import Currency from "@/components/ui/Currency";
import useStoreCart from "@/hooks/useStoreCart";
import { ProductType } from "@/types";
import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";

interface CartItemProps {
  product: ProductType;
}
const CartItem: React.FC<CartItemProps> = ({ product }) => {
  //todo: gọi cart store
  const storeCart = useStoreCart();
  return (
    <li className="relative grid grid-cols-12 gap-4 shadow-md p-3 my-4 rounded-xl">
      <div
        className="absolute top-1 right-1 cursor-pointer"
        onClick={() => {
          storeCart.removeProduct(product.id);
        }}
      >
        <IoClose />
      </div>
      <div className="col-span-3">
        <Image
          src={product.images[0].imgUrl}
          alt={product.id}
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-full rounded-xl"
        />
      </div>
      <div className="col-span-9 flex flex-col gap-4">
        <div className="grid grid-cols-2">
          <h1 className="text-lg font-semibold">{product.name}</h1>
          <div className="text-zinc-500 text-sm">
            {product.size.name} | {product.color.name}
          </div>
        </div>
        <Currency price={product.price} />
      </div>
    </li>
  );
};

export default CartItem;
