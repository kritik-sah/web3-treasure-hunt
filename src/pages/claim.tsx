import Celebration from "@/components/Claim";
import React from "react";

const Claim = () => {
  
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      <div className="max-w-sm flex flex-col items-center justify-center gap-6 text-center">
        <h3 className="text-2xl font-semibold">🎊 Zo Zo Zo 🎊</h3>
        <p>
          Well done hunter, check what you got!!!
        </p>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase bg-zo-primary text-zo-stroke  p-4 font-medium"
        >
          claim Winner POAP
        </a>
      </div>
      <Celebration />
    </div>
  );
};

export default Claim;
