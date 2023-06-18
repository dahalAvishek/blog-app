"use client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Category } from "../page";
import { ChangeEvent, FormEvent, useState } from "react";

interface Post {
  title: string;
  categories: string[];
  content: string;
}

const EditWindow = () => {
  const {
    status,
    data: categories,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    select: (data) => data.data.data,
    refetchOnWindowFocus: false,
    queryFn: () =>
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories?populate=*`),
  });

  const [post, setPost] = useState<Post>({
    title: "",
    categories: [],
    content: "",
  });

  const handleChangeInput = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    // debugger;
    const { name, value, type } = e?.target;
    type !== "select-multiple"
      ? setPost({
          ...post,
          [name]: value,
        })
      : !post.categories.includes(e.target.value) &&
        setPost({
          ...post,
          categories: [...post.categories, e.target.value],
        });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(post);
    setPost({ title: "", categories: [], content: "" });
  };

  return (
    <form className="pt-24 px-10" onSubmit={(e) => handleSubmit(e)}>
      <label>Title</label>
      <input
        onChange={(e) => handleChangeInput(e)}
        type="text"
        name="title"
        value={post.title}
        required
      ></input>
      <label>Category</label>
      <select
        required
        name="catrgories"
        multiple
        onChange={(e) => handleChangeInput(e)}
        value={post.categories}
      >
        {categories?.map((category: Category) => (
          <option key={category.id} value={category.attributes?.Name}>
            {category.attributes?.Name}
          </option>
        ))}
      </select>
      <label>Content</label>
      <textarea required onChange={(e) => handleChangeInput(e)}></textarea>
      <button type="submit" className="bg-white">
        Post
      </button>
    </form>
  );
};

export default EditWindow;
