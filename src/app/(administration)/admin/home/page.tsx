"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AdminNav } from '@/components/AdminNav'
import { useUserStore } from '@/stores/useUserStore'

const loadUser = useUserStore.getState().loadUser;
loadUser();

export default function Page() {

  const userData = useUserStore((store) => store.userData);
  const router = useRouter();
 
  useEffect(() => {
    if (!userData && window) {
      router.push('/login');
    }
  }, [userData]);
 
  return (
    <main className="flex flex-col min-h-[69vh] justify-between max-w-[1448px] m-auto px-3">
      <AdminNav />
    </main>
  )
}