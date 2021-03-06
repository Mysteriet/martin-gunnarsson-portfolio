import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"

export default function Home() {
  return (
    <div id="home" className="section">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-accent-color">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Martin Gunnarsson</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">I am a driven and enthusiastic full-stack developer located in Sweden, with a strong passion for front-end development.</p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-accent-color hover:border-accent-color">
              More about me <HiArrowNarrowRight className="ml-3" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
