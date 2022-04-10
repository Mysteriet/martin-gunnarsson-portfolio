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
          <div className="sm:text-right text-4xl font-bold">
            <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus efficitur euismod. Vivamus aliquam lacus mi. Curabitur nisl ligula, molestie vel tincidunt non, egestas vel erat. Maecenas euismod quam dignissim lectus imperdiet, quis cursus tortor laoreet. In facilisis dui
              mauris, pulvinar placerat ex tristique eget. In mollis molestie massa sed elementum. Donec quis accumsan eros, id interdum elit. Nulla facilisi. Cras varius varius nisl.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
