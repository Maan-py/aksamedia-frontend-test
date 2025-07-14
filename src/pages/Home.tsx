// import { useEffect, useRef, useState } from "react";

import { useEffect, useState } from "react";
import type { Product } from "../types";

export default function Home() {
  //   const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  //   const dropdownRef = useRef<HTMLDivElement>(null);
  //   const filterRef = useRef<HTMLDivElement>(null);
  //   useEffect(() => {
  //     function clickOutside(e: MouseEvent) {
  //       const isClickInsideDropdown = dropdownRef.current && dropdownRef.current.contains(e.target as Node);

  //       const isClickOnButton = filterRef.current && filterRef.current.contains(e.target as Node);

  //       if (!isClickInsideDropdown && !isClickOnButton) {
  //         setIsFilterOpen(false);
  //       }
  //     }

  //     document.addEventListener("mousedown", clickOutside);

  //     return () => {
  //       document.removeEventListener("mousedown", clickOutside);
  //     };
  //   }, []);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("PRODUCT") || "[]");
    setProducts(storedProducts);
  }, []);
  return (
    <div className="lg:mx-20">
      <div className="flex flex-col lg:flex-row justify-between mt-12 px-8">
        <h1 className="font-bold text-3xl font-sans">Our Products</h1>
        {/* <div className="flex gap-5 justify-between mt-5 lg:mt-0">
          <input className="border-[#E5E5E5] border-2 rounded-[30px] py-3 px-5 lg:w-full focus:outline-none focus:border-[#FFC736]" type="text" placeholder="Search product by name" />
          <div className="w-14 h-14 border-[#E5E5E5] border-2 flex shrink-0 rounded-full items-center justify-center p-2 lg:hidden">
            <img src="/filter.png" alt="" />
          </div>
        </div> */}
      </div>
      <div className="flex">
        {/* <div className="border-[#E5E5E5] border-2 rounded-[30px] m-8 p-7 w-1/4 hidden lg:block">
          <h1 className="font-bold text-3xl font-sans">Filters</h1>
          <div className="flex flex-col gap-5 mt-5">
            <h1 className="font-bold flex items-center gap-3 font-sans text-xl">Category</h1>
            <div className="flex flex-col items-start gap-5">
              <label htmlFor="desktop" className="font-semibold flex items-center gap-3 font-sans text-xl">
                <input
                  className="w-6 h-6 flex appearance-none checked:border-[3px] checked:border-solid checked:border-white rounded-md checked:bg-[#0D5CD7] ring-1 ring-[#0D5CD7]"
                  type="radio"
                  id="desktop"
                  name="category"
                  value="Desktop"
                />
                <span>Desktop</span>
              </label>
              <label htmlFor="smartphone" className="font-semibold flex items-center gap-3 font-sans text-xl">
                <input
                  className="w-6 h-6 flex appearance-none checked:border-[3px] checked:border-solid checked:border-white rounded-md checked:bg-[#0D5CD7] ring-1 ring-[#0D5CD7]"
                  type="radio"
                  id="smartphone"
                  name="category"
                  value="Smartphone"
                />
                <span>Smartphone</span>
              </label>
            </div>
          </div>
        </div> */}
        <div className="border-[#E5E5E5] border-2 rounded-[30px] m-8 p-7 w-full">
          <h1 className="font-bold text-3xl font-sans">Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-12">
            {products.map((product: Product) => {
              return (
                <div className="border-[#E5E5E5] border-2 rounded-[30px] p-8 hover:border-[#FFC736]">
                  <div className="w-30 h-40 flex items-center mx-auto">
                    <img src={`${product.category === "Desktop" ? "/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png" : "/iphone15pro-digitalmat-gallery-3-202309-Photoroom 1.png"}`} alt="" />
                  </div>
                  <div className="gap-2 flex flex-col">
                    <h1 className="font-bold text-xl">{product.name}</h1>
                    <p className="text-gray-600 text-xl">{product.category}</p>
                    <p className="font-bold text-blue-700 text-xl">Rp. {product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
