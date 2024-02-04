import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const CarouselCard = ({
  title,
  author,
  desc,
  id,
}: {
  title: string;
  author: string;
  desc: string;
  id: string;
}) => {
  const router = useRouter();
  return (
    <div className="w-full h-96 relative text-white cursor-pointer duration-300">
      <div className="w-full h-full">
        <Image
          className="w-full h-full object-cover"
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
        <div className="h-full flex flex-col items-start gap-1 mt-3">
          <h1 className="text-2xl font-bold font-PlayfairDisplay">{title}</h1>
          <div
            className="text-white/80 truncate-4-lines"
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
          />
        </div>
        <div>
          <button
            className="bg-tekPlay-cyan px-4 py-2 text-black font-semibold border-2 border-black"
            onClick={() => router.push(`/blog/${id}`)}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
