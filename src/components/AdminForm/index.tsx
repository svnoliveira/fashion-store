import { BsPen, BsPlusCircle } from "react-icons/bs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TAdminFormValues, adminFormSchema } from "./schema";
import { useUserStore } from "@/stores/useUserStore";
import { useProductStore } from "@/stores/useProductStore";
import { removeSpaces } from "@/services/utilities";

export const AdminForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAdminFormValues>({
    resolver: zodResolver(adminFormSchema),
  });
  
  const token = useUserStore((store) => store.userData!.accessToken)
  const { setAdminModalOpen, editingProduct, products, addProduct, editProduct, loading, message } = useProductStore((store) => store)
  const currentProduct = products.find((product) => product.id === editingProduct);

  const parseFormData = async (formData: TAdminFormValues) => {
    if (products.find((product) => 
    removeSpaces(product.name) === removeSpaces(formData.name))) {
      alert("Item name already in the store!")
      return
    } else if (currentProduct) {
      await editProduct({
        product: {
          name: formData.name,
          price: Number(formData.price),
          image: formData.image,
          description: formData.description,
          id: currentProduct.id
        },
        token
      }) && setAdminModalOpen(false)
    } else {
      await addProduct({
        product: {
          name: formData.name,
          price: Number(formData.price),
          image: formData.image,
          description: formData.description,
        },
        token
      }) && setAdminModalOpen(false)
    }
  }

  return (
    <>
      {loading ? <span>LOADING</span> :
        <form onSubmit={handleSubmit(parseFormData)} 
        className="flex flex-col justify-between w-full h-full pt-6">
          <input className="bg-grey h-20 p-6 text-paragraph w-full"
          type="text" placeholder={currentProduct ? currentProduct.name : "NAME"} {...register("name")} />
          {errors.name && <p className="text-red">{errors.name.message}</p>}
          <input className="bg-grey h-20 p-6 text-paragraph w-full"
          type="number" placeholder={currentProduct ? `$ ${Number(currentProduct.price.toFixed(2))}` : "PRICE ($)"} {...register("price")} />
          {errors.price && <p className="text-red">{errors.price.message}</p>}
          <input className="bg-grey h-20 p-6 text-paragraph w-full"
          type="text" placeholder={currentProduct ? currentProduct.image : "IMAGE (URL)"} {...register("image")} />
          {errors.image && <p className="text-red">{errors.image.message}</p>}
          <textarea className="bg-grey h-28 p-6 text-paragraph w-full"
          id="product__description" cols={30} rows={10} placeholder={currentProduct ? currentProduct.description : "SHORT DESCRIPTION"} {...register("description")}></textarea>
          {errors.description && <p className="text-red">{errors.description.message}</p>}
          <button className="flex gap-3 bg-black text-white justify-center items-center w-full lg:w-fit px-4 py-3 hover:opacity-50 text-small-price tracking-[0.2rem] border-2 border-solid border-black"
          type="submit" >
            {currentProduct ? <BsPen size={30}/> : <BsPlusCircle size={30}/>}
            {currentProduct ? "EDIT PRODUCT" : "NEW PRODUCT"}
          </button>
        </form>}
    </>
  )
}