import Image from "next/image";
import React from "react";
import MenuIcon from "remixicon-react/MenuLineIcon";
import CloseIcon from "remixicon-react/CloseLineIcon";
import Link from "next/link";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

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
      <div className="hidden lg:flex items-center gap-10">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/news">News</Link>
        </div>
        <div>
          <Link href="">Video</Link>
        </div>
        <div>
          <Link href="">Blog</Link>
        </div>
        <div>
          <button className="bg-tekPlay-pink px-4 py-2 text-black">
            <Link href={'/login'}>Login</Link>
          </button>
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
                <a className="text-3xl font-semibold" href="">
                  Games
                </a>
              </div>
              <div>
                <a className="text-3xl font-semibold" href="">
                  News
                </a>
              </div>
              <div>
                <a className="text-3xl font-semibold" href="">
                  Video
                </a>
              </div>
              <div>
                <a className="text-3xl font-semibold" href="">
                  Blog
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-[35px] mb-[50px]">
              <div>
                <button className="bg-tekPlay-pink px-4 py-2 text-black text-xl font-semibold">
                  <Link href={'/login'}>
                    Login
                  </Link>
                </button>
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
