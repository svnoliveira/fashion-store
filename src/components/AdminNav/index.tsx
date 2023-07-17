"use client"

import { useProductStore } from "@/stores/useProductStore";
import { useUserStore } from "@/stores/useUserStore";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BsPlusCircle } from "react-icons/bs";

export const AdminNav = () => {

  const { setAdminModalOpen, setEditingProduct } = useProductStore((store) => store);
  const { logoutUser, userData } = useUserStore((store) => store);
  const user = userData?.user;
  const { push } = useRouter();
  const pathname = usePathname()
  
  const handleLogout = () => {
    logoutUser();
    push("/login");
  };

  const handleAddProduct = () => {
    setEditingProduct(0)
    setAdminModalOpen(true)
  }

  return (
    <section className="mt-11">
      {user &&
      <nav className="flex flex-col gap-10 sm:flex-row-reverse items-center sm:justify-between">
         <button onClick={() => handleLogout()}
         className="flex min-w-[210px] justify-center bg-black text-white items-center w-fit px-4 py-3 hover:opacity-50 text-small-price tracking-[0.2rem] border-2 border-solid border-black"
         >LOGOUT</button>
        <div className="flex gap-9">
          <Link href={"/admin/home"}>
            <button className="text-menu">START</button>
          </Link>
          <Link href={"/admin/products"}>
            <button className="text-menu">PRODUCTS</button>
          </Link>
        </div>
      </nav>}
      {!user ? <span>ACCESS DENIED</span> :
        <div>
          <div>
            <h1 className="text-title2-m md:text-title2 mb-9 text-center sm:text-left">
              {pathname === "/admin/home" ? "ADMINISTRATOR PANEL" : "PRODUCTS"}</h1>
            {pathname === "/admin/home" && <span className="text-paragraph block text-center sm:text-left">Welcome, Administrator!</span>}
          </div>
          {pathname === "/admin/products" && 
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-paragraph mb-9">Manage the products in the catalog</p>
            <button onClick={() => handleAddProduct()}
            className="flex gap-3 mb-9 bg-black text-white items-center w-fit px-4 py-3 hover:opacity-50 text-small-price tracking-[0.2rem] border-2 border-solid border-black">
            <BsPlusCircle size={29}/>
            <span>NEW PRODUCT</span>
          </button>
          </div>
          }
        </div>}
    </section>
  )
}