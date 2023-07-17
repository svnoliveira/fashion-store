"use client"
import { Banner } from "@/components/Fragments/Banner";
import { LoginForm } from "@/components/LoginForm";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const loadUser = useUserStore.getState().loadUser;
loadUser();

export default function Login() {

  const userData = useUserStore((store) => store.userData);
  const router = useRouter();
 
  useEffect(() => {
    if (userData && window) {
      router.push('/admin/home');
    }
  }, [userData]);

  return (
    <main className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-10 max-w-[1448px] m-auto px-3 pt-14">
      <Banner/>
      <LoginForm />
    </main>
  )
}
