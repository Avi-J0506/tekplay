import Image from "next/image";
import React from "react";
import { formatDate } from "@/utils/helpers/parseAndFormatDate";

const Card = ({ article }: { article: any }) => {
  return (
    <div className="w-72 h-[26rem] flex flex-col text-black">
      <div className="w-full h-3/4">
        <Image
          src={article.urlToImage ? article.urlToImage : "/assets/placeholder2.svg"}
          alt=""
          width={300}
          height={200}
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-1/4 bg-white p-4">
        <div>
          <h1 className="font-semibold truncate">{article.title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <h1 className="text-sm text-gray-400">Posted On :</h1>
          <h1 className="text-sm font-semibold">{formatDate(article.publishedAt)}</h1>
        </div>
        <hr />
        <div className="w-full h-full flex justify-between pt-2">
          <div className="flex gap-2">
            <div>
              <Image
                src="/assets/ProfilePic.svg"
                alt=""
                width={50}
                height={50}
                objectFit="cover"
                className="w-6 rounded-full"
              />
            </div>
            <div>
              <h1 className="text-sm text-gray-400">{article.author}</h1>
            </div>
          </div>
          <div>
            <a href={article.url} target="_blank" className="bg-tekPlay-purple px-1 text-black border-2 border-black text-xs">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
