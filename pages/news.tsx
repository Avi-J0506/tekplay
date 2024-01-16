import Navbar from "@/components/common/Navbar";
import React from "react";
import News from "@/components/News/index";
import nookies from "nookies";
import { GetServerSidePropsContext } from "next";
const Index = ({ userToken }: { userToken: string }) => {
  return (
    <div className="w-full min-h-screen h-fit pb-6 bg-tekPlay-primary">
      <Navbar userToken={userToken} />
      <News />
    </div>
  );
};

export default Index;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const cookies = nookies.get(ctx);
  const userToken = cookies?.userToken;
  return {
    props: {
      userToken: userToken ? userToken : null,
    },
  };
}
