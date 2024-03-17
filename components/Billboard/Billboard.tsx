import React from "react";
import { BillBoard } from "@/types";

interface BillboardProps {
  dataBillboard: BillBoard;
}
const Billboard: React.FC<BillboardProps> = ({ dataBillboard }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 w-full aspect-square md:aspect-[2.4/1] overflow-hidden">
      <div
        style={{ backgroundImage: `url(${dataBillboard.imgUrl})` }}
        className="w-full h-full bg-cover bg-no-repeat bg-center rounded-xl relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-3xl sm:text-5xl lg:text-8xl">
          {dataBillboard.label}
        </div>
      </div>
    </div>
  );
};

export default Billboard;
