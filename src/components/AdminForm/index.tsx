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
        <form onSubmit={handleSubmit(parseFormData)} >
          <input type="text" placeholder={currentProduct ? currentProduct.name : "NAME"} {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
          <input type="number" placeholder={currentProduct ? `$ ${Number(currentProduct.price.toFixed(2))}` : "PRICE ($)"} {...register("price")} />
          {errors.price && <p>{errors.price.message}</p>}
          <input type="text" placeholder={currentProduct ? currentProduct.image : "IMAGE (URL)"} {...register("image")} />
          {errors.image && <p>{errors.image.message}</p>}
          <textarea id="product__description" cols={30} rows={10} placeholder={currentProduct ? currentProduct.description : "SHORT DESCRIPTION"} {...register("description")}></textarea>
          {errors.description && <p>{errors.description.message}</p>}
          <button type="submit" >
            {currentProduct ? <BsPen /> : <BsPlusCircle />}
            {currentProduct ? "EDIT PRODUCT" : "NEW PRODUCT"}
          </button>
        </form>}
    </>
  )
}