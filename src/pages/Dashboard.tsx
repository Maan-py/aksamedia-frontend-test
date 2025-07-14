import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types";

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState(() => localStorage.getItem("QUERY") || "");
  const [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem("CURRENT_PAGE");
    return storedPage ? parseInt(storedPage) : 1;
  });
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    localStorage.setItem("QUERY", query);
  }, [query]);

  useEffect(() => {
    localStorage.setItem("CURRENT_PAGE", currentPage.toString());
  }, [currentPage]);

  const [isInitialLoad, setIsInitialLoad] = useState(true);


  useEffect(() => {
    setIsInitialLoad(false);
  }, []);


  useEffect(() => {
    if (!isInitialLoad) {
      setCurrentPage(1);
    }
  }, [query, filter]);

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [filteredProducts, currentPage, totalPages]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("PRODUCT") || "[]");
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      const isClickInsideDropdown = dropdownRef.current && dropdownRef.current.contains(e.target as Node);

      const isClickOnButton = filterRef.current && filterRef.current.contains(e.target as Node);

      if (!isClickInsideDropdown && !isClickOnButton) {
        setIsFilterOpen(false);
      }
    }

    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  useEffect(() => {
    let result = products;

    if (query !== "") {
      result = result.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
    }

    if (filter !== "") {
      result = result.filter((product) => product.category.toLowerCase() === filter.toLowerCase());
    }

    setFilteredProducts(result);
  }, [query, filter, products]);

  function handleDelete(id: string) {
    const newProducts = products.filter((p: Product) => p.id !== id);
    localStorage.setItem("PRODUCT", JSON.stringify(newProducts));
    setProducts(newProducts);
  }

  return (
    <div className="flex flex-col min-h-screen gap-2 xl:px-15">
      <div className="mx-auto py-5 lg:w-full flex flex-col md:flex-row md:gap-15 justify-between md:mt-5">
        <div className="flex gap-5 lg:mt-0 md:w-1/2">
          <input
            className="border-[#E5E5E5] border-2 rounded-lg py-3 px-5 lg:w-full focus:outline-none focus:border-[#FFC736] w-full"
            type="text"
            placeholder="Search product by name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex mt-5 md:mt-0 gap-5 h-14 md:w-1/2 lg:w-full justify-end">
          <Link to={"/dashboard/create"} className="bg-blue-600 py-2 px-5 rounded-lg text-white min-w-fit flex items-center">
            + Add Product
          </Link>
          <div className="relative min-w-fit">
            <div
              ref={filterRef}
              onClick={() => {
                setIsFilterOpen(!isFilterOpen);
              }}
              className="w-full border-[#E5E5E5] border-2 flex shrink-0 items-center justify-center p-2 gap-2 rounded-lg cursor-pointer hover:border-[#FFC736]">
              <img className="w-10 h-10" src="/filter.png" alt="" />
              <p>Filter</p>
              <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
            <div ref={dropdownRef} className={`bg-white text-black border-[#E5E5E5] border-2 rounded-sm w-78 absolute right-0 top-18 p-7 ${isFilterOpen ? "" : "hidden"}`}>
              <div className="flex flex-col gap-5 mt-1">
                <h1 className="font-bold flex items-center gap-3 font-sans text-xl">Category</h1>
                <div className="flex flex-col items-start gap-5">
                  <label htmlFor="desktop" className="font-semibold flex items-center gap-3 font-sans text-xl">
                    <input
                      className="w-6 h-6 flex appearance-none checked:border-[3px] checked:border-solid checked:border-white rounded-md checked:bg-[#0D5CD7] ring-1 ring-[#0D5CD7]"
                      type="radio"
                      id="desktop"
                      name="category"
                      value="Desktop"
                      onChange={(e) => setFilter(e.target.value)}
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
                      onChange={(e) => setFilter(e.target.value)}
                    />
                    <span>Smartphone</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-x-scroll lg:justify-center w-full xl:px-5">
        <table className="table-auto xl:min-w-full mx-auto">
          <thead className="border-b border-gray-400">
            <tr>
              <th className="text-left p-5">#</th>
              <th className="text-left p-5">Name</th>
              <th className="text-left p-5">Price</th>
              <th className="text-left p-5">Category</th>
              <th className="text-left p-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => {
              return (
                <tr key={product.id}>
                  <td className="p-5">{product.id}</td>
                  <td className="p-5">{product.name}</td>
                  <td className="p-5">Rp. {product.price}</td>
                  <td className="p-5">{product.category}</td>
                  <td className="p-5">
                    <div className="flex gap-2">
                      <Link to={`/dashboard/update/${product.id}`} className="bg-yellow-500 py-3 px-5 rounded-xl text-white cursor-pointer">
                        Update
                      </Link>
                      <button className="bg-red-500 py-3 px-5 rounded-xl text-white cursor-pointer" onClick={() => handleDelete(product.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex gap-2 justify-center text-lg mt-5">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="border-[#E5E5E5] border-2 rounded-lg font-bold text-2xl px-4 py-2 hover:bg-[#0d5cd7] hover:text-white disabled:opacity-50">
          {"<"}
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`border-[#E5E5E5] border-2 rounded-lg px-4 py-2 font-bold text-xl ${page === currentPage ? "bg-[#0d5cd7] text-white" : "hover:bg-[#0d5cd7] hover:text-white"}`}>
                {page}
              </button>
            );
          } else if (page === currentPage - 2 || page === currentPage + 2) {
            return (
              <span key={page} className="px-2 font-bold text-xl">
                ...
              </span>
            );
          } else {
            return null;
          }
        })}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="border-[#E5E5E5] border-2 rounded-lg font-bold text-2xl px-4 py-2 hover:bg-[#0d5cd7] hover:text-white disabled:opacity-50">
          {">"}
        </button>
      </div>
    </div>
  );
}
