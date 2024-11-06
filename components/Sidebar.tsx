import {
  ArrowRightIcon,
  ArrowLeftIcon,
  HomeIcon,
  CogIcon,
  UserIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

import SidebarItem from "./SidebarItem";

// This sidebar component is for both mobile and desktop
function Sidebar({ children, expanded, setExpanded }: any) {
  return (
    <div className="relative">
      <div
        className={`fixed inset-0 -z-10 block bg-gray-400  ${expanded ? "block sm:hidden" : "hidden"}`}
      />
      <aside
        className={`box-border h-screen transition-all ${expanded ? "w-5/6 sm:w-64" : "w-0 sm:w-20"}`}
      >
        <nav className="flex h-full flex-col border-r bg-white shadow-sm">
          <div className="flex items-center justify-between p-4 pb-2">
            <img
              alt=""
              className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"
                }`}
              src="https://img.logoipsum.com/243.svg"
            />
            <div className={`${expanded ? "" : "hidden sm:block"}`}>
              <button
                className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
                onClick={() => setExpanded((curr: boolean) => !curr)}
              >
                {expanded ? (
                  <ArrowRightIcon className="h-6 w-6" />
                ) : (
                  <ArrowLeftIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          <ul className="flex-1 px-3">{children}</ul>
          <div className="flex border-t p-3">
            <img
              alt=""
              className="h-10 w-10 rounded-md"
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=settings&rounded=true"
            />
            <div
              className={`
              flex items-center justify-between
              overflow-hidden transition-all ${expanded ? "ml-3 w-52" : "w-0"}
          `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Settings</h4>
              </div>
              <EllipsisVerticalIcon className="h-6 w-6" />
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
}

export default function MakeSidebar() {
  const [expanded, setExpanded] = useState(true);
  const navBarItems = [
    {
      icon: <HomeIcon />,
      text: "Home",
      active: true,
    },
    {
      icon: <UserIcon />,
      subMenu: [
        {
          icon: <UserIcon />,
          text: "Profile",
        }
      ],
      text: "Profile",
    }
  ];

  // Desktop Sidebar
  return (
    <Sidebar expanded={expanded} setExpanded={setExpanded}>
      {navBarItems.map((item, index) => (
        <SidebarItem key={index} expanded={expanded} {...item} />
      ))}
    </Sidebar>
  );
}
