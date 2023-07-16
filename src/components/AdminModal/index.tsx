"use client"
import { useProductStore } from "@/stores/useProductStore";
import { AdminForm } from "../AdminForm";
import { TfiClose } from "react-icons/tfi";

export const AdminModal = () => {
  const { setAdminModalOpen, editingProduct } = useProductStore((store) => store)
  const handlePropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  }

  return (
    <section onClick={() => setAdminModalOpen(false)} className="fixed top-0 h-screen w-screen bg-white/40">
      <div onClick={(event) => handlePropagation(event)}>
        <div className="absolute m-auto mt-[5%] left-0 right-0 bg-white w-[90%] md:w-[704px] h-[714px] px-1 py-4 md:px-6 md:py-10">
          <div className="flex justify-between relative">
            {editingProduct ? <h1 className="text-title3">EDIT PRODUCT</h1> : <h1 className="text-title3">NEW PRODUCT</h1>}
            <button className="absolute top-0 md:top-[-10px] right-0 md:right-[15px]"
            type="button" onClick={() => setAdminModalOpen(false)}>
              <TfiClose size={27}/>
            </button>
          </div>
          <AdminForm />
        </div>
      </div>
    </section>
  )
}