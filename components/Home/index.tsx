// pages/index.js
import React from "react";
import Eyes from "./_components/Eyes";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  return (
    <div className="w-full min-h-screen h-fit bg-tekPlay-primary relative flex justify-center items-end">
      {/* FACE */}
      <div className="relative">
        <Image src="/assets/Boy.png" alt="" width={500} height={500} />
        <div className="hidden lg:block absolute top-[9.8rem] left-[11.5rem]">
          <Eyes />
        </div>
      </div>

      {/* QUESTIONS */}
      <div className="hidden absolute top-0 left-0 right-0 bottom-0 lg:flex flex-col items-center justify-center text-white text-lg">
        <div className="absolute bottom-[5rem] left-[5rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>
        <div className="absolute bottom-[15rem] left-[9rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>
        <div className="absolute bottom-[23rem] left-[15rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>
        <div className="absolute bottom-[30rem] left-[25rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>

        <div className="absolute bottom-[35rem] left-[42rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>

        <div className="absolute bottom-[5rem] right-[5rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>
        <div className="absolute bottom-[15rem] right-[9rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>
        <div className="absolute bottom-[23rem] right-[15rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>
        <div className="absolute bottom-[30rem] right-[25rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>
      </div>

      <div className="lg:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white text-lg">
        <div className="absolute top-[7rem] left-[2rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>
        <div className="absolute top-[10rem] right-[2rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>
        <div className="absolute top-[13rem] left-[2rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>
        <div className="absolute top-[16rem] right-[2rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>
        <div className="absolute top-[19rem] left-[2rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>
        <div className="absolute top-[22rem] right-[2rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>
        <div className="absolute top-[25rem] left-[2rem] text-center">
          <Link className="font-bold text-2xl" href="/question1">
            Lorem Ipsum ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
