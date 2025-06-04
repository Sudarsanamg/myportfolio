import { url } from "inspector"

export function Skills(){

    const skillArray =[
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', title: 'JavaScript' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', title: 'TypeScript' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', title: 'React.js' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', title: 'React Native' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', title: 'Next.js' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', title: 'Node.js' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', title: 'Express.js' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', title: 'MongoDB' },
  { url: 'https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png', title: 'Mongoose' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', title: 'PostgreSQL' },
  { url: 'https://avatars.githubusercontent.com/u/17219288?s=200&v=4', title: 'Prisma ORM' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', title: 'Docker' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', title: 'Kubernetes' },
  { url: 'https://socket.io/images/logo.svg', title: 'Socket.io' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/WebRTC_Logo.svg/320px-WebRTC_Logo.svg.png', title: 'WebRTC' },
  { url: 'https://redux.js.org/img/redux.svg', title: 'Redux' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', title: 'Java' },
  { url: 'https://jestjs.io/img/opengraph.png', title: 'Jest' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png', title: 'Selenium' },
  { url: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png', title: 'Amazon S3' },
  { url: 'https://developers.google.com/identity/images/g-logo.png', title: 'Google OAuth' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', title: 'Git' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', title: 'GitHub' },
  { url: 'https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/favicon.ico', title: 'Vercel' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Render_logo.svg/512px-Render_logo.svg.png', title: 'Render' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', title: 'Android Studio' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', title: 'HTML' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', title: 'CSS' },
  { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', title: 'SQL' },
  { url: 'https://tailwindcss.com/_next/static/media/social-card-large.6d6e5eef.jpg', title: 'Tailwind CSS' }
]


    return (
        <div>
            <div className="flex justify-center">
                <span className="text-4xl font-bold">Skills</span>
            </div>
            <div className="flex justify-center mt-10" >
                <div className="flex flex-wrap gap-3 justify-center w-[1000px]">
                {skillArray.map((item,index)=>(
                    <div key={index} className="flex items-center border-1 border-gray-100 px-2 py-1 rounded-lg animate-floating shadow-[0_0_7px_#93c5fd]">
                        <img src={item.url} alt="" className="w-[35px] mr-3" />
                        <span>{item.title}</span>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}