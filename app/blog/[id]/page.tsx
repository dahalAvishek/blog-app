"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function Page({ params }) {
  const [isBlogLoading, setIsBlogLoading] = useState(true);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${params.id}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setIsBlogLoading(false);
        setBlog(data.data);
      });
  }, []);

  return (
    <div className="px-24 my-24">
      <h1 className="mb-4">Content</h1>
      <p className="max-w-screen-md">
        <ReactMarkdown children={blog.attributes?.content} escapeHtml={false} />
      </p>
    </div>
  );
}
