/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable jsx-a11y/anchor-is-valid

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export interface MenuItem {
  text: string;
  link: string;
  icon?: React.ReactNode;
  badge?: number | null;
}

export const SidebarItem: React.FC<MenuItem> = ({
  text,
  link,
  icon,
  badge,
}) => {
  const router = useRouter();
  const isActive = router.pathname === link;

  return (
    <li>
      <Link legacyBehavior href={link}>
        <a
          className={`flex items-center pl-3 py-3 pr-4 rounded
          ${isActive ? "text-white bg-primary-500" : "text-gray-500 hover:bg-indigo-50"}`}
        >
          {icon && <span className="inline-block mr-3">{icon}</span>}
          <span>{text}</span>
          {badge && (
            <span className="flex justify-center items-center ml-auto bg-indigo-500 w-6 h-6 text-white text-xs rounded-full">
              {badge}
            </span>
          )}
        </a>
      </Link>
    </li>
  );
};
