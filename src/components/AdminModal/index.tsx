"use client"
import { useProductStore } from "@/stores/useProductStore";
import { AdminForm } from "../AdminForm";

export const AdminModal = () => {
  const { setAdminModalOpen, editingProduct } = useProductStore((store) => store)
  const handlePropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  }

  return (
    <section onClick={() => setAdminModalOpen(false)} className="fixed top-0 h-screen w-screen bg-white/40">
      <div onClick={(event) => handlePropagation(event)} className="relative max-w-[1728px] m-auto">
        <div className="absolute top-0 right-0 bg-white">
          <div>
            {editingProduct ? <h1>EDIT PRODUCT</h1> : <h1>NEW PRODUCT</h1>}
            <button type="button" onClick={() => setAdminModalOpen(false)}>X</button>
          </div>
          <AdminForm />
        </div>
      </div>
    </section>
  )
}