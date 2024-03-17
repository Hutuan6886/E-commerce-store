"use client";
import { ProductType } from "@/types";
import Image from "next/image";
import React from "react";
import IconButton from "../ui/IconButton";
import { LuExpand } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import Currency from "../ui/Currency";

interface ProductCardProps {
  product: ProductType;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer relative aspect-square border rounded-xl p-3">
      <div className="w-full h-full">
        <Image
          src={product.images[0].imgUrl}
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-full rounded-xl"
          alt="productCard-img"
        />
      </div>
      <div className="w-full h-full absolute left-0 top-0 flex flex-row items-center justify-center gap-3 opacity-0 group-hover:opacity-100 group-hover:bg-black group-hover:bg-opacity-20 transition-all duration-300 rounded-xl ">
        <IconButton onClick={() => {}} icon={<FaRegHeart />} />
        <IconButton className="" onClick={() => {}} icon={<LuExpand />} />
      </div>
      <div>
        <h3 className="text-lg font-semibold pt-2">{product.name}</h3>
        <p className="text-sm text-gray-400">{product.category.name}</p>
        <Currency price={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
