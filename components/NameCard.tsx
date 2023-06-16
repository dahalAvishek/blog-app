import React from "react";
import Link from "next/link";

const NameCard = () => {
  return (
    <div>
      <Link className="relative w-9 overflow-y-hidden" href="/">
        <h2
          className="slide-in-from-top font-semibold tracking-widest"
          style={{
            fontFamily: "'League Spartan', sans-serif",
            textTransform: "uppercase",
          }}
        >
          Avishek Dahal
        </h2>
      </Link>
    </div>
  );
};

export default NameCard;
