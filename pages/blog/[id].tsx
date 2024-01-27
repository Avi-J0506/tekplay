import Navbar from "@/components/common/Navbar";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import nookies from "nookies";
import ViewBlog from "@/components/ViewBlog/index";
import server from "@/utils/server/server";
import parseAndFormatDate from "@/utils/helpers/parseAndFormatDate";

const Index = ({ userToken, blog }: { userToken: string; blog: any }) => {
  const router = useRouter();
  const [blogData, setBlogData] = useState(blog);

  useEffect(() => {
    if (!blog) {
      router.push("/");
    } else {
      setBlogData(blog);
    }
  }, [blogData, blog, router]);

  return (
    <div className="bg-tekPlay-primary w-full min-h-screen h-fit overflow-auto lg:pb-10">
      <Navbar userToken={userToken} />
      <ViewBlog
        title={blogData.title}
        desc={blogData.desc}
        author={blogData.authorName}
        date={parseAndFormatDate(blogData.createdAt)}
      />
    </div>
  );
};

export default Index;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const cookies = nookies.get(ctx);
  const userToken = cookies?.userToken;

  try {
    const blogResponse = await server.get("/api/blogs/" + ctx.params?.id);

    return {
      props: {
        userToken: userToken ? userToken : null,
        blog: blogResponse.data,
      },
    };
  } catch (error) {
    return {
      props: {
        userToken: userToken ? userToken : null,
        blog: null,
      },
    };
  }
}
