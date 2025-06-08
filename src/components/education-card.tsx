export function EducationCard(){
    const data ={
       school :'Dr.NGP institute of Technology',
       degree :'B.E. Computer Science Engineering',
       duration : 'Nov 2021 - April 2026',
       grade:'7.43 CGPA',
       desc :'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quibusdam ratione atque culpa optio quia, ut numquam harum rerum, enim consectetur. Id molestias consequatur cum incidunt quis unde accusantium quod!'
    }
    return (
        <div className="sm:w-3xl border-2 shadow-[0_0_20px_#93c5fd] border-blue-600 p-5 m-3">
            <div className="flex flex-col">
                {/* company name */}
                <span className="font-bold ">{data.school}</span>
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