import Navbar from "@/components/common/Navbar";
import React from "react";
import News from "@/components/News/index";
import nookies from "nookies";
import { GetServerSidePropsContext } from "next";
const Index = ({
  userToken,
  newsData,
}: {
  userToken: string;
  newsData: any;
}) => {
  console.log({newsData});
  return (
    <div className="w-full min-h-screen h-fit pb-6 bg-tekPlay-primary">
      <Navbar userToken={userToken} />
      <News newsData={newsData} />
    </div>
  );
};

export default Index;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const cookies = nookies.get(ctx);
  const userToken = cookies?.userToken;

  const newsResponse = await fetch(`http://localhost:3000/api/news`);

  const newsData = await newsResponse.json();

  return {
    props: {
      userToken: userToken ? userToken : null,
      newsData,
    },
  };
}
