import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CategoriesNav = () => {
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
    categories?.length > 0 && (
      <ul className="flex space-x-4">
        {categories.map((category) => {
          // console.log(category.attribute.name);
          return (
            <li role="button" key={category.id}>
              {category.attributes?.Name}
            </li>
          );
        })}
      </ul>
    )
  );
};

export default CategoriesNav;
