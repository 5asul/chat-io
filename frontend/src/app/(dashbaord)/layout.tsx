// src/app/layout.tsx
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

import { ReactNode } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer  />
    </div>
  );
}
