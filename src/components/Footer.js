import { Container, Col, Row } from "reactstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light text-center">
      <Row>
        <Col>Github Linkedin Twitter</Col>
      </Row>
      <Row>
        <Col>
          <a href="/">Home</a> <a href="/">Blog</a> <a href="/">Contact</a>
        </Col>
      </Row>
      <Row>
        <Col>© Copyright 2022</Col>
      </Row>
    </Container>
  );
};

export default Footer;
