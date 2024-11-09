/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable jsx-a11y/anchor-is-valid
import { useState } from "react";

import { SidebarItem } from "./SidebarItem";

import { menuItems } from "@/constants/index";

export const Sidebar: React.FC<{
  expanded: boolean;
}> = ({ expanded }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`${expanded ? "w-80" : "w-20"} relative z-50 transition-all duration-300`}
    >
      {/* Mobile Menu Button */}
      <nav className="lg:hidden py-6 px-6 border-b">
        <div className="flex items-center justify-between">
          <a className="text-2xl font-semibold" href="#">
            <img
              alt=""
              className="h-10"
              src="https://placehold.co/118x30"
              width="auto"
            />
          </a>
          <button
            className="flex items-center rounded focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="text-white bg-indigo-500 hover:bg-indigo-600 block h-8 w-8 p-2 rounded"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`relative z-50 ${isMobileMenuOpen ? "" : "hidden"}`}>
        <div className="fixed lg:hidden inset-0 bg-gray-800 opacity-10" />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-white border-r overflow-y-auto">
          {/* ... contenido del sidebar móvil ... */}
          <ul>
            {menuItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </ul>
          {/* ... más contenido del sidebar móvil ... */}
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block relative z-50">
        <div className="fixed lg:hidden inset-0 bg-gray-800 opacity-10" />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-white border-r overflow-y-auto">
          <div className="flex w-full items-center px-6 pb-8 mb-6 lg:border-b border-blue-50">
            <a className="text-xl font-semibold" href="#">
              <img
                alt=""
                className="h-10"
                src="https://placehold.co/300x40"
                width="auto"
              />
            </a>
          </div>
          <h3 className="mb-2 text-xs uppercase text-gray-500 font-medium p-4">
            Principal
          </h3>
          <ul className="p-2">
            {menuItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </ul>

        </nav>
      </div>
    </div>
  );
};
