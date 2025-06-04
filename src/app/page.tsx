// import Image from "next/image";
import { Contact } from "@/components/contact";
import { Skills } from "../components/skills";
import { ExperienceCard } from "@/components/experience-card";
import { EducationCard } from "@/components/education-card";
import { IntroCard } from "@/components/intro-card";

export default function Home() {
  return (
    <div className="relative pb-10">
     
  <img src="/images/background.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
      <div className="flex justify-center mt-10">
        <IntroCard />
      </div>
      <div className="flex justify-center mt-10">
        <Skills />
      </div>
      <div className="flex justify-center mt-15">
        <span className="text-4xl font-bold">Experience</span>
      </div>
      <div className="flex justify-center mt-10">
        <ExperienceCard />
      </div>
      <div className="flex justify-center mt-15">
        <span className="text-4xl font-bold">Education</span>
      </div>
      <div className="flex justify-center mt-10">
        <EducationCard />
      </div>
      <div className="flex justify-center mt-10">
        <Contact />
      </div>
    </div>
  );
}
