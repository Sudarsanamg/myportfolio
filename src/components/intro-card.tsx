"use client";

import Image from "next/image";
import { assets } from "@/assets";
import { useEffect, useState } from "react";

export function IntroCard() {
  const pos = ["Full Stack Developer"];
  const [position, setPositon] = useState("");

  useEffect(() => {
    let i = 0;

    setInterval(() => {
      i = i % pos.length;
      let str = pos[i];
      let j = 0;

      // for(let j=0;j<str.length;j++){
      //     str = str.slice(0,j);
      //     console.log(str);
      //     setPositon(str)
      // }
      setInterval(() => {
        setPositon(str.slice(0, j + 1));
        j++;
      }, 100);
      i++;
    }, 3000);
  }, []);

  return (
    <div className="flex items-center gap-5 p-5 flex-col-reverse sm:flex-row">
      {/* left */}
      <div>
        <div className="flex flex-col">
          {/* greetings */}
          <span className="text-base sm:text-lg md:text-xl lg:text-2xlfont-extrabold">Hi , I am</span>
          <span className="text-4xl font-extrabold">Sudarsanam Ganesan</span>
        </div>
        {/* postiton */}
        <div>
          <span className="text-3xl">{position}</span>
        </div>
        <div className="sm:w-2xl mt-3 text-2xl text-gray-300 flex ">
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            mollitia totam ea et, at eaque aut. Quasi ullam voluptatem
            reprehenderit. Natus officiis consectetur animi qui magnam dicta a
            iste accusantium?
          </span>
        </div>
        <div className="mt-5">
          <button
            className="bg-gradient-to-r from-[#DB00FF] via-[#B200FF] to-[#8D00FF] text-white font-bold
            px-24 py-3 rounded-lg
            "
          >
            Check My Resume
          </button>
        </div>
      </div>
      {/* right */}
      <div className="rounded-full">
        <Image
          src={assets.images.profile}
          width={300}
          height={300}
          alt="image"
          className="rounded-4xl  "
        />
      </div>
    </div>
  );
}
