import React from "react"
import CSS from "../assets/images/css.png"
import GitHub from "../assets/images/github.png"
import HTML from "../assets/images/html.png"
import JavaScript from "../assets/images/javascript.png"
import Mongo from "../assets/images/mongo.png"
import Node from "../assets/images/node.png"
import ReactImg from "../assets/images/react.png"

export default function Skills() {
  return (
    <div id="skills" className="section text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="sub-header">Skills</p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="skills-card">
            <img src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="skills-card">
            <img src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="skills-card">
            <img src={JavaScript} alt="JAVASCRIPT icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="skills-card">
            <img src={ReactImg} alt="REACT icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="skills-card">
            <img src={GitHub} alt="GITHUB icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="skills-card">
            <img src={Node} alt="NODEJS icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="skills-card">
            <img src={Mongo} alt="MONGODB icon" />
            <p className="my-4">MONGO DB</p>
          </div>
        </div>
      </div>
    </div>
  )
}
