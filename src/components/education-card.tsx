export function EducationCard(){
    const data ={
       school :'Dr.NGP institute of Technology',
       degree :'B.E. Computer Science Engineering',
       duration : 'Nov 2021 - April 2025',
       grade:'7.43 CGPA',
       desc :'I had Completed my B.E CSE at Dr.NGPIT Coimbatore , Here I have build my foundation for my carrer.  Learned basic programming skills and improved my knowledge in computer science domain .'
    }
    return (
        <div className="sm:w-3xl border-2 shadow-[0_0_20px_#93c5fd] border-blue-600 p-5 m-3">
            <div className="flex flex-col">
                {/* company name */}
                <span className="font-bold text-xl text-purple-300 ">{data.school}</span>
                <span className="font-medium">{data.degree}</span>
                <span>{data.duration}</span>
                <span>{data.grade}</span>

            </div>
            <div className='mt-5'>
                {/* description */}
                <span>{data.desc}</span>
            </div>
        </div>
    )
}