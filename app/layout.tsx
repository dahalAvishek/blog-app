"use client";

import { Inter, Lora } from "next/font/google";
import { Carousel } from "react-responsive-carousel";

import NavBar from "@/components/NavBar";
import QuoteBox from "@/components/QuoteBox";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./globals.css";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeBgIndex, setActiveBgIndex] = useState(0);
  const [isBlogsLoading, setIsBlogsLoading] = useState(true);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setIsBlogsLoading(false);
        setBlogs(res.data);
      });
  }, []);

  return (
    <html lang="en">
      <body className={lora.className}>
        {!isBlogsLoading && (
          <div
            className={`bg-cover pb-32`}
            style={{
              backgroundImage: `url(http://localhost:1337${blogs[activeBgIndex]?.attributes.cover.data.attributes.url})`,
            }}
          >
            <NavBar />
            {blogs.length > 0 && (
              <Carousel
                onChange={(i) => setActiveBgIndex(i)}
                // autoPlay
                infiniteLoop
                showArrows={false}
                interval={3000}
                showStatus={false}
                showThumbs={false}
              >
                {blogs.map((blog, index) => (
                  <QuoteBox key={index} />
                ))}
              </Carousel>
            )}
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
