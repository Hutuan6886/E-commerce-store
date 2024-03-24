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
      <h3 className="font-bold text-xl my-2 lg:text-3xl lg:my-3">{title}</h3>
      {products.length === 0 && <Empty />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
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
