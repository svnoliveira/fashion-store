"use client"
import { AdminModal } from "@/components/AdminModal";
import { AdminProductList } from "@/components/AdminProductList";
import { AdminNav } from "@/components/AdminNav";
import { useEffect } from "react";
import { useUserStore } from "@/stores/useUserStore";
import { useProductStore } from "@/stores/useProductStore";

export default function AdminProducts() {

  const user = useUserStore((store) => store.userData?.user)
  const { loadProducts, adminModalOpen } = useProductStore((store) => store);
  
  useEffect(() => {
    
    const startAdminProducts = async () => {
      const loadUser = useUserStore.getState().loadUser;
      loadUser()
      await loadProducts()
    }
    startAdminProducts()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AdminNav />
      { user && <AdminProductList />}
      {adminModalOpen && <AdminModal />}
    </main>
  )
}