import React from "react";
import Link from "next/link";

import { breadcrumbItems } from "@/constants/index";

interface Breadcrumb {
  text: string;
  link?: string;
}

export const Breadcrumbs = () => {
  const items: Breadcrumb[] = breadcrumbItems;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center">
      {" "}
      {/* Agrega clases para estilos */}
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-gray-500 mx-2">&gt;</span>}{" "}
          {/* Agrega separador */}
          {item.link ? (
            <Link className="text-blue-500 hover:underline" href={item.link}>
              {" "}
              {/* Agrega clases para estilos */}
              {item.text}
            </Link>
          ) : (
            <span className="text-gray-700">
              {" "}
              {/* Agrega clases para estilos */}
              {item.text}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
