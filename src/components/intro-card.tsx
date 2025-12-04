"use client";

import Image from "next/image";
import { assets } from "@/assets";
import { useEffect, useState } from "react";

export function IntroCard() {
  const fullText = "Full Stack Developer";
  const [position, setPositon] = useState("Full Stack Developer");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(250);

  useEffect(() => {
    const handleType = () => {
      const currentText = fullText;

      setPositon(
        isDeleting
          ? currentText.substring(0, position.length - 1)
          : currentText.substring(0, position.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && position === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && position === "") {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [position, isDeleting, typingSpeed]);

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
        <div className="h-12">
          <span className="text-3xl text-transparent bg-gradient-to-r  from-[#DB00FF] via-[#931ac8] to-[#8D00FF] bg-clip-text">
            {position}
          </span>
          <span className="text-3xl text-transparent bg-gradient-to-r from-[#DB00FF] via-[#931ac8] to-[#8D00FF] bg-clip-text animate-pulse">|</span>
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
  window.open('https://drive.google.com/file/d/1vVMgQFwx7S0mpZ9RfiMjZxTSvczZbgsl/view?usp=sharing', '_blank');
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
          alt="Sudarsanam Ganesan - Full Stack Developer"
          className="rounded-4xl"
          priority
          style={{ height: 'auto' }}
        />
      </div>
    </div>
  );
}
