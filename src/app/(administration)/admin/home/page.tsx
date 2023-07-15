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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AdminNav />
    </main>
  )
}