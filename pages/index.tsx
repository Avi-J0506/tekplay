import Navbar from "@/components/common/Navbar";
import Home from "../components/Home/index";
import nookies from "nookies";
import { GetServerSidePropsContext } from "next";
import server from "@/utils/server/server";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function App({
  userToken,
  blogPosts,
  error,
}: {
  userToken: string;
  blogPosts: any;
  error: string;
}) {
  const [blogs, setBlogs] = useState(blogPosts);

  useEffect(() => {
    if (error) {
      toast.error(error);
    } else {
      setBlogs(blogPosts);
    }
  }, [blogPosts, error]);

  return (
    <div className="bg-tekPlay-primary w-full min-h-screen h-fit">
      <Navbar userToken={userToken} />
      <Home blogPosts={blogs} />
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const cookies = nookies.get(ctx);
  const userToken = cookies?.userToken;

  try {
    const blogPosts = await server.get("/api/blogs");

    return {
      props: {
        userToken: userToken ? userToken : null,
        blogPosts: blogPosts.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        userToken: userToken ? userToken : null,
        error: "Something went wrong",
      },
    };
  }

  return {
    props: {
      userToken: userToken ? userToken : null,
    },
  };
}
