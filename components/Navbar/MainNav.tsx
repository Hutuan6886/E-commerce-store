"use client";

import { cn } from "@/lib/utils";
import { CategoryType } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
//todo: Quản lý toàn bộ Navbar của store, (Navbar của store là Category của admin-dáhboard)

import React from "react";

interface MainNavProps {
  dataRoutes: CategoryType[]; // interface Category {id: string;name: string;billboard: BillBoard;}
}
const MainNav: React.FC<MainNavProps> = ({ dataRoutes }) => {
  //todo: format dataRoutes
  const pathName = usePathname();
  const formatDataRoutes = dataRoutes.map((route) => ({
    label: route.name,
    href: `/category/${route.id}`,
    active: pathName === `/category/${route.id}`, // Nếu pathName === `/category/${route.id} => active:true
  }));
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      {formatDataRoutes.map((route, index) => {
        return (
          <Link
            className={cn(
              "text-sm font-bold transition-colors hover:text-balck",
              route.active ? "text-black" : "text-neutral-500"
            )}
            key={index}
            href={route.href}
          >
            {route.label}
          </Link>
        );
      })}
    </div>
  );
};

export default MainNav;
