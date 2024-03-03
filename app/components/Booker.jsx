"use client";

import { SportyBetBooking } from "../actions/sporty-bet-booking";

export function Booking() {
  const handleClick = () => {
    SportyBetBooking();
  };
  return (
    <section>
      <button className="" onClick={handleClick}>
        Book from SportyBet
      </button>
    </section>
  );
}
