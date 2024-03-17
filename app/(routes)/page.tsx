import fetchBillboards from "@/actions/fetchBillboards";
import fetchProducts from "@/actions/fetchProducts";
import Billboard from "@/components/Billboard/Billboard";
import Product from "@/components/Product/Product";
import { BillBoardType, ProductType } from "@/types";
import React from "react";

const HomePage = async () => {
  const dataBillboard: BillBoardType = await fetchBillboards(
    "ab2b17d1-c53e-449a-bef9-a24713d65753"
  );

  const dataProduct: ProductType[] = await fetchProducts({
    categoryId: "1",
    isFeatured: true,
    isArchived: false,
  });

  return (
    <div>
      <Billboard dataBillboard={dataBillboard} />
      <Product title="Sản phẩm nổi bật" products={dataProduct} />
    </div>
  );
};

export default HomePage;
