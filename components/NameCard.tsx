import React from "react";
import Link from 'next/link'


const NameCard = () => {
  return (
    <div>
      <a className="relative w-9 overflow-y-hidden">
      <Link href="/">
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
      </a>
    </div>
  );
};

export default NameCard;
