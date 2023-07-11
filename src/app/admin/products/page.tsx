import { AdminModal } from "@/components/AdminModal";
import { AdminProductList } from "@/components/AdminProductList";
import { AdminNav } from "@/components/AdminNav";

export default function AdminProducts() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <AdminNav />
        <AdminProductList />
        <AdminModal />
      </main>
    )
}