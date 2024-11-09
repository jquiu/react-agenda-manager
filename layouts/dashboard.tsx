import { useState } from "react";

import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div>
      <Sidebar expanded={expanded} />
      <main className="mx-auto lg:ml-80 bg-indigo-50 h-full">
        <Navbar expanded={expanded} setExpanded={setExpanded} />
        {children}
      </main>
    </div>
  );
}
