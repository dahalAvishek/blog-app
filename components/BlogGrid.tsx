import React from "react";
import Link from "next/link";
import { Blog } from "@/app/page";
import "../app/globals.css";

interface MyComponentProps {
  blogs: Blog[];
}

const Blogs: React.FC<MyComponentProps> = ({ blogs }: MyComponentProps) => {
  return (
    <div className="mt-4 blogGrid">
      {blogs.map((blog) => (
        <Link key={blog.id} href={`/blog/${blog.id}`}>
          <img
            className="h-72 object-cover rounded"
            src={`http://localhost:1337${blog.attributes.cover.data.attributes.url}`}
          />
          <h3 className="text-2xl leading-tight mt-4 mb-3 font-semibold">
            {blog.attributes.title}
          </h3>
          <p className="text-base truncate">{blog.attributes.content}</p>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
