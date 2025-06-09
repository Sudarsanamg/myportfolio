import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <div className="flex justify-center mt-10 backdrop-blur-3xl py-10 ">
      <div className="flex items-center flex-col gap-10">
        <div>
          <span className="bold text-purple-300 text-2xl">
            Sudarsanam Ganesan
          </span>
        </div>
        {/* <div className="flex justify-around gap-3 sm:gap-10">
                     <div className="hover:text-purple-400 transition 0.5s"><span>About</span></div>
            <div className="hover:text-purple-400 transition 0.5s"><span>Skills</span></div>
            <div className="hover:text-purple-400 transition 0.5s"><span>Experience</span></div>
            <div className="hover:text-purple-400 transition 0.5s"><span>Projects</span></div>
            <div className="hover:text-purple-400 transition 0.5s"><span>Education</span></div>

                </div> */}
        
        <div className="flex items-center ">
          <a
            href="https://www.linkedin.com/in/sudarsanam-g-79a79b253/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:underline"
          >
          <p>Follow me on </p>  <Linkedin size={20} />
            {/* <p>Linked in</p> */}
          </a>
        </div>
        <div>&#169; 2025 Sudarsanam Ganesan</div>
      </div>
    </div>
  );
}
