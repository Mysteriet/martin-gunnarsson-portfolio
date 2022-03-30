import { Container, Nav, Navbar } from "react-bootstrap"
import { Github, Linkedin } from "react-bootstrap-icons"
import { URL_GITHUB, URL_LINKEDIN } from "../constants"

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Martin Gunnarsson</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={URL_LINKEDIN}>
              <Linkedin />
            </Nav.Link>
            <Nav.Link href={URL_GITHUB}>
              <Github />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
