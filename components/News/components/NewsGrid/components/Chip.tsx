import React from "react";

const Chip = ({ title }: { title: string }) => {
  return (
    <div className="rounded-full border px-4 py-1 cursor-pointer hover:bg-tekPlay-yellow hover:text-black duration-300 hover:border-black border-white text-white">
      <div>
        <h1 className="text-xs md:text-base whitespace-nowrap">{title}</h1>
      </div>
    </div>
  );
};

export default Chip;
