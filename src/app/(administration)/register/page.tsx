"use client"
import { RegisterBanner } from "@/components/Fragments/RegisterBanner"
import { RegisterForm } from "@/components/RegisterForm";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const loadUser = useUserStore.getState().loadUser;
loadUser();

export default function Register() {

  const userData = useUserStore((store) => store.userData);
  const router = useRouter();
 
  useEffect(() => {
    if (userData && window) {
      router.push('/admin/home');
    }
  }, [userData]);

  return (
    <main className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-10 max-w-[1448px] m-auto px-3 pt-14">
      <RegisterBanner />
      <RegisterForm />
    </main>
  )
}
