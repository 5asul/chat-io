
import { ReactNode } from "react";
import AuthNavbar from "./componants/AuthNavbar";

export default async function AuthLayout({ children }: { children: ReactNode }) {
  
  

  

  return (
    <>
      <AuthNavbar />
      <main className=" container mx-auto mt-8">
        {children}
      </main>
    </>
  )
}