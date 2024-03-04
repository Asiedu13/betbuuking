import { create } from "zustand";

const useBookedStore = create((set) => ({
  bookedBets: [],
  setBookedBets: (bookedBet) =>
    set((state) => ({ bookedBets: [...state.bookedBets, bookedBet] })),
}));

export default useBookedStore;
