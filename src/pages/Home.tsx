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
        <div className="flex gap-5 justify-between mt-5 lg:mt-0">
          <input className="border-[#E5E5E5] border-2 rounded-[30px] py-3 px-5 lg:w-full focus:outline-none focus:border-[#FFC736]" type="text" placeholder="Search product by name" />
          <div className="w-14 h-14 border-[#E5E5E5] border-2 flex shrink-0 rounded-full items-center justify-center p-2 lg:hidden">
            <img src="/filter.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="border-[#E5E5E5] border-2 rounded-[30px] m-8 p-7 w-1/4 hidden lg:block">
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
        </div>
        <div className="border-[#E5E5E5] border-2 rounded-[30px] m-8 p-7 lg:w-3/4 w-full">
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
      <div className="flex gap-2 justify-center m-5 text-lg">
        <div className="border-[#E5E5E5] border-2 rounded-lg font-bold text-2xl px-4 py-2 hover:bg-[#0d5cd7] hover:text-white">{`<`}</div>
        <div className="border-[#E5E5E5] border-2 rounded-lg px-4 py-2 hover:bg-[#0d5cd7] hover:text-white font-bold text-xl">1</div>
        <div className="border-[#E5E5E5] border-2 rounded-lg px-4 py-2 hover:bg-[#0d5cd7] hover:text-white font-bold text-xl">2</div>
        <div className="border-[#E5E5E5] border-2 rounded-lg px-4 py-2 hover:bg-[#0d5cd7] hover:text-white font-bold text-xl">...</div>
        <div className="border-[#E5E5E5] border-2 rounded-lg px-4 py-2 hover:bg-[#0d5cd7] hover:text-white font-bold text-xl">8</div>
        <div className="border-[#E5E5E5] border-2 rounded-lg font-bold text-2xl px-4 py-2 hover:bg-[#0d5cd7] hover:text-white">{`>`}</div>
      </div>

      {/* <!-- Create modal --> */}
      <div id="createProductModal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add Product</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-target="createProductModal"
                data-modal-toggle="createProductModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
