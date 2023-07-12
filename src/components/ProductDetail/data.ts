import { api } from "@/services/api"

export async function getProducts() {
    try {
        const { data } = await api.get<IProduct[]>("/products");
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}