"use client";

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
  return status === "loading" ? (
    "Loading..."
  ) : status === "error" ? (
    "An error has occurred: "
  ) : (
    <div>
      <div>
        <div
          className="bg-cover h-96 text-center pt-80"
          style={{
            backgroundImage: `url(http://localhost:1337${blog?.data.attributes.cover.data.attributes.url})`,
          }}
        >
          <p>{blog.data.attributes.categories.data[0].attributes.Name}</p>
        </div>
        <article className="px-24">
          <h1 className="mb-4">Content</h1>
          <h2>{blog?.data.attributes.title}</h2>
          <p className="max-w-screen-md">
            <ReactMarkdown children={blog?.data.attributes.content} />
          </p>
        </article>
      </div>
    </div>
  );
}
