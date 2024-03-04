'use client'
import { Booking } from "./components/Booker";
import useBookedStore from "./hooks/bookedBets";

export default function Home() {
  const bets = useBookedStore( ( state ) => state.bookedBets );
  return (
    <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh]">
      <div className="flex flex-col justify-center items-center">
        <header className="p-2 shadow-lg flex justify-center items-center">
          <h1 className="text-2xl p-3">Sport Betting Booking</h1>
        </header>
        <Booking />
        {
          bets?.length > 0 ? bets.map( (bet, index) => <div key={index} className="my-3">
            <p>Booking Code: {bet.code} </p>
            <a target="_blank noreferrer noopener" href={bet.shareLink} className="underline">Click to view betting slip</a>
          </div>) : <p> </p>
        }
      </div>
    </div>
  );
}
