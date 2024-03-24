"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { ColorType, SizeType } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { cn } from "@/lib/utils";

interface FilterProps {
  searchKey: string; //todo: Tên của data sử dụng cho phương thức searchParams()
  name: string; //todo: Tên để hiển thị tiêu đề
  data: SizeType[] | ColorType[]; //todo: Filter nhận 2 giá trị data là Sizes và Colors

  className?: string;
}

const Filter: React.FC<FilterProps> = ({
  searchKey,
  name,
  data,
  className,
}) => {
  const router = useRouter();
  /*
    * url hiện tại
    todo: Lúc dầu data fetchProducts({categoryId}) render ra các products chỉ phụ thuộc 1 giá trị categoryId

    todo: Để lọc dữ liệu thì thêm điều kiện thuộc tính để fetch dữ liệu: fetchProducts({categoryId, sizeId}) hoặc fetchProducts({categoryId, colorId})
    todo: Filter Giá trị đầu vào searchKey='sizeId' data={sizes}
    todo: Khi chưa click filter button, searchKey = 'sizeId' ====> searchParams.get('sizeId') sẽ tìm giá trị sizeId trên giá trị url hiện tại (localhost.../category/{categoryId}), bởi vì url hiện tại không chưa thuộc thính sizeId ===> selectedKey = null ===> HIệu ứng Button default

    todo: Khi click filter button size(Large) 
    todo: ===> selectedValue(id) thực thi ===> current sẽ phân tích chuỗi url hiện tại, bởi vì không có sizeId nên current={} 
    todo: ===> query = {sizedId: giá trị id của size vừa click} 
    todo: ===> current[searchKey] = null 
    todo: ===> Tạo string query url mới, bằng url hiện tại với giá trị query vừa click url = localhost.../category/{categoryId}?sizeId=...... ==> redirect tới url vừa tạo 
    * Thay đổi url mới render data mới
    todo: ===> data fetchProducts({categoryId, sizeId}), lúc nàu data sẽ render phụ thuộc vào 2 giá trị categoryId và sizeId
    todo: ===> selectedKey = sizeId từ lấy từ url  ===> Button đổi màu. 
    todo: Nếu click lại Button đó 1 lần nữa thì if thực thị current[searchKey] === id ===> query[searchKey] = null; ===> Button tắt màu
    ------------------------------------
    * current sẽ mang giá trị sizeId phụ thuộc bởi url hiện tại
    * query sẽ mang giá trị sizeId khi click filter, để url mới được tạo sẽ tạo bằng query đó 
    *===> sau khi redirect sang url mới thì current sẽ mang giá trị của sizeId trước đó ===> nếu click lần thứ 2 vào chính Button đó thì current[searchKey] === sizeId
    -----------------------------------
    * url:... (default)
    * click sizeId=1: current={sizeId=null}, query={sizeId=1} --> url:...?sizeId=1 --> redirect url render product có sizeId=1 --> current={sizeId=1}, query={sizeId=1}  
    * click sizeId=2: current={sizeId=1}, query={sizeId=2} --> url:...?sizeId=2 --> redirect url render product có sizeId=2 --> current={sizeId=2}, query={sizeId=2}
    * click lại sizeId=2: if(current[searchKey] === id) -> query[searchKey] = null --> url:... --> redirect default url --> current={sizeId=null}, query={sizeId=null}
     */

  const searchParams = useSearchParams();
  const selectedKey = searchParams.get(searchKey); //todo: sử dụng để tạo hiệu ứng button sau khi click

  const selectedValue = (id: any) => {
    console.log("id", id);
    const current = queryString.parse(searchParams.toString());
    console.log("current", current);
    const query = {
      [searchKey]: id,
    };
    console.log("query", query);

    if (current[searchKey] === id) {
      query[searchKey] = null;
    }

    const url = queryString.stringifyUrl(
      { url: window.location.href, query }
      // { skipNull: true }
    );
    console.log("url", url);
    router.push(url);
  };

  return (
    <div className="flex flex-col gap-2 my-4">
      <h1 className="font-bold tex-black text-lg">{name}</h1>
      <div className="flex flex-row items-center justify-start gap-2 flex-wrap">
        {data.map((dataItem) => {
          return (
            <Button
              key={dataItem.id}
              className={cn(
                `bg-white text-black border px-2 py-1 ${
                  selectedKey === dataItem.id && "bg-black text-white"
                }`,
                className
              )}
              onClick={() => selectedValue(dataItem.id)}
            >
              {dataItem.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
