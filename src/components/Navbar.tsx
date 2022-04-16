import { useEffect, useState } from "react"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { Link } from "react-scroll"
import Logo from "../assets/images/logo.png"
import { URL_EMAIL, URL_GITHUB, URL_LINKEDIN } from "../constants"

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)
  function handleNavbarClick() {
    setShowNavbar(!showNavbar)
  }

  const [topOfPage, setTopOfPage] = useState(true)
  function calculateTopOfPage() {
    if (window.pageYOffset > 0) {
      if (topOfPage) setTopOfPage(false)
    } else {
      setTopOfPage(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", calculateTopOfPage)
  })

  return (
    <div className={topOfPage ? "navbar" : "navbar shadow"}>
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="underlined-animation">
          <Link to="home" smooth={true} spy={true} activeClass={"underlined"} duration={500}>
            Home
          </Link>
        </li>
        <li className="underlined-animation">
          <Link to="about" smooth={true} spy={true} activeClass={"underlined"} duration={500}>
            About
          </Link>
        </li>
        <li className="underlined-animation">
          <Link to="skills" smooth={true} spy={true} activeClass={"underlined"} duration={500}>
            Skills
          </Link>
        </li>
        <li className="underlined-animation">
          <Link to="projects" smooth={true} spy={true} activeClass={"underlined"} duration={500}>
            Projects
          </Link>
        </li>
        <li className="underlined-animation">
          <Link to="resume" smooth={true} spy={true} activeClass={"underlined"} duration={500}>
            Resume
          </Link>
        </li>
        <li className="underlined-animation">
          <Link to="contact" smooth={true} spy={true} activeClass={"underlined"} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleNavbarClick} className="md:hidden z-10">
        {!showNavbar ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!showNavbar ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-primary-color flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">
          <Link onClick={handleNavbarClick} to="home" smooth={true} spy={true} activeClass={"underlined"} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleNavbarClick} to="about" smooth={true} spy={true} activeClass={"underlined"} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleNavbarClick} to="skills" smooth={true} spy={true} activeClass={"underlined"} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleNavbarClick} to="projects" smooth={true} spy={true} activeClass={"underlined"} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleNavbarClick} to="resume" smooth={true} spy={true} activeClass={"underlined"} duration={500}>
            Resume
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleNavbarClick} to="contact" smooth={true} spy={true} activeClass={"underlined"} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href={URL_LINKEDIN} target={"_blank"}>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a className="flex justify-between items-center w-full text-gray-300" href={URL_GITHUB} target={"_blank"}>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full text-gray-300" href={`mailto:${URL_EMAIL}`} target={"_blank"}>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <Link className="flex justify-between items-center w-full text-gray-300" to="resume" smooth={true} spy={true} duration={500}>
              Resume <BsFillPersonLinesFill size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
