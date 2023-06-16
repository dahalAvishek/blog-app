import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CategoriesNav = ({
  setActiveCategory,
}: {
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
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

  const handleActiveCategory = (category) => {
    console.log("i am here");
    setActiveCategory(category.attributes.Name);
  };

  return (
    categories?.length > 0 && (
      <ul className="flex space-x-4">
        <li role="button" onClick={() => setActiveCategory(null)}>
          All
        </li>
        {categories.map((category) => (
          <li
            role="button"
            key={category.id}
            onClick={() => handleActiveCategory(category)}
          >
            {category.attributes?.Name}
          </li>
        ))}
      </ul>
    )
  );
};

export default CategoriesNav;
