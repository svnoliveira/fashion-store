"use client"
import { AdminNav } from "@/components/AdminNav";
import { useUserStore } from "@/stores/useUserStore";
import { useEffect } from "react";

export default function AdminHome() {

  const loadUser = useUserStore((store) => store.loadUser);

  useEffect(() => {
    loadUser()
    console.log("mounted and logged from home")
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AdminNav />
    </main>
  )
}