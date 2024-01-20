import React, { useEffect } from "react";
import Card from "./components/Card";

const Index = ({ newsData }: { newsData: any }) => {
  const [news, setNews] = React.useState<any>([]);

  useEffect(() => {
    setNews(newsData.newsData.articles);
  }, [newsData.newsData.articles]);

  return (
    <div className="w-full h-full flex flex-col gap-5 items-center text-white">
      <div className="w-full flex justify-center">
        <h1 className="text-xl md:text-4xl text-center">
          Powering News for Gamers Everywhere!
        </h1>
      </div>
      <div className="w-full flex justify-center flex-wrap gap-5">
        <div className="w-3/4 flex gap-5 flex-wrap justify-center">
          {
            news.map((article: any, index: number) => {
              return (
                <Card key={index} article={article} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Index;
