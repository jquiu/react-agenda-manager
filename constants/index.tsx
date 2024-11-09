import { LuHome } from "react-icons/lu";
import { AiOutlineSchedule } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineContactSupport } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";

import { MenuItem } from "@/components/menus/SidebarItem";

export const menuItems: MenuItem[] = [
  {
    text: "Menu inicial",
    link: "/dashboard",
    icon: <LuHome />,
    badge: null,
  },
  {
    text: "Gestión de agendas",
    link: "/agenda",
    icon: <AiOutlineSchedule />,
    badge: null,
  },
  {
    text: "Mensajes",
    link: "/messages",
    icon: <LuMessagesSquare />,
    badge: 4,
  },
  {
    text: "Gestión de usuarios",
    link: "/users",
    icon: <LuUsers />,
    badge: null,
  },
  {
    text: "Reportes",
    link: "/reports",
    icon: <TbReportSearch />,
    badge: null,
  },
  {
    text: "Soporte",
    link: "/support",
    icon: <MdOutlineContactSupport />,
    badge: null,
  },
];

export const breadcrumbItems = [
  { text: "Inicio", link: "/" },
  { text: "Dashboard", link: "/dashboard" },
  { text: "Agenda", link: "/agenda" },
  { text: "Usuarios", link: "/users" },
];

export const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];
