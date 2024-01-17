import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const CardShort = ({
  title,
  author,
  date,
  id
}: {
  title: string;
  author: string;
  date: string;
  id: string
}) => {
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
  const router = useRouter();

  useEffect(() => {
    randomColorPicker();
  });

  return (
    <div className="w-full max-w-80 h-56 flex flex-col hover:scale-105 cursor-pointer duration-300 mb-5" onClick={() => router.push(`/blog/${id}`)}>
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
          <h1 className="font-semibold">{title}</h1>
        </div>
        <div className="w-full flex justify-between text-sm">
          <div>
            <h1>By {author}</h1>
          </div>
          <div>
            <h1>{date}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShort;
