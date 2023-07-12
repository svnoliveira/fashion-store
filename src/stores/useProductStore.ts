"use client"
import { create } from "zustand";
import { api } from "@/services/api";

export const useProductStore = create<IProductState>()((set) => ({
  loading: false,
  error: "",
  products: [],

  loadProducts: async () => {
    try {
      set({loading: true});
      const { data } = await api.get<IProduct[]>("/products");
      set({products: data});
      return data;
    } catch (error) {
      console.log(error);
      set({error: "Failed to load products list"});
      return null;
    } finally {
      set({loading: false});
    };
  },

  addProduct: async ({product, token}) => {
    try {
      set({loading: true});
      const { data } = await api.post<IProduct>("/products", product, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      set((state) => ({products: [...state.products, data]}));
      return data;
    } catch (error) {
      console.log(error);
      set({error: "Failed to add product"});
      return null;
    } finally {
      set({loading: false});
    };
  },

  editProduct: async ({product, token}) => {
    try {
      set({loading: true});
      const { data } = await api.post<IProduct>(`/products/${product.id}`, product, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      set((state) => ({products: state.products.map((oldProduct) => {
        if(oldProduct.id === product.id){
          return {
            ...oldProduct,
            name: data.name,
            price: data.price,
            description: data.description,
            image: data.image,
          }
        } else {
          return oldProduct;
        };
      })}));
      return data;
    } catch (error) {
      console.log(error);
      set({error: "Failed to edit product"});
      return null;
    } finally {
      set({loading: false});
    };
  },

  deleteProduct: async ({ productId, token }) => {
    try {
      set({loading: true});
      await api.delete(`/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      set((state) => 
      ({products: state.products.filter(oldProduct => 
      oldProduct.id !== productId)}));
      return true;
    } catch (error) {
      console.log(error);
      set({error: "Failed to delete product"});
      return null;
    } finally {
      set({loading: false});
    };
  }
}));