export default function About() {
  return (
    <div id="about" className="section text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-accent-color">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">
              "Once he has joined your team, you will <span className="text-accent-color">never</span> want to get rid of him.."
            </p>
            <p className="sm:text-right italic">- Former colleague</p>
          </div>
          <div>
            <p>With many years experience in test-driven, object-oriented and functional programming, I can quickly become acquainted with new complex systems and contribute to its maintenance and further development. This is something I consider to be on of my greatest strengths.</p>
            <br />
            <p>With experience from agile projects to develop automated solutions, tools and processes, I am used to making decisions about system architecture, being driven and proactive.</p>
            <br />
            <p>I also place great emphasis on being able to contribute with a good work climate and cooperation to the team.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
