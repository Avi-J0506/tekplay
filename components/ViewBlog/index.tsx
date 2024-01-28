import React from "react";
import calculateReadingTime from "@/utils/helpers/calculateReadingTime";

const Index = ({
  title,
  desc,
  author,
  date,
}: {
  title: string;
  desc: string;
  author: string;
  date: string;
}) => {
  return (
    <div className="bg-tekPlay-primary w-full min-h-screen h-fit flex flex-col">
      <div className="w-full h-full flex flex-col items-center flex-1 mt-20 lg:mt-36">
        <div className="w-full h-auto lg:border lg:border-white/50 lg:w-1/2 flex flex-col gap-5 text-white items-start justify-between py-4 p-4 lg:p-8 lg:py-8">
          <div>
            <h1 className="text-5xl font-black font-PlayfairDisplay text-white">{title}</h1>
          </div>
          <div className="w-full flex flex-col items-start">
            <div>
              <h1 className="text-lg">{author}</h1>
            </div>
            <div className="flex gap-2">
              <h1 className="text-sm text-white/50">{date}</h1>
              <h1 className="text-sm text-white/50">·</h1>
              <h1 className="text-sm text-white/50">{calculateReadingTime(desc)}</h1>
            </div>
          </div>
          <div className="border-gray-500 border w-full mt-2" />
          <div
          className="custom-styles"
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
