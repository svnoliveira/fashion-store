import { create } from "zustand";

export const useShoppingStore = create<IShoppingState>()((set) => ({
    shoppingModalOpen: false,
    shoppingList: [],

    setShoppingModalOpen: (boolean:boolean) => {set(() => ({ shoppingModalOpen: boolean}))},

    addToCart: ({ product }) => {
        set((state) => ({
            shoppingList: state.shoppingList.find((oldProduct) =>
                oldProduct.id === product.id) ?
                state.shoppingList.map((cartProduct) => {
                    if (cartProduct.id === product.id) {
                        return {
                            ...product,
                            quantity: cartProduct.quantity + 1,
                        }
                    } else {
                        return cartProduct;
                    };
                }) : [...state.shoppingList, { ...product, quantity: 1 }]
        }))
    },

    removeFromCart: ({ productId }) => {
        set((state) => ({
            shoppingList: state.shoppingList.some((oldProduct) =>
                oldProduct.id === productId && oldProduct.quantity > 1) ?
                state.shoppingList.map((cartProduct) => {
                    if (cartProduct.id === productId) {
                        return {
                            ...cartProduct,
                            quantity: cartProduct.quantity - 1,
                        }
                    } else {
                        return cartProduct;
                    };
                }) : state.shoppingList.filter((cartProduct) => cartProduct.id !== productId)
        }))
    }
}))