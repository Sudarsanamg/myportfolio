export function ExperienceCard(){
    const data ={
        company :'Barberaa',
        position : 'Full stack Developer',
        start : 'Nov 2024',
        end :'Present',
        desc:'I worked on full-stack development, focusing on both the backend with Flask and the frontend UI using JavaScript. Additionally, I identified, debugged, and fixed issues to improve application performance and user experience .',
        skills: ['Next js','Tailwind CSS','Git','Express Js','REST API','My SQL','AWS']
    }
    return (
        <div className="sm:w-3xl m-3 border-2 shadow-[0_0_20px_#93c5fd] border-blue-600 p-5">
            <div className="flex flex-col">
                {/* company name */}
                <span className="font-bold text-2xl text-violet-300">{data.company}</span>
                <span className="font-medium text-xl">{data.position}</span>
                <div className="flex text-lg">
                    <span>{data.start}</span>
                    <span>-</span>
                    <span>{data.end}</span>
                </div>

            </div>
            <div className='mt-5'>
                {/* description */}
                <span>{data.desc}</span>
            </div>
            <div className="flex mt-5">
                <div>
                    <span className=" mr-5 font-bold">Skills</span>
                </div>
                <div className="flex gap-3 flex-wrap">
                    {data.skills.map((item,index)=>(
                        <div key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}