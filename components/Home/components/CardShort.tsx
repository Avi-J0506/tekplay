import Image from "next/image";
import React, { useEffect } from "react";

const CardShort = () => {
  const [color, setColor] = React.useState("");
  const randomColorPicker = () => {
    const colors = [
      "#FAFF00",
      "#00FFFF",
      "#FF00B8",
      "#AD00FF",
      "#FFC700",
      "#FF0000",
    ];
    const random = Math.floor(Math.random() * colors.length);
    setColor(colors[random]);
  };

  useEffect(() => {
    randomColorPicker();
  });

  return (
    <div className="w-full max-w-80 h-56 flex flex-col hover:scale-105 cursor-pointer duration-300">
      <div className="h-3/4 w-full object-cover">
        <Image
          className="w-full h-full object-cover"
          src="/assets/placeholder2.svg"
          alt={""}
          width={200}
          height={200}
        />
      </div>
      <div
        className="w-full h-full flex flex-col items-center p-4"
        style={{ backgroundColor: color }}
      >
        <div className="w-full flex justify-start">
          <h1 className="font-semibold">Lorem Ipsum</h1>
        </div>
        <div className="w-full flex justify-between text-sm">
          <div>
            <h1>By John Doe</h1>
          </div>
          <div>
            <h1>18th May 2023</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShort;
