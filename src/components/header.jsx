'use client';
export function Header({refs,scrollTo}) {

  // const about = props?.aboutRef;
    const { aboutRef, skillsRef ,contactRef,experience,education } = refs;


  return (
    <div className="flex justify-center py-4 backdrop-blur-3xl z-10 text-lg cursor-pointer">
      <div className="flex justify-around w-7xl items-center">
        {/* left */}
        <div>
            <span className="font-bold text-2xl">Sudarsanam G</span>
        </div>
        {/* center */}
        <div className="flex justify-evenly w-2xl font-semibold">
            <div className="hover:text-purple-400 transition 0.5s" onClick={() => scrollTo(aboutRef)}><span>About</span></div>
            <div className="hover:text-purple-400 transition 0.5s"  onClick={() => scrollTo(skillsRef)}><span>Skills</span></div>
            <div className="hover:text-purple-400 transition 0.5s"  onClick={() => scrollTo(experience)}><span>Experience</span></div>
            <div className="hover:text-purple-400 transition 0.5s"  onClick={() => scrollTo(education)}><span>Education</span></div>
            <div className="hover:text-purple-400 transition 0.5s" onClick={() => scrollTo(contactRef)}><span>Contact Me</span></div>

        </div>
        {/* right */}
        <div>
            <div className="border-2 border-purple-500 rounded-2xl text-purple-500 px-3 py-1 hover:bg-purple-500 hover:text-white"
            
            onClick={()=>{
              window.open('https://github.com/Sudarsanamg')
            }}
            
            >
                <span>Github Profile</span>
            </div>
        </div>
      </div>
    </div>
  );
}
