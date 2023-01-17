import create from 'zustand'; 
import { persist } from 'zustand/middleware';

export type ProductType = {
    createdAt: string, 
    updatedAt: string,
    description: string,
    id: string, 
    image: string, 
    price: number, 
    title: string
};

export type CartType = {
    items: Array<ProductType> | []
}; 

const defaultState: CartType = {
    items: []
};

export interface CartStoreProps {
    cart: CartType;
    addToCart: (item: ProductType) => void;
    updateCartItem: (item: ProductType, cartItemIndex: number) => void; 
    removeFromCart: (item: ProductType) => void;
    resetCart: () => void;
}

