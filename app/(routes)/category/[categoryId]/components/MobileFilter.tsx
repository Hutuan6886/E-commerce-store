"use client";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ColorType, SizeType } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Filter from "./Filter";

interface MobileFilterProps {
  dataSizes: SizeType[];
  dataColors: ColorType[];
  className?: string;
}
const MobileFilter: React.FC<MobileFilterProps> = ({
  dataSizes,
  dataColors,
  className,
}) => {
  const [openFilterModel, setOpenFilterModal] = useState(false);
  return (
    <div className={cn(className)}>
      <Button
        className=" flex flex-row items-center justify-center gap-2 px-3 py-1 lg:px-5 lg:py-3"
        onClick={() => setOpenFilterModal(true)}
      >
        Lọc
        <FaPlus />
      </Button>
      <Transition appear show={openFilterModel}>
        <Dialog
          as="div"
          className="relative z-10 flex flex-row items-start"
          onClose={() => {
            setOpenFilterModal(false);
          }}
        >
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className=" w-[50%] h-full fixed ml-auto inset-0 overflow-y-auto">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="translate-0"
              enterTo="translate-100"
              leave="ease-in duration-200"
              leaveFrom="translate-100"
              leaveTo="translate-0"
              className="w-full h-full"
            >
              <Dialog.Panel className="w-full max-w-md h-full transform overflow-hidden rounded-l-2xl bg-white p-6 text-left shadow-xl transition-all">
                <div className="mt-2">
                  <Filter
                    searchKey="sizeId"
                    name="Sizes"
                    data={dataSizes}
                    className="text-sm lg:text-base"
                  />
                  <Filter
                    searchKey="colorId"
                    name="Colors"
                    data={dataColors}
                    className="text-sm lg:text-base"
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MobileFilter;
