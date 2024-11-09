/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { TfiMenu } from "react-icons/tfi";


export const Navbar: React.FC<{
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ expanded, setExpanded }) => {
  return (
    <div className="flex justify-between items-center h-24 bg-indigo-100 header-right p-4">
      <button className="text-2xl pb-3" onClick={() => setExpanded(!expanded)}>
        <TfiMenu />
      </button>
      <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
        <button className="outline-none focus:outline-none">
          <svg
            className="w-5 text-gray-600 h-5 cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <input
          className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
          id=""
          name=""
          placeholder="Search"
          type="search"
        />
      </div>
      <ul className="flex items-center">
        <li>
          <a
            className=" text-gray-500 flex items-center mr-4 hover:text-blue-100"
            target="_blank"
          >
            <span className="inline-flex mr-1">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </span>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};
