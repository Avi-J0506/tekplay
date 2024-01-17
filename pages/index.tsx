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
  uniqueRandomBlogs,
  error,
}: {
  userToken: string;
  blogPosts: any;
  uniqueRandomBlogs: any;
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
      <Home uniqueRandomBlogs={uniqueRandomBlogs} blogPosts={blogs} />
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const cookies = nookies.get(ctx);
  const userToken = cookies?.userToken;

  try {
    const blogPosts = await server.get("/api/blogs");

    const shuffledBlogs = blogPosts.data.slice().sort(() => Math.random() - 0.5);
    const uniqueRandomBlogs = Array.from(
      new Set(shuffledBlogs.map((blog: { _id: any; }) => blog._id))
    )
      .map((id) => shuffledBlogs.find((blog: { _id: unknown; }) => blog._id === id))
      .slice(0, 4);

    return {
      props: {
        userToken: userToken ? userToken : null,
        blogPosts: blogPosts.data,
        uniqueRandomBlogs: uniqueRandomBlogs
      },
    };
  } catch (error) {
    return {
      props: {
        userToken: userToken ? userToken : null,
        error: "Something went wrong",
      },
    };
  }
}
