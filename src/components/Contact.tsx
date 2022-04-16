import { URL_EMAIL } from "../constants"

export default function Contact() {
  const handleKeyDown = (e: any): void => {
    if (e.key === " ") e.preventDefault() // Prevent whitespace entry
  }
  const handleChange = (e: any): void => {
    if (e.currentTarget.value.includes(" ")) e.currentTarget.value = e.currentTarget.value.replace(/\s/g, "") //Prevent whitespace copy-paste
  }

  return (
    <div id="contact" className="section center-items p-4">
      <form method="POST" action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accent-color text-gray-300">Contact</p>
          <p className="text-gray-300 py-4">// Submit the form below or contact me at: {URL_EMAIL}</p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" onKeyDown={handleKeyDown} onChange={handleChange} />
        <textarea className="bg-[#ccd6f6] p-2" name="message" rows={10} placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-accent-color hover:border-accent-color px-4 py-3 my-8 mx-auto flex items-center">Send</button>
      </form>
    </div>
  )
}
