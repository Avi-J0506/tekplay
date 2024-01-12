import React from "react";
import Chip from "./components/Chip";
import categories from "@/utils/constants/NewsCategories.json";
import Card from "./components/Card";

const Index = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 items-center text-white">
      <div className="w-full flex justify-center">
        <h1 className="text-xl md:text-4xl text-center">
          Powering News for Gamers Everywhere!
        </h1>
      </div>
      <div className="w-full overflow-x-scroll hidden md:flex justify-center gap-5">
        {categories.categories.map((category, index) => (
          <Chip key={`chip_${index}`} title={category} />
        ))}
      </div>
      <div className="w-full flex justify-center flex-wrap gap-5">
        <div className="w-3/4 flex gap-5 flex-wrap justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Index;
