export function Header() {
  return (
    <div className="flex justify-center py-4 backdrop-blur-3xl z-10 text-lg cursor-pointer">
      <div className="flex justify-around w-7xl items-center">
        {/* left */}
        <div>
            <span>Sudarsanam G</span>
        </div>
        {/* center */}
        <div className="flex justify-evenly w-2xl font-semibold">
            <div className="hover:text-purple-400 transition 0.5s"><span>About</span></div>
            <div className="hover:text-purple-400 transition 0.5s"><span>Skills</span></div>
            <div className="hover:text-purple-400 transition 0.5s"><span>Experience</span></div>
            <div className="hover:text-purple-400 transition 0.5s"><span>Projects</span></div>
            <div className="hover:text-purple-400 transition 0.5s"><span>Education</span></div>

        </div>
        {/* right */}
        <div>
            <div className="border-2 border-purple-500 rounded-2xl text-purple-500 px-3 py-1">
                <span>Github Profile</span>
            </div>
        </div>
      </div>
    </div>
  );
}
