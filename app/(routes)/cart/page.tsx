"use client";
import Container from "@/components/ui/Container";
import useStoreCart from "@/hooks/useStoreCart";
import React, { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import Summary from "./components/Summary";

const Page = () => {
  //todo: Bởi vì giáo diện của cart page lấy giá trị từ state tại store cart để render, và sẽ re-render mỗi khi update giá trị, nên sẽ check hydration
  const [isMounted, setIsMounted] = useState(false);
  const storeCart = useStoreCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Container>
      <div className="w-full h-full flex flex-col items-start">
        <h1 className="text-xl lg:text-2xl text-black font-bold my-5 lg:my-10">
          Giỏ Hàng
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">
          <ul className="md:col-span-8">
            {storeCart.cartArray.map((item) => {
              return <CartItem key={item.id} product={item} />;
            })}
          </ul>
          <div className="col-span-4">
            <Summary cartArray={storeCart.cartArray} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
