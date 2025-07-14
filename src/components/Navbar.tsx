import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";

import { removeFromLocalStorage } from "../utils";

interface Props {
  user: string;
  setUser: (user: { name: string; username: string }) => void;
}

export default function Navbar({ user, setUser }: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      const isClickInsideDropdown = dropdownRef.current && dropdownRef.current.contains(e.target as Node);

      const isClickOnButton = hamburgerRef.current && hamburgerRef.current.contains(e.target as Node);

      if (!isClickInsideDropdown && !isClickOnButton) {
        setIsHamburgerOpen(false);
      }
    }

    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  function logOut() {
    removeFromLocalStorage();
    setUser({
      name: "",
      username: "",
    });
    navigate("/login");
  }
  return (
    <nav className="bg-[#0d5cd7] z-50 text-white flex justify-between p-5 sticky top-0">
      {/* Desktop */}
      <div className="flex justify-center items-center dark:bg-gray-800">
        <button onClick="(() => document.body.classList.toggle('dark'))()" className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg className="fillRule-700 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg className="fillRule-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div className="hidden xl:block w-full">
        <div className="flex items-center py-3 px-15 justify-between">
          <ul className="flex">
            <li>
              <Link to={"/"} className={`w-full block cursor-pointer hover:bg-[#0d5cd7] hover:text-white hover:opacity-70 p-3 rounded-sm ${pathname === "/" ? "font-extrabold" : ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/edit-profile"} className={`w-full block cursor-pointer hover:bg-[#0d5cd7] hover:text-white hover:opacity-70 p-3 rounded-sm ${pathname === "/edit-profile" ? "font-extrabold" : ""}`}>
                Edit Profile
              </Link>
            </li>
            <li>
              <Link to={"/dashboard"} className={`w-full block cursor-pointer hover:bg-[#0d5cd7] hover:text-white hover:opacity-70 p-3 rounded-sm ${pathname === "/dashboard" ? "font-extrabold" : ""}`}>
                Dashboard
              </Link>
            </li>
          </ul>
          <div className="flex gap-5">
            <h1 className="font-bold text-lg my-auto">{user}</h1>
            <button className="bg-red-600 cursor-pointer py-2 px-4 rounded-lg hover:opacity-70" onClick={logOut}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <h1 className="font-bold font-sans text-3xl"></h1>
      {/* Mobile */}
      <div>
        <button
          className="block xl:hidden cursor-pointer"
          onClick={() => {
            setIsHamburgerOpen(!isHamburgerOpen);
          }}
          ref={hamburgerRef}>
          <img width={40} src={`${isHamburgerOpen ? "white-cross.svg" : "/white-hamburger-menu.svg"}`} alt="" />
        </button>
        <div className="relative">
          <div ref={dropdownRef} className={`bg-white text-black border-[#E5E5E5] rounded-sm w-72 absolute right-1 top-2 ${isHamburgerOpen ? "" : "hidden"}`}>
            <div className="font-bold text-lg p-3 rounded-sm">{user}</div>
            <Link to={"/"} className={`w-full block cursor-pointer hover:bg-[#0d5cd7] hover:text-white hover:opacity-70 p-3 rounded-sm ${pathname === "/" ? "font-extrabold" : ""}`} onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
              Home
            </Link>
            <Link
              to={"/edit-profile"}
              className={`w-full block cursor-pointer hover:bg-[#0d5cd7] hover:text-white hover:opacity-70 p-3 rounded-sm ${pathname === "/edit-profile" ? "font-extrabold" : ""}`}
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
              Edit Profile
            </Link>
            <Link
              to={"/dashboard"}
              className={`w-full block cursor-pointer hover:bg-[#0d5cd7] hover:text-white hover:opacity-70 p-3 rounded-sm ${pathname === "/dashboard" ? "font-extrabold" : ""}`}
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
              Dashboard
            </Link>
            <button
              className="text-start text-red-600 cursor-pointer hover:bg-red-600 hover:text-white hover:opacity-70 p-3 rounded-sm w-full"
              onClick={() => {
                logOut();
                setIsHamburgerOpen(!isHamburgerOpen);
              }}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
