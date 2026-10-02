import { ICartItem, ITour } from "@/components/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ICartStore {
  items: ICartItem[];
  addItem: (item: ITour) => void;
  removeItem: (id: string) => void;
  increaseItem: (id: string) => void;
  decreaseItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<ICartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const exist = state.items.find(
            (cartItem) => cartItem._id === item._id,
          );
          if (exist) {
            return {
              items: state.items.map((cartItem) =>
                cartItem._id === item._id
                  ? {
                      ...cartItem,
                      quantity: cartItem.quantity + 1,
                    }
                  : cartItem,
              ),
            };
          }
          return {
            items: [...state.items, { ...item, quantity: 1 }],
          };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item._id !== id),
        })),
      increaseItem: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item._id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        })),
      decreaseItem: (id) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item._id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart",
    },
  ),
);

export const totalQuantityCount = (state: ICartStore) =>
  state.items.reduce((sum, item) => sum + item.quantity, 0);

export const totalPriceCount = (state : ICartStore) =>
  state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const cartItemsCount = (state: ICartStore) => state.items.length;