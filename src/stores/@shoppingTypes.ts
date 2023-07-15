import { IProduct } from "./@productTypes";

export interface IShoppingProduct{
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
}

export interface IAddToCartProps{
    product:IProduct;
}

export interface IRemoveFromCartProps{
    productId:number;
}

export interface IShoppingState{
    shoppingModalOpen: boolean;
    shoppingList: IShoppingProduct[];
    setShoppingModalOpen: (boolean: boolean) => void
    addToCart: ({ product }: IAddToCartProps) => void
    removeFromCart: ({ productId }: IRemoveFromCartProps) => void
}