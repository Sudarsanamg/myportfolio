"use client";

import Image from "next/image";
import { assets } from "@/assets";
// import { useEffect } from "react";

export function IntroCard() {
  // const pos = ["Full Stack Developer"];
  // const [position, setPositon] = useState("");

  // useEffect(() => {
  //   let i = 0;

  //   setInterval(() => {
  //     i = i % pos.length;
  //     const str = pos[i];
  //     let j = 0;

      // for(let j=0;j<str.length;j++){
      //     str = str.slice(0,j);
      //     console.log(str);
      //     setPositon(str)
      // }
  //     setInterval(() => {
  //       setPositon(str.slice(0, j + 1));
  //       j++;
  //     }, 100);
  //     i++;
  //   }, 3000);
  // }, []);

  return (
    <div className="flex items-center gap-5 p-5 flex-col-reverse sm:flex-row">
      {/* left */}
      <div>
        <div className="flex flex-col">
          {/* greetings */}
          <span className=" text-4xl font-extrabold">Hi , I am</span>
          <span className="text-4xl font-extrabold">Sudarsanam Ganesan</span>
        </div>
        {/* postiton */}
        <div>
          <span className="text-3xl text-transparent bg-gradient-to-r  from-[#DB00FF] via-[#931ac8] to-[#8D00FF] bg-clip-text">Full Stack Developer</span>
        </div>
        <div className="sm:w-2xl mt-3 text-2xl text-gray-300 flex ">
          <span>
            As a developer i can able to create a product , and able to optimize it . A fresher
            finding joy in working on real world applications and travelling around world.
          </span>
        </div>
        <div className="mt-5">
          <button
            className="bg-gradient-to-r from-[#DB00FF] via-[#B200FF] to-[#8D00FF] text-white font-bold
            px-24 py-3 rounded-lg cursor-pointer
            "
            onClick={() => {
  window.open('https://drive.google.com/file/d/1SOQcSAWY_mmKQdTXEQg0v2AlBG1qa8oJ/view?usp=sharing', '_blank');
}}

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
