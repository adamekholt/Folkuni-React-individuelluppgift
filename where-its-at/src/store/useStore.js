import { create } from 'zustand';

const useStore = create((set) => ({
  orderDetails: null,
  setOrderDetails: (details) => set({ orderDetails: details }),
}));

export default useStore;
