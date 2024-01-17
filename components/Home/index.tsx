import Image from "next/image";
import React, { useEffect } from "react";
import CardLong from "./components/CardLong";
import CardShort from "./components/CardShort";
import parseAndFormatDate from "@/utils/helpers/parseAndFormatDate";

const Index = ({ blogPosts }: { blogPosts: any }) => {
  const [blogs, setBlogs] = React.useState(blogPosts);

  useEffect(() => {
    setBlogs(blogPosts);
  }, [blogPosts]);

  console.log({ blogPosts });
  return (
    <div className="w-full min-h-screen h-fit overflow-clip bg-tekPlay-primary relative">
      <div className="absolute top-10 w-full flex justify-between items-start h-fit overflow-clip z-0">
        <Image
          className="w-full h-[101vh] md:w-1/2 md:h-auto"
          src="/assets/Globe.svg"
          alt={""}
          width={200}
          height={200}
        />
        <Image
          className="w-32 hidden lg:block mt-20"
          src="/assets/Graphic1.svg"
          alt={""}
          width={200}
          height={200}
        />
      </div>
      <div className="pt-28 px-5 lg:px-12 relative z-50 flex flex-wrap gap-5 p-10">
        <div className="w-full flex flex-wrap gap-5 justify-start">
          <div className="hidden lg:block">
            <CardLong />
          </div>
          <div className="hidden lg:block">
            <CardLong />
          </div>
          <div className="hidden lg:block">
            <CardLong />
          </div>
          <div className="hidden lg:block">
            <CardLong />
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center lg:justify-start gap-10 lg:gap-5">
          {blogs.map((blog: any) => (
            <CardShort key={blog._id} title={blog.title} author={blog.authorName} date={parseAndFormatDate(blog.createdAt)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
