import { GetServerSidePropsContext } from "next";
import React from "react";
import nookies from "nookies";
import Navbar from "@/components/common/Navbar";
import Home from "@/components/Home/index";

const Index = ({ userToken }: { userToken: string }) => {
  return (
    <div className="bg-tekPlay-primary w-full min-h-screen h-fit">
      <Navbar userToken={userToken} />
      <Home />
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
