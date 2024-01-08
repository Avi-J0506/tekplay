import Image from "next/image";
import React from "react";

const CardShort = () => {
  return (
    <div className="w-[24vw] h-[15vw] flex flex-col">
      <div className="h-3/4 w-full object-cover">
        <Image
          className="w-full h-full object-cover"
          src="/assets/placeholder2.svg"
          alt={""}
          width={200}
          height={200}
        />
      </div>
      <div className="w-full h-full flex flex-col items-center p-4 bg-tekPlay-yellow">
        <div className="w-full flex justify-start">
          <h1 className="font-semibold">Lorem Ipsum</h1>
        </div>
        <div className="w-full flex justify-between text-sm">
          <div>
            <h1>By John Doe</h1>
          </div>
          <div>
            <h1>18th May 2023</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShort;
