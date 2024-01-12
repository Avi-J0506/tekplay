import Navbar from "@/components/common/Navbar";
import React from "react";
import News from "@/components/News/index";

const Index = () => {
  return (
    <div className="w-full min-h-screen h-fit pb-6 bg-tekPlay-primary">
      <Navbar />
      <News />
    </div>
  );
};

export default Index;
