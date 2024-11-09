import { LuHome } from "react-icons/lu";
import { AiOutlineSchedule } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";


import { MenuItem } from "@/components/SidebarItem";

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
  }
];

export const breadcrumbItems = [
  { text: "Inicio", link: "/" },
  { text: "Dashboard", link: "/dashboard" },
  { text: "Agenda", link: "/agenda" },
  { text: "Usuarios", link: "/users" },
];
