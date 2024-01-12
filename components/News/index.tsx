import Image from "next/image";
import React from "react";
import MainCard from "./components/MainCard";
import NewsGrid from "./components/NewsGrid/index";

const Index = () => {
  return (
    <div className="w-full min-h-screen h-fit pt-24 pb-4 flex flex-col gap-10">
      <MainCard />
      <NewsGrid />
    </div>
  );
};

export default Index;
