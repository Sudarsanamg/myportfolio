// import Image from "next/image";
'use client';
import { Contact } from "@/components/contact";
import { Skills } from "../components/skills";
import { ExperienceCard } from "@/components/experience-card";
import { EducationCard } from "@/components/education-card";
import { IntroCard } from "@/components/intro-card";
import {Header} from '@/components/header'
import {Footer} from '@/components/footer'
import {MobileHeader} from '@/components/mobile-header'
import React, { useRef } from 'react';




export default function Home() {
    const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const experience = useRef(null);
  const education  = useRef(null);


const scrollTo = (ref) => {
if (ref.current) {
  const offset = -100;
  const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition + offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
  };


  return (
    <div className="relative pb-10  overflow-visible max-w-screen mx-auto">
     
  <img src="/images/background.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
      <div className="sticky top-0 hidden sm:block">
        <Header refs={{ aboutRef, skillsRef ,contactRef,experience,education }} scrollTo={scrollTo}/>
      </div>
      <div className="sticky top-0 block sm:hidden">
        <MobileHeader refs={{ aboutRef, skillsRef ,contactRef,experience,education }} scrollTo={scrollTo} />
      </div>
      <div className="flex justify-center mt-10" ref={aboutRef}>
        <IntroCard />
      </div>
      <div className="flex justify-center mt-20" ref={skillsRef}>
        <Skills />
      </div>
      <div className="flex justify-center mt-15" ref={experience}>
        <span className="text-4xl font-bold">Experience</span>
      </div>
      <div className="flex justify-center mt-10">
        <ExperienceCard />
      </div>
      <div className="flex justify-center mt-15" ref={education}>
        <span className="text-4xl font-bold">Education</span>
      </div>
      <div className="flex justify-center mt-10">
        <EducationCard />
      </div>
      <div className="flex justify-center mt-10" ref={contactRef}>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
