"use client";
import { Inter, Lora } from "next/font/google";

import NavBar from "@/components/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "Generated by create next app",
};
const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(">>>", lora.className);
  return (
    <html lang="en">
      <head>
        <meta></meta>
      </head>
      <body className={lora.className}>
        <NavBar />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
