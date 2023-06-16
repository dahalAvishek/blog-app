import React from "react";
import QuoteBox from "@/components/QuoteBox";
import { Carousel } from "react-responsive-carousel";
import { Blog } from "@/app/page";

interface Props {
  blogs: Blog[];
  setActiveBgIndex: React.Dispatch<React.SetStateAction<number>>;
  activeBgIndex: number;
}

const ImageQuote = ({ blogs, setActiveBgIndex, activeBgIndex }: Props) => {
  return (
    <Carousel
      onChange={(i) => setActiveBgIndex(i)}
      infiniteLoop
      showArrows={false}
      interval={3000}
      showStatus={false}
      showThumbs={false}
    >
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-cover pb-32"
          style={{
            backgroundImage: `url(http://localhost:1337${blogs[activeBgIndex]?.attributes.cover.data.attributes.url})`,
          }}
        >
          <QuoteBox />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageQuote;
