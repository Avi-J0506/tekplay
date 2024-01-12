import Image from "next/image";
import React from "react";

const MainCard = () => {
  return (
    <div className="w-full h-fit p-4 pr-5 lg:pr-16 relative">
      <div className="bg-white border-2 relative z-10 border-black rounded-3xl w-full h-full flex flex-col-reverse lg:flex-row p-2">
        <div className="w-full lg:w-3/5 flex flex-col gap-5 items-start justify-between p-6">
          <div>
            <div>
              <h1 className="text-3xl md:text-5xl">Lorem Ipsum.</h1>
            </div>
            <div>
              <h1 className="text-xs md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate vero obcaecati natus adipisci necessitatibus eius,
                enim vel sit ad reiciendis. Enim praesentium magni delectus cum,
                tempore Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Voluptate vero obcaecati natus adipisci necessitatibus
                eius, enim vel sit ad reiciendis. Enim praesentium magni
                delectus cum, tempore{" "}
              </h1>
            </div>
          </div>
          <div className="w-full flex gap-10">
            <div>
              <Image
                className="w-10"
                src="/assets/graphic.svg"
                alt={""}
                width={200}
                height={200}
              />
            </div>
            <div>
              <button className="bg-tekPlay-cyan px-4 py-2 text-black font-semibold border-2 border-black">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex justify-end">
          <Image
            className="rounded-2xl w-full h-full object-cover border-2 border-black"
            src="/assets/placeholder3.svg"
            alt={""}
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="absolute top-5 bottom-2 lg:bottom-0 right-3 lg:right-10 left-5 z-0 bg-tekPlay-cyan border-2 border-black rounded-3xl"></div>
    </div>
  );
};

export default MainCard;
