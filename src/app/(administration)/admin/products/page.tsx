"use client"
import { AdminModal } from "@/components/AdminModal";
import { AdminProductList } from "@/components/AdminProductList";
import { AdminNav } from "@/components/AdminNav";
import { useEffect } from "react";
import { useUserStore } from "@/stores/useUserStore";
import { useProductStore } from "@/stores/useProductStore";
import { useRouter } from "next/navigation";

const loadUser = useUserStore.getState().loadUser;
const loadProducts = useProductStore.getState().loadProducts;
loadUser();
loadProducts();

export default function AdminProducts() {

  const user = useUserStore((store) => store.userData?.user)
  const router = useRouter();
  const adminModalOpen = useProductStore((store) => store.adminModalOpen);

  useEffect(() => {
    if (!user && window) {
      router.push('/login');
    }
    
  }, [user])

  return (
    <>
      <main className="flex flex-col min-h-[65vh] max-w-[1448px] m-auto px-3">
        <AdminNav />
        {user && <AdminProductList />}
      </main>
      {adminModalOpen && <AdminModal />}
    </>
  )
}