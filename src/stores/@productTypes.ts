export interface IProduct{
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

interface IProductFromForm{
    name: string;
    price: number;
    description: string;
    image: string;
}

export interface IAddProductProps{
    product: IProductFromForm;
    token: string;
}

export interface IEditProductProps{
    product: IProduct;
    token: string;
}

export interface IDeleteProductProps{
    productId: number;
    token: string;
}

export interface IProductState{
    loading: boolean;
    error: string;
    message: string;
    products: IProduct[];
    adminModalOpen: boolean;
    editingProduct: number;
    setEditingProduct: (productId: number) => void
    setAdminModalOpen: (boolean: boolean) => void;
    loadProducts: () => Promise<IProduct[] | null>;
    addProduct: ({ product, token }: IAddProductProps) => Promise<IProduct | null>;
    editProduct: ({ product, token }: IEditProductProps) => Promise<IProduct | null>
    deleteProduct: ({ productId, token }: IDeleteProductProps) => Promise<true | null>
}