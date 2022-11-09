import React from "react";
import { Row, Col } from "reactstrap";
import avatarImg from "../images/avatar.jpg";

const Avatar = () => {
  return (
    <>
      <Row className="text-center">
        <Col>
            <h1>Hey I'm Josh</h1>
          <img className="avatar" src={avatarImg} alt="avatar"></img>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
        <p>I'm a frontend developer working with react.</p>
        </Col>
      </Row>
      <hr />
    </>
  );
};

export default Avatar;
