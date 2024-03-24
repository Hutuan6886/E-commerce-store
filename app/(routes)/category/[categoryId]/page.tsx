import fetchCategory from "@/actions/fetchCategory";
import fetchProducts from "@/actions/fetchProducts";
import Billboard from "@/components/Billboard/Billboard";
import Product from "@/components/Product/Product";
import Container from "@/components/ui/Container";
import React from "react";
import Filter from "./components/Filter";
import fetchSizes from "@/actions/fetchSizes";
import fetchColors from "@/actions/fetchColors";
import MobileFilter from "./components/MobileFilter";

const page = async ({
  params,
  searchParams,
}: {
  params: { categoryId: string };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}) => {
  //todo: fetchCategory để lấy id của category khi click vào, sau đó get product của category đó
  const category = await fetchCategory(params.categoryId);

  const categoryProduct = await fetchProducts({
    categoryId: params.categoryId, //*: GET toàn bộ product của category này dựa vào categoryId

    //*: khi sử dụng Filter để lọc color và size, thì categoryProduct sẽ phụ thuộc thêm 2 thành phần sizeId và colorId nữa để fetch categoryProduct, categoryProduct sẽ thay đổi giá trị data trong quá trình
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });

  //todo: fetchSizes và fetchColors
  const sizes = await fetchSizes();
  const colors = await fetchColors();

  return (
    <Container>
      <div className="flex flex-col">
        <Billboard dataBillboard={category?.billboard} />

        <div className="grid grid-col-1 sm:grid-cols-5 w-[95%] m-auto">
          <div>
            {/* //todo: MobileFilter */}
            <MobileFilter
              className="md:hidden"
              dataSizes={sizes}
              dataColors={colors}
            />
            <div className="hidden md:flex flex-col items-start">
              <Filter searchKey="sizeId" name="Size" data={sizes} />
              <Filter searchKey="colorId" name="Color" data={colors} />
            </div>
          </div>
          <div className="sm:col-span-4">
            <Product
              title={`Sảm phẩm ${category?.name}`}
              products={categoryProduct}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
