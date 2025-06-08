import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      orderDetails: null,
      setOrderDetails: (details) => set({ orderDetails: details }),

      cartItems: [],
      addToCart: (event, quantity) => {
        const existingItem = get().cartItems.find(item => item.event.id === event.id);

        if (existingItem) {
          set({
            cartItems: get().cartItems.map(item =>
              item.event.id === event.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          });
        } else {
          set({ cartItems: [...get().cartItems, { event, quantity }] });
        }
      },
      removeFromCart: (eventId) => {
        set({
          cartItems: get().cartItems.filter(item => item.event.id !== eventId)
        });
      },
      updateQuantity: (eventId, newQuantity) => {
        set({
          cartItems: get().cartItems.map(item =>
            item.event.id === eventId ? { ...item, quantity: newQuantity } : item
          )
        });
      },
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: 'my-app-storage',
      partialize: (state) => ({
        orderDetails: state.orderDetails,
        cartItems: state.cartItems,
      }),
    }
  )
);

export default useStore;
