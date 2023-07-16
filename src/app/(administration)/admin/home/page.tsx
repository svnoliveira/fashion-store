"use client"
import { AdminNav } from "@/components/AdminNav";
import { useUserStore } from "@/stores/useUserStore";
import { useEffect } from "react";

export default function AdminHome() {

  
  useEffect(() => {
    const loadUser = useUserStore.getState().loadUser;
    loadUser()
  }, [])

  return (
    <main className="flex flex-col min-h-[65vh] justify-between max-w-[1448px] m-auto px-3">
      <AdminNav />
    </main>
  )
}