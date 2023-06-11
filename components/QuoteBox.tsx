"use client";
import React, { useState, useEffect } from "react";
import { FaQuoteRight, FaQuoteLeft, FaSpinner } from "react-icons/fa";

export interface Quote {
  id: number;
  quote: string;
  author: string;
}
const QUOTE_BOX_URL = "https://dummyjson.com/quotes/random";

export default function QuoteBox() {
  const [isLoading, setisLoading] = useState(true);
  const [quote, setQuote] = useState(null);

  function fetchQuote() {
    setisLoading(true);
    fetch(QUOTE_BOX_URL)
      .then((res) => res.json())
      .then((res) => {
        setisLoading(false);
        setQuote(res);
      });
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      className="py-9 flex flex-col justify-end gap-8 px-24"
      style={{ height: 520 }}
    >
      <div className="max-w-screen-sm">
        <h1 className="text-left font-bold text-5xl mb-4 leading-tight">
          {quote?.quote}
        </h1>
        <div className="mb-4 flex space-x-3 text-md text-neutral-200 ">
          <p>{quote?.author}</p>
          <div className="w-10 h-0.5 mt-3 bg-neutral-200 " />
          <p className="leading-5">Randi ko choro</p>
        </div>
      </div>
    </div>
  );
}
