import React, { useEffect, useState } from "react";
import Link from "next/link";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=*`)
      .then((res) => res.json())
      .then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className="my-20">
      <h1 className="font-semibold mb-12">Popular topics</h1>
      <div className="flex gap-8">
        {blogs?.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <article className="w-80">
              <img
                className="h-72 object-cover rounded"
                src={`http://localhost:1337${blog.attributes.cover.data.attributes.url}`}
              />
              <h3 className="text-2xl leading-tight mt-4 mb-3 font-semibold">
                {blog.attributes.title}
              </h3>
              <p className="text-base truncate">{blog.attributes.content}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
