"use client";

import { SportyBetBooking } from "../actions/sporty-bet-booking";
import useBookedStore  from "../hooks/bookedBets";

export function Booking() {
  const setBookedBets = useBookedStore((state) => state.setBookedBets)
  
  const handleClick = async () => {
    const response = await SportyBetBooking();
    console.log( response );

    setBookedBets( response );
  }
  return (
    <section>
      <button
        className="bg-blue-500 p-2 rounded-md my-5 text-white"
        onClick={handleClick}
      >
        Book from SportyBet
      </button>
    </section>
  );
}
