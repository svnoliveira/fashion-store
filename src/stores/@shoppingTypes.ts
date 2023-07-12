interface IShoppingProduct{
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
}

interface IAddToCartProps{
    product:IProduct;
}

interface IRemoveFromCartProps{
    productId:number;
}

interface IShoppingState{
    shoppingModalOpen: boolean;
    shoppingList: IShoppingProduct[];
    addToCart: ({ product }: IAddToCartProps) => void
    removeFromCart: ({ productId }: IRemoveFromCartProps) => void
}