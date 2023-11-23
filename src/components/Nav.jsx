import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
export const Nav = ({ onClickShoppingBtn }) => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="relative z-10 flex flex-wrap justify-between items-center z-1">
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>

      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="hover:bg-gray-100 rounded-lg p-2 focus:ring-2 focus:ring-gray-200 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700"
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div
        className={`${
          !isMobileMenuShown && "hidden"
        } w-full lg:w-auto lg:block`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row  bg-gray-50 border lg:bg-transparent border-gray-50 lg:border-none text-lg rounded-lg p-4 lg:dark:text-white">
          {ROUTES.map((route, i) => (
            <li
              className={`lg:hover:bg-transparent lg:hover:text-blue-500   rounded px-3 py-2 cursor-pointer ${
                i === 0
                  ? "bg-blue-500 text-white lg:text-blue-500 lg:bg-transparent"
                  : "hover:bg-gray-100"
              } ${(i === 3 || i === 4) && "lg:text-white"}`}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={onClickShoppingBtn}
        className="fixed left-4 bottom-4 lg:static lg:mr-8"
      >
        <div className="btn-press-anim flex-center rounded-full h-12 w-12 bg-white shadow-md cursor-pointer">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};
