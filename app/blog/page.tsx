"use client";

import { useState, useEffect } from "react";

export default function Blogs() {
  const [isBlogLoading, setIsBlogLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=*`)
      .then((res) => res.json())
      .then((res) => setBlogs(res));
  }, []);

  return <main className="px-24">This is the blog list</main>;
}
