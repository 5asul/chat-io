
// src/app/layout.tsx
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";


import { ReactNode } from "react";
import AuthGuard from "../componants/AuthGuard";

export default  function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  
  return (
    <div className="flex flex-col min-h-screen">
       


      <Navbar />
       <AuthGuard>
      <div className="flex-grow">{children}</div>
      </AuthGuard>
      <Footer  />
        
      
    </div>
  );
}
