import "bootstrap/dist/css/bootstrap.min.css"
import About from "./sections/About"
import Footer from "./sections/Footer"
import Intro from "./sections/Intro"
import Navigation from "./sections/Navigation"
import Projects from "./sections/Projects"

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}
