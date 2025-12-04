export function ExperienceCard(){
const data = {
  company: "CartRabbit (Humbletree Cloud Pvt Ltd)",
  position: "Full Stack Developer Intern",
  start: "Aug 2025",
  end: "Nov 2025",
  desc:
    "Worked on building a Shopify Preorder Extension SaaS using Remix, React, TypeScript, Prisma, and PostgreSQL. Implemented preorder campaign creation, partial and full payment flows, webhook automation, metafield & metaobject integrations, and embedded app UI using Shopify Polaris. Improved code quality, handled complex backend workflows, and optimized the storefront script for performance and reliability.",
  skills: [
    "Remix",
    "React.js",
    "TypeScript",
    "Shopify Polaris",
    "Shopify Admin API",
    "Prisma ORM",
    "PostgreSQL (Neon)",
    "Node.js",
    "Webhooks",
    "GraphQL",
    "Git & GitHub"
  ]
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