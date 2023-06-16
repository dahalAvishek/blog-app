"use client";

import React, { useState, useEffect } from "react";
import BlogGrid from "@/components/BlogGrid";
import ImageQuote from "@/components/ImageQuote";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import CategoriesNav from "@/components/CategoriesNav";

export type Blog = {
  id: number;
  attributes: {
    content: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Categories: string;
    cover: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            small: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            medium: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            large: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: any | null;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
  };
};

// const queryClient = new QueryClient();

export default function Home() {
  return <LandingPage />;
}

function LandingPage() {
  const [activeBgIndex, setActiveBgIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const {
    data: blogs,
    status,
    refetch,
  } = useQuery({
    queryKey: ["blogs"],
    select: (data) => data.data,
    queryFn: () =>
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=*`)
        .then((res) => res.data),
    refetchOnWindowFocus: false,
  });

  const filteredBlogs = activeCategory
    ? blogs?.filter((blog) =>
        blog.attributes.categories.data.some(
          (item) => item.attributes.Name === activeCategory
        )
      )
    : blogs;

  return status === "loading" ? (
    "Loading..."
  ) : status === "error" ? (
    "An error has occurred: "
  ) : blogs?.length > 0 ? (
    <div>
      <ImageQuote
        setActiveBgIndex={setActiveBgIndex}
        blogs={blogs}
        activeBgIndex={activeBgIndex}
      />
      <div className="my-0 px-24 py-14">
        <h1 className="font-semibold mb-12">Popular topics</h1>
        <CategoriesNav setActiveCategory={setActiveCategory} />
        <BlogGrid blogs={filteredBlogs} />
        <Link href="/edit">
          <button>
            Create New <AiOutlinePlus className="inline" />
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div>No blogs found</div>
  );
}
