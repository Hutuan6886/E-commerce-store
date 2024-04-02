import fetchProduct from "@/actions/fetchProduct";
import fetchProducts from "@/actions/fetchProducts";
import Product from "@/components/Product/Product";
import Container from "@/components/ui/Container";
import Gallery from "@/components/ui/Gallery";
import Info from "@/components/ui/Info";
import { ProductType } from "@/types";
import React from "react";

const page = async ({ params }: { params: { productId: string } }) => {
  const product = await fetchProduct(params.productId);
  if (!product) {
    return null;
  }
  const productsByCategory = await fetchProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="w-full h-full">
      <Container>
        {/* HIển thị thông tin sản phẩm */}
        <div className="w-[95%] m-auto lg:grid lg:grid-cols-2 lg:gap-4">
          <Gallery images={product.images} />
          <Info product={product} />
        </div>
        {/* Hiển thị các sản phẩm chung category */}
        <Product
          title="Sản phẩm liên quan"
          products={productsByCategory.filter(
            (productItem) => productItem.id !== product.id
          )}
        />
      </Container>
    </div>
  );
};

export default page;
