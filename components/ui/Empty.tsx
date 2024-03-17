import { cn } from "@/lib/utils";
import React from "react";

interface EmptyProps {
  className?: string;
}
const Empty: React.FC<EmptyProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "text-zinc-500 text-sm font-medium italic text-center",
        className
      )}
    >
      Không có sản phẩm nào tồn tại !
    </div>
  );
};

export default Empty;
