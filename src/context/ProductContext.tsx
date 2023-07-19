"use client"
import {Dispatch, ReactNode, SetStateAction, createContext, useContext, useState} from "react";

type Products = Product

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

interface Rating {
  rate: number
  count: number
}

type ProductContextType = {
    products: Products[];
    setProducts: Dispatch<SetStateAction<Products[]>>;
};

const ProductContextDefaultValues: ProductContextType = {
    products: [],
    setProducts: () => {},
};

const ProductContext = createContext<ProductContextType>(ProductContextDefaultValues);

export function useProduct () {
    return useContext(ProductContext)
}

type Props = {
    children: ReactNode;
};

export function ProductProvider({ children }: Props) {
    const [products, setProducts] = useState<Products[]>([]);
    const value: ProductContextType = {
        products,
        setProducts
    }
    return (
        <>
            <ProductContext.Provider value={value}>
                {children}
            </ProductContext.Provider>
        </>
    );
}

