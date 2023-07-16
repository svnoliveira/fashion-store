"use client"
import { AdminModal } from "@/components/AdminModal";
import { AdminProductList } from "@/components/AdminProductList";
import { AdminNav } from "@/components/AdminNav";
import { useEffect } from "react";
import { useUserStore } from "@/stores/useUserStore";
import { useProductStore } from "@/stores/useProductStore";

export default function AdminProducts() {

  const user = useUserStore((store) => store.userData?.user)
  const adminModalOpen = useProductStore((store) => store.adminModalOpen);

  useEffect(() => {

    const startAdminProducts = async () => {
      const loadUser = useUserStore.getState().loadUser;
      const loadProducts = useProductStore.getState().loadProducts;
      loadUser()
      await loadProducts()
    }
    startAdminProducts()
  }, [])

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