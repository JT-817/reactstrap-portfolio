import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="bg-dark text-light text-center">
        <Row>
          <Col>Github Linkedin Twitter</Col>
        </Row>
        <Row>
          <Col>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/blog">Blog</Link>
            {/* <a href="/">Home</a> <a href="/">Blog</a> <a href="/">Contact</a> */}
          </Col>
        </Row>
        <Row>
          <Col>© Copyright 2022</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
