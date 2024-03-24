"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import { ImageType } from "@/types";
import Image from "next/image";

interface GalleryProps {
  images: ImageType[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col">
      <Tab.Panels className="w-full h-full p-4">
        {images.map((image) => {
          return (
            <Tab.Panel key={image.id} className="w-full">
              <Image
                src={image.imgUrl}
                alt={image.id}
                sizes="100vw"
                width={0}
                height={0}
                layout="fixed"
                className="w-full h-fit rounded-xl object-cover object-center"
              />
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
      <Tab.List className="w-full h-full grid grid-cols-5 gap-3 border rounded-xl  p-4 ">
        {images.map((image) => {
          return (
            <Tab
              key={image.id}
              className={({ selected }) =>
                classNames(
                  "aspect-square p-1 rounded-xl outline-none",
                  selected ? "ring ring-black shadow" : "ring-transparent"
                )
              }
            >
              <Image
                src={image.imgUrl}
                alt={image.id}
                sizes="100vw"
                width={0}
                height={0}
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </Tab>
          );
        })}
      </Tab.List>
    </Tab.Group>
  );
};

export default Gallery;
