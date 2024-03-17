"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { BsFillHandbagFill } from "react-icons/bs";

interface NavActionProps {
  className?: string;
}
const NavAction: React.FC<NavActionProps> = ({ className }) => {
  //todo: Bởi vì tại NavAction là 'use client' render giá trị cart từ server, và cart sử dụng localStorage để reserve(lưu trữ) các thành phần được mounted -> error hydration
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className={cn(className)}>
      <Button className="flex flex-row items-center justify-center gap-1 rounded-full px-4 py-2">
        <BsFillHandbagFill />
        <p className="font-medium">0</p>
      </Button>
    </div>
  );
};

export default NavAction;
