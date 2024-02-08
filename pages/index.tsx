import { GetServerSidePropsContext } from "next";
import React from "react";
import nookies from "nookies";
import Navbar from "@/components/common/Navbar";
import Home from "@/components/Home/index";

const Index = ({
  userToken,
  newsData,
}: {
  userToken: string;
  newsData: any;
}) => {
  return (
    <div className="bg-tekPlay-primary w-full min-h-screen h-fit">
      <Navbar userToken={userToken} />
      <Home newsData={newsData} />
    </div>
  );
};

export default Index;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const cookies = nookies.get(ctx);
  const userToken = cookies?.userToken;

  const newsResponse = await fetch(`http://localhost:3000/api/news`);

  const newsData = await newsResponse.json();

  const shuffleArray = (array: any[]) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const randomNews = shuffleArray(
    newsData.newsData.articles.filter(
      (article: { urlToImage: any }) => article.urlToImage
    )
  ).slice(0, 4);

  return {
    props: {
      userToken: userToken ? userToken : null,
      newsData: randomNews,
    },
  };
}
