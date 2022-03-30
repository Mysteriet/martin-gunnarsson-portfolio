import { Container, Nav, Navbar } from "react-bootstrap"
import { Github, Linkedin } from "react-bootstrap-icons"

export default function Footer() {
  return (
    <Navbar className="footer" expand="lg" bg="dark" variant="dark">
      <Container className="position-relative">
        <Navbar className="position-absolute top-50 start-50 translate-middle responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#features">
              <Linkedin />
            </Nav.Link>
            <Nav.Link href="#features">
              <Github />
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  )
}
