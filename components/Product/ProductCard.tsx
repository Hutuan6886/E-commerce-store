"use client";
import { ProductType } from "@/types";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import IconButton from "../ui/IconButton";
import { LuExpand } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Currency from "../ui/Currency";
import { useRouter } from "next/navigation";
import useStorePreviewModal from "@/hooks/useStorePreviewModal";
import useStoreCart from "@/hooks/useStoreCart";

interface ProductCardProps {
  product: ProductType;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  //todo: Gọi store modal
  const storePreviewModal = useStorePreviewModal();
  //todo: gọi cart store
  const storeCart = useStoreCart();

  const selectProduct = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="group cursor-pointer relative aspect-square border rounded-xl p-3 w-full h-full z-10">
      <div
        className="w-full h-full absolute top-0 left-0 z-10"
        onClick={selectProduct}
      ></div>

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
      <h3 className="text-lg font-semibold pt-2">{product.name}</h3>
      <p className="text-sm text-gray-400">{product.category.name}</p>
      <Currency price={product.price} />

      <div className="w-full h-full text-black absolute left-0 top-0 flex flex-row items-center justify-center gap-3 opacity-0 group-hover:opacity-100 group-hover:bg-black group-hover:bg-opacity-20 transition-all duration-300 rounded-xl">
        <IconButton
          onClick={() => storeCart.addProduct(product)}
          icon={
            storeCart.cartArray.find((item) => item.id === product.id) ? (
              <FaHeart />
            ) : (
              <FaRegHeart />
            )
          }
          className={`z-20 
          ${
            storeCart.cartArray.find((item) => item.id === product.id)
              ? "text-red-500"
              : "text-black"
          }
          `}
        />
        <IconButton
          onClick={() => storePreviewModal.openModal(product)}
          icon={<LuExpand />}
          className="z-20"
        />
      </div>
    </div>
  );
};

export default ProductCard;
