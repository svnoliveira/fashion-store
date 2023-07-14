"use client"

import { useProductStore } from "@/stores/useProductStore";
import { useUserStore } from "@/stores/useUserStore";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BsPlusCircle } from "react-icons/bs";

export const AdminNav = () => {

  const setAdminModalOpen = useProductStore((store) => store.setAdminModalOpen);
  const { logoutUser, userData } = useUserStore((store) => store);
  const user = userData?.user;
  const { push } = useRouter();
  const pathname = usePathname()
  
  const handleLogout = () => {
    logoutUser();
    push("/login");
  };

  return (
    <section>
      {user &&
      <nav>
         <button onClick={() => handleLogout}>LOGOUT</button>
        <div>
          <Link href={"/admin/home"}>
            <button>START</button>
          </Link>
          <Link href={"/admin/products"}>
            <button>PRODUCTS</button>
          </Link>
        </div>
      </nav>}
      {!user ? <span>ACCESS DENIED</span> :
        <div>
          <div>
            <h1>ADMINISTRATOR PANEL</h1>
            <span>Welcome, Administrator!</span>
          </div>
          {pathname === "/admin/products" && 
          <button onClick={() => setAdminModalOpen(true)}>
            <BsPlusCircle />
            <span>NEW PRODUCT</span>
          </button>}
        </div>}
    </section>
  )
}