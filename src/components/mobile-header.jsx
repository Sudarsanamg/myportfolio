'use client';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function MobileHeader({refs,scrollTo}){
    const [visible ,setVisible] = useState(false);
    const { aboutRef, skillsRef ,contactRef,experience,education } = refs;

    return (
        <div className=' z-50 pb-5 relative '>
            {/* visible  */}
            <div className='backdrop-blur-md flex justify-between   bg-black/30 p-3'>
                <div>
                    <span className='font-extrabold text-2xl'>Sudarsanam G</span>
                </div>
                <div onClick={()=> setVisible(!visible)}>
                    <Menu />
                </div>
            </div>
            {/* drropdown */}
            {visible && 
            <div className='absolute backdrop-blur-md bg-black/30 w-full -m-2 py-5 px-2 text-lg'>
            <div className='flex flex-col gap-2 px-5  '>
           <div className="hover:text-purple-400 transition 0.5s" onClick={() =>{ scrollTo(aboutRef)
            setVisible(false)
           }}><span>About</span></div>
            <div className="hover:text-purple-400 transition 0.5s"  onClick={() =>{ scrollTo(skillsRef)
                            setVisible(false)

            }}><span>Skills</span></div>
            <div className="hover:text-purple-400 transition 0.5s"  onClick={() =>{ scrollTo(experience)
                            setVisible(false)

            }}><span>Experience</span></div>
            <div className="hover:text-purple-400 transition 0.5s"  onClick={() => {scrollTo(education)
                            setVisible(false)

            }}><span>Education</span></div>
            <div className="hover:text-purple-400 transition 0.5s" onClick={() => {scrollTo(contactRef)
                            setVisible(false)

            }}><span>Contact Me</span></div>
            </div>
            <div>
            <div className="border-2 w-40 border-purple-500 rounded-2xl bg-purple-500 text-white font-bold px-3 py-1 ml-3 mt-3">
                <span>Github Profile</span>
            </div>
            </div>
                    </div>

            }
        </div>
    )
}