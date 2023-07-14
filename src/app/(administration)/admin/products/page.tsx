"use client"
import { AdminModal } from "@/components/AdminModal";
import { AdminProductList } from "@/components/AdminProductList";
import { AdminNav } from "@/components/AdminNav";
import { useEffect } from "react";
import { useUserStore } from "@/stores/useUserStore";
import { useProductStore } from "@/stores/useProductStore";

export default function AdminProducts() {

  const loadUser = useUserStore((store) => store.loadUser);
  const loadProducts = useProductStore((store) => store.loadProducts);

  useEffect(() => {
    loadUser()
    console.log("mounted and logged from products")
    loadProducts()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AdminNav />
      <AdminProductList />
      <AdminModal />
    </main>
  )
}