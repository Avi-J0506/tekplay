import Image from "next/image";
import React from "react";

const CardLong = () => {
  return (
    <div className="w-[22vw] h-[33vw] relative overflow-clip text-white">
      <div>
        <Image
          className="w-full h-full"
          src="/assets/placeholder.svg"
          alt={""}
          width={200}
          height={200}
        />
      </div>
      <div className="absolute top-0 -bottom-0 left-0 right-0 bg-black/50 flex flex-col justify-between p-6">
        <div>
          <Image
            className="w-10"
            src="/assets/ProfilePic.svg"
            alt={""}
            width={200}
            height={200}
          />
        </div>
        <div>
          <h1 className="text-2xl">Lorem ipsum dolor</h1>
          <h1 className="text-white/80">
            sit amet consectetur adipisicing elit. Laborum rem eligendi quam
            porro doloremque esse molestias ab tempore eius, a, earum amet rerum
            sint saepe minima ratione consequatur in! Fugit!
          </h1>
        </div>
        <div>
          <button className="bg-tekPlay-cyan px-4 py-2 text-black font-semibold border-2 border-black">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardLong;
