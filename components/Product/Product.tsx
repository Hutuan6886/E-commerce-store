"use client";
import { ProductType } from "@/types";
import React from "react";
import Empty from "../ui/Empty";
import ProductCard from "./ProductCard";

interface ProductProps {
  title: string;
  products: ProductType[];
}
const Product: React.FC<ProductProps> = ({ title, products }) => {
  return (
    <div className="w-[90%] m-auto">
      <h3 className="font-bold text-3xl my-3">{title}</h3>
      <div className="grid grid-cols-5 gap-3">
        {products.length === 0 && <Empty />}
        {products.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
