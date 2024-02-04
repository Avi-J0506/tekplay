import Image from "next/image";
import React, { useEffect } from "react";
import MenuIcon from "remixicon-react/MenuLineIcon";
import CloseIcon from "remixicon-react/CloseLineIcon";
import Link from "next/link";
import { destroyCookie } from "nookies";
import { useRouter } from "next/router";

const Navbar = ({ userToken }: { userToken: string }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [currentRoute, setCurrentRoute] = React.useState("");
  const router = useRouter();

  useEffect(() => {
    setCurrentRoute(router.pathname);
  }, [router.pathname]);

  const handleLogOut = () => {
    destroyCookie(null, "userToken");
    router.push("/login");
  };

  return (
    <div className="bg-tekPlay-primary w-full h-20 border-b border-b-white absolute top-0 left-0 z-[99] flex items-center justify-between px-5 lg:px-12 text-white">
      <div>
        <Image
          className="w-32"
          src="/assets/tekPlayLogo.svg"
          alt={""}
          width={200}
          height={200}
        />
      </div>
      <div className="hidden lg:flex items-center gap-10 font-bold">
        <div className={
          currentRoute === "/" ? "border-b-2 border-white" : "border-b-2 border-transparent"
        }>
          <Link href="/">Home</Link>
        </div>
        <div className={
          currentRoute === "/blog" ? "border-b-2 border-white" : "border-b-2 border-transparent"
        }>
          <Link href="/blog">Blog</Link>
        </div>
        <div className={
          currentRoute === "/news" ? "border-b-2 border-white" : "border-b-2 border-transparent"
        }>
          <Link href="/news">News</Link>
        </div>
        <div className={
          currentRoute === "/video" ? "border-b-2 border-white" : "border-b-2 border-transparent"
        }>
          <Link href="">Video</Link>
        </div>
        {userToken && (
          <div className={
            currentRoute === "/createBlog" ? "border-b-2 border-white" : "border-b-2 border-transparent"
          }>
            <Link href="/createBlog">Create Blog</Link>
          </div>
        )}
        <div>
          {!userToken ? (
            <button className="bg-tekPlay-pink px-4 py-2 text-black">
              <Link href={"/login"}>Login</Link>
            </button>
          ) : (
            <button
              className="bg-tekPlay-pink px-4 py-2 text-black"
              onClick={handleLogOut}
            >
              <h1>Log Out</h1>
            </button>
          )}
        </div>
      </div>
      <div className="flex lg:hidden relative">
        <div onClick={() => setNavbarOpen((prevState) => !prevState)}>
          <MenuIcon className="text-3xl" />
        </div>
        <div
          className={`fixed top-0 bottom-0 right-0 left-0 bg-tekPlay-primary transition-transform duration-300 transform ${
            navbarOpen ? "translate-y-0" : "-translate-y-full"
          } overflow-hidden z-50`}
        >
          <div className="w-full h-full px-[45px] flex flex-col justify-between py-[60px]">
            <div
              className="absolute right-5 top-6"
              onClick={() => setNavbarOpen((prevState) => !prevState)}
            >
              <CloseIcon className="text-3xl" />
            </div>
            <div className="w-fit h-fit flex flex-col gap-2">
              <div>
                <Link
                  href="/blog"
                  onClick={() => setNavbarOpen((prevState) => !prevState)}
                >
                  Blog
                </Link>
              </div>
              <div>
                <Link
                  href="/news"
                  onClick={() => setNavbarOpen((prevState) => !prevState)}
                >
                  News
                </Link>
              </div>
              <div>
                <Link
                  href=""
                  onClick={() => setNavbarOpen((prevState) => !prevState)}
                >
                  Video
                </Link>
              </div>
              {userToken && (
                <div>
                  <Link
                    href="/createBlog"
                    onClick={() => setNavbarOpen((prevState) => !prevState)}
                  >
                    Create Blog
                  </Link>
                </div>
              )}
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-[35px] mb-[50px]">
              <div>
                {!userToken ? (
                  <button className="bg-tekPlay-pink px-4 py-2 text-black">
                    <Link href={"/login"}>Login</Link>
                  </button>
                ) : (
                  <button
                    className="bg-tekPlay-pink px-4 py-2 text-black"
                    onClick={handleLogOut}
                  >
                    <h1>Log Out</h1>
                  </button>
                )}
              </div>
              <Image
                className="w-32"
                src="/assets/tekPlayLogo.svg"
                alt={""}
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
