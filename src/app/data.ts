import { API_BASE_URL } from "@/services/api"

export async function getProducts(): Promise<IProduct[] | []>{
    try {
        const response = await fetch(`${API_BASE_URL}/products`, { next: { revalidate: 60 } });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}