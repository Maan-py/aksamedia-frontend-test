import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { removeFromLocalStorage } from "../utils";

interface Props {
  user: string;
  setUser: (user: { name: string; username: string }) => void;
}

export default function Navbar({ user, setUser }: Props) {
  const navigate = useNavigate();
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
    <nav className="bg-[#0d5cd7] text-white flex justify-between p-5 sticky top-0">
      {/* Desktop */}
      <div className="hidden xl:block w-full">
        <div className="flex items-center py-3 px-15 justify-between">
          <ul>
            <li>
              <Link to={"/edit-profile"} className="flex items-center">
                Edit Profile
              </Link>
            </li>
          </ul>
          <div className="flex gap-5">
            <h1 className="font-bold text-lg my-auto">{user}</h1>
            <button className="bg-red-600 cursor-pointer p-2 rounded-lg hover:opacity-70" onClick={logOut}>
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
            <Link to={"/edit-profile"} className="w-full block cursor-pointer hover:bg-[#0d5cd7] hover:text-white hover:opacity-70 p-3 rounded-sm">
              Edit Profile
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
