import Image from "next/image";
import React, { useEffect } from "react";

const MainCard = ({ newsData }: { newsData: any }) => {
  const [news, setNews] = React.useState<any>({});

  useEffect(() => {
    setNews(
      newsData.newsData.articles[
        Math.floor(Math.random() * newsData.newsData.articles.length)
      ]
    );
  }, [newsData.newsData.articles]);

  return (
    <div className="w-full h-fit p-4 pr-5 lg:pr-16 relative">
      <div className="bg-white border-2 relative z-10 border-black rounded-3xl w-full h-full flex flex-col-reverse lg:flex-row p-2">
        <div className="w-full lg:w-3/5 flex flex-col gap-5 items-start justify-between p-6">
          <div>
            <div>
              <h1 className="text-3xl md:text-5xl">{news.title}</h1>
            </div>
            <div>
              <h1 className="text-xs md:text-base truncate-4-lines">
                {news.description}
              </h1>
            </div>
          </div>
          <div className="w-full flex items-center gap-10">
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
              <a
                href={news.url}
                target="_blank"
                className="bg-tekPlay-cyan px-4 py-2 text-black font-semibold border-2 border-black"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex justify-end">
          <Image
            className="rounded-2xl w-full h-full object-cover border-2 border-black"
            src={news.urlToImage ? news.urlToImage : "/assets/placeholder2.svg"}
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
