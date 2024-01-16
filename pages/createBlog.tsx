// createBlog.tsx
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/common/Navbar";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), { ssr: false });

const Index = ({ userToken }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const quillRef = useRef(null);
  const isMounted = useRef(false);

  const handleCreateBlog = () => {
    if (title === "") {
      return toast.error("Please provide a title");
    }
    if (content === "" || content === "<p><br></p>") {
      return toast.error("Please provide some content");
    }

    // TODO: Implement create blog API
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  useEffect(() => {
    // This block will only run on the first render
    if (!isMounted.current) {
      isMounted.current = true;

      // Access quillRef.current to get the Quill instance
      console.log(quillRef.current);
    }
  }, [content]); // Include any dependencies if needed

  return (
    <div className="bg-tekPlay-primary w-full min-h-screen h-fit flex flex-col pb-20">
      <Navbar userToken={userToken} />
      <div className="w-full h-full flex flex-col items-center flex-1 mt-20">
        <div className="w-full md:w-3/4 flex justify-between h-20 py-4 p-2 md:p-0 md:py-4">
          <div>
            <input
              className="text-white outline-none text-4xl bg-transparent"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              className="bg-tekPlay-cyan px-4 py-2 text-black font-semibold border-2 border-black"
              onClick={handleCreateBlog}
            >
              Create Blog
            </button>
          </div>
        </div>
        <QuillNoSSRWrapper
          modules={modules}
          className="w-full md:w-3/4 h-svh p-2 md:p-0 text-white"
          value={content}
          onChange={setContent}
          ref={quillRef}
        />
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const cookies = nookies.get(ctx);
  const userToken = cookies?.userToken;

  if (!userToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      userToken: userToken ? userToken : null,
    },
  };
}
