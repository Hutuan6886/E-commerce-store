import React from "react";
import Container from "@/components/ui/Container";
import MainNav from "./MainNav";
import Link from "next/link";
import fetchCategories from "@/actions/fetchCategories";
import { CategoryType } from "@/types";
import NavAction from "./NavAction";

const Navbar = async () => {
  //todo: Call api lấy dataCategories sử dụng để làm tiêu đề navbar
  const dataNav: CategoryType[] = await fetchCategories();

  return (
    <nav>
      <Container>
        <div className="flex flex-row items-center justify-start gap-5">
          <Link href="/" className="my-3">
            <p className="text-black font-bold text-md text-2xl">SHOPNAME</p>
          </Link>
          <MainNav dataRoutes={dataNav} />
          <NavAction
            className="ml-auto flex items-center"
          />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
