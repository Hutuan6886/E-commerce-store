"use client";

//todo: Container sử dụng để tự động extend(mở rộng) layout khi screen lớn, để các element trong layout vẫn cân đối
import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
