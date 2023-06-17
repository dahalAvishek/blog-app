"use client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Category } from "../page";

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
  return (
    <form className="pt-24 px-10">
      <h2>Title</h2>
      <input></input>
      <h2>Category</h2>
      <select>
        {categories?.map((category: Category) => (
          <option key={category.id}>{category.attributes?.Name}</option>
        ))}
      </select>
      <h2>Content</h2>
      <textarea></textarea>
    </form>
  );
};

export default EditWindow;
