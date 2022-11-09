import { Container } from "reactstrap"
import Avatar from "../sections/Avatar";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";

const HomePage = () => {
  return (
    <Container>
      <Avatar />
      <hr />
      <AboutMe />
      <hr />
      <Skills />
      <hr />
      <Projects />
    </Container>
  );
}

export default HomePage