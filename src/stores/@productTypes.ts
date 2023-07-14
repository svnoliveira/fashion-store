interface IProduct{
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

interface IAddProductProps{
    product: IProduct;
    token: string;
}

interface IEditProductProps{
    product: IProduct;
    token: string;
}

interface IDeleteProductProps{
    productId: number;
    token: string;
}

interface IProductState{
    loading: boolean;
    error: string;
    message: string;
    products: IProduct[];
    adminModalOpen: boolean;
    setAdminModalOpen: (boolean: boolean) => void;
    loadProducts: () => Promise<IProduct[] | null>;
    addProduct: ({ product, token }: IAddProductProps) => Promise<IProduct | null>;
    editProduct: ({ product, token }: IEditProductProps) => Promise<IProduct | null>
    deleteProduct: ({ productId, token }: IDeleteProductProps) => Promise<true | null>
}