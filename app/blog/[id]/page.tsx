"use client";

import { Blog } from "../../page";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Page({ params }) {
  console.log(params);
  const {
    data: blog,
    status,
    refetch,
  } = useQuery({
    queryKey: ["blog"],
    // select: (data) => data.data,
    queryFn: () =>
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${params.id}?populate=*`)
        .then((res) => res.data),
    refetchOnWindowFocus: false,
  });
  console.log(blog);
  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${params.id}?populate=*`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setIsBlogLoading(false);
  //       setBlog(data.data);
  //     });
  // }, []);

  return (
    <div>
      <div className="">
        <h1 className="mb-4">Content</h1>
        <p className="max-w-screen-md">
          <ReactMarkdown children={blog?.attributes?.content} />
        </p>
      </div>
    </div>
  );
}
