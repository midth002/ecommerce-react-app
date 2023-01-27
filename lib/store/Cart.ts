import { create } from 'zustand'; 
import { persist } from 'zustand/middleware';

export type ProductType = {
    // createdAt: string, 
    // updatedAt: string,
    // description: string,
    id: string, 
    image: string, 
    // price: number, 
    name: string
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

const useCartStore = create<CartStoreProps>()(
    persist(
      (set) => ({
        cart: defaultState,
        addToCart: (item: ProductType) =>
          set((state) => ({
            cart: {
              items: [...state.cart.items, item]
            }
          })),
        removeFromCart: (item: ProductType) =>
          set((state) => ({
            cart: {
              items: state.cart.items.filter((i: ProductType) => item.id !== i.id)
            }
          })),
        updateCartItem: (item: ProductType, cartItemIndex: number) =>
          set((state) => {
            const cartItems = [...state.cart.items];
            cartItems[cartItemIndex] = item;
            return {
              cart: {
                items: cartItems
              }
            };
          }),
        resetCart: () =>
          set(() => ({
            cart: defaultState
          })),
        
      }),
      { name: "my-store" }
    )
  );


export default useCartStore;